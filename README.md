<p align="center">
    <a href="javascript:;">
        <img width="200" src="https://raw.githubusercontent.com/mcakeui/mcake-ui/1.X/assets/logo.png">
    </a>
</p>

# Mcake UI
<p>
    <a href="https://www.npmjs.org/package/mcake-ui">
      <img src="https://img.shields.io/npm/v/mcake-ui.svg">
    </a>
    <a href="https://npmcharts.com/compare/mcake-ui?minimal=true">
      <img src="http://img.shields.io/npm/dm/mcake-ui.svg">
    </a>
</p>
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
<!-- import stylesheet -->
<link href="dist/css/mcake-ui.min.css" rel="stylesheet">
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import McakeUI -->
<script src="dist/mcake-ui.min.js"></script>
```
### 快速上手

``` javascript
import Vue from 'vue'
import McakeUI from 'mcake-ui'
import 'mcake-ui/dist/css/mcake-ui.css'

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