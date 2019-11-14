# Swagger



> 映入依赖

```xml
<dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-swagger2</artifactId>
      <version>2.6.1</version>
</dependency>
<dependency>
     <groupId>io.springfox</groupId>
     <artifactId>springfox-swagger-ui</artifactId>
     <version>2.6.1</version>
</dependency>
```



> 配置类

```java
package cn.wangxing.bootshiro.config.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration 
@EnableSwagger2 // 开启swagger
public class SwaggerConfiguration {
    @Bean
    public Docket createRestApi() {
        ParameterBuilder tokenPar = new ParameterBuilder();
        // 一个全局的接口参数
        tokenPar.name("token").description("令牌")
                .modelRef(new ModelRef("string"))
                .parameterType("query").required(false).build();

        List<Parameter> pars = new ArrayList<Parameter>();
        pars.add(tokenPar.build());
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("cn.wangxing.bootshiro.controller"))
                .paths(PathSelectors.any())
                .build().globalOperationParameters(pars)  ;
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("个人测试")
                .description("个人测试用api")
                .termsOfServiceUrl("http://localhost:8000/dddd")
                .contact("测试")
                .version("1.0")
                .build();
    }
}
```



```java
//	用于类上，对类中接口进行简单说明
@Api(value = "某某controller")

// 开启swagger
@EnableSwagger2

// 用于方法，value和notes显示位置不同，Method为提交方式，如不写会默认全部展示
@ApiOperation(value="登录",notes="。。。。",httpMethod="POST")

// 用于方法，对参数进行进行说明
@ApiImplicitParams({
	@ApiImplicitParam(
        name="name", 	// 参数名称
        value="用户姓名", // 参数说明
        dataType = "String", // 参数类型
        required=true, 	// 是否必须
        paramType="form"	// 。
    )
})
```

 > 默认访问网址：http://localhost:8000/swagger-ui.html 