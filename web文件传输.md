# web文件传输

## 上传

​	1> 必须为post方式提交

​	2> from的编码方式(enctype)设置为multipart/form-data，不对数据编码

​	3> 请求体数据

```
-----------------------------7e3e438502b4
Content-Disposition: form-data; name="username"

çå´
-----------------------------7e3e438502b4
Content-Disposition: form-data; name="password"

123456

-----------------------------7e3e438502b4
Content-Disposition: form-data; name="myfile"; filename="C:\Users\wangxing\Pictures\timg.gif"
Content-Type: image/gif

GIF89aê
```

服务器接收代码

```java
ServletFileUpload fileupload = new ServletFileUpload(new xxx);
List<FileItem> fileItems = fileupload.parseRequest(requesst);
```

