// vue框架
import Vue from 'vue';
// 主程序
import App from './app.vue';
// 引入Mcake
import McakeUI from '@/index';
// 注册组件
Vue.use(McakeUI);

window.Vue = Vue;
// 初始化程序
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})