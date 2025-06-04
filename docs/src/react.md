::: info React服务端渲染，本地调试：
```
node --inspect server.js
```
:::

::: info React服务端渲染，获取客户端 IP：
```
app.get('/', (req, res) => {
  // 获取客户端IP地址
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // 其他代码... 
});
```
:::
