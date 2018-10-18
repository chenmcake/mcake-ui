# Mcake UI

- Mcake UI诞生于2018年，是一个基于Vue的前端UI框架，致力于让Web开发变得更简单！
- 作者：淡淡的月饼
- *注：目前组件开发尚未完成，所以暂时无法正常使用，请耐心等待。。。*-


### 安装 Mcake UI

通过npm 安装
```
npm install mcake-ui --save
```
通过script标签 安装
```html
<link rel="stylesheet" href="dist/css/mcake-ui.min.css">
<script type="text/javascript" src="mcake-ui.min.js"></script>
```
### 快速上手

``` javascript
import Vue from 'vue'
import McakeUI from 'mcake-ui'

Vue.use(McakeUI)

// 按需引用
import {
  Input,
  Button
  // ...
} from 'mcake-ui'

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
```