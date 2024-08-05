使用[VitePress](https://vitepress.dev/zh/guide/getting-started){target="_blank"}搭建博客，过程中遇到的卡点及解决方案：

::: info
1、目录结构与官方文档中提供的不一致，导致后续步骤理解不顺畅。
```md
执行npx vitepress init命令的第一个参数需要输入docs，其他参数默认即可。
```
2、版本管理中包含部分自动生成的文件
```md
使用.gitignore过滤，内容如下：

node_modules
docs/.vitepress/cache
docs/.vitepress/dist
```
3、部署平台用的github，遇到DNS污染问题，无法直接访问github，[下载地址](https://steampp.net/){target="_blank"}
```md
使用Watt Toolkit加速
```

4、配置config中的head图片无效
```md
图片放置到docs/public文件夹中
```
5、项目目录结构
```md
.
├─ .github
│  └─ workflows
│  │  └─ deploy.yml
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ public
│  │  └─ favicon.jpg
│  ├─ src
│  │  └─ index.md
├─ .gitignore
├─ package.json
└─ README.md
```
:::



