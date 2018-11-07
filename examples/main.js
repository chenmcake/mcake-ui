// vue框架
import Vue from 'vue';
// 主程序
import App from './app.vue';
// 引入Mcake
import McakeUI from '@/index';
// 注册组件
Vue.use(McakeUI);

// setTimeout(() => {
//     console.log("开始加载")
//     McakeUI.LoadingBar.start();
// }, 800)

console.log(McakeUI);
console.log('目前一共：' + (Object.keys(McakeUI).length - 1) + '个组件');

window.Vue = Vue;
// 初始化程序
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})