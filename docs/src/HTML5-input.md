::: info HTML5中input标签使用过程中遇到的卡点及解决方案：
1、双击输入框想要弹出来历史输入过的内容，目前没有弹出来
```md
查阅资料后发现：
Ant Design的InputNumber组件不支持
input标签设置name和autoComplete属性后可以弹窗历史输入内容
保存时机是浏览器控制的，需要将input放入form表单中，点击提交表单时触发保存
```
:::



