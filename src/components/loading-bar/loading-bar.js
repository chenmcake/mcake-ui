// 加载进度条
import LoadingBar from './loading-bar.vue';
import Vue from 'vue';


// 创建加载进度条实例方法
LoadingBar.newInstance = props => {
    // 参数
    const _props = props || {};
    // 创建实例
    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(LoadingBar, {
                props: _props
            });
        }
    });

    // 手动挂载
    const component = Instance.$mount();
    // 将进度条插入body
    document.body.appendChild(component.$el);
    // 获取实例中的加载进度条组件
    const $loadingBar = Instance.$children[0];

    // 返回实例
    return {
        // 更新实例
        update(options) {
            // 设置精度
            if ('percent' in options) {
                $loadingBar.percent = options.percent;
            }
            // 设置状态
            if (options.status) {
                $loadingBar.status = options.status;
            }
            // 设置显示状态
            if ('show' in options) {
                $loadingBar.show = options.show;
            }
        },
        // 销毁实例
        destroy() {
            let loadingBarDom = document.getElementsByClassName('m-loading-bar')[0];
            if(loadingBarDom) document.body.removeChild(loadingBarDom);
        },
        component: $loadingBar
    };
};

export default LoadingBar;