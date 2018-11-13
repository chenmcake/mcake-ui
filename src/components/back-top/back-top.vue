<template>
    <div v-show="show" :class="wrapClasses" :style="wrapStyles" @click="backTop">
        <slot>
            <div class="m-back-top-inner">
                <i class="m-i-top-l"></i>
            </div>
        </slot>
    </div>
</template>

<script>
// 引入dom操作方法
import { on , off, scrollTop } from '../../utils/dom.js';

// 主容器 class
const wrapClass = 'm-back-top';

// 输出
export default {
    name: 'MBackTop',
    props: {
        // 滚动条距离顶部多少时显示
        height: {
            type: Number,
            default: 500
        },
        // 按钮距离底部位置
        bottom: {
            type: Number,
            default: 50
        },
        // 按钮距离右侧位置
        right: {
            type: Number,
            default: 50
        },
        // 滚动动画时间
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return `${wrapClass}`;
        },
        wrapStyles() {
            return {
                right: `${this.right}px`,
                bottom: `${this.bottom}px`
            }
        }
    },
    mounted() {
        on(window, 'scroll', this.handleScroll);
        on(window, 'resize', this.handleScroll);
    },
    beforeDestroy() {
        off(window, 'scroll', this.handleScroll);
        off(window, 'resize', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.show = window.pageYOffset >= this.height;
        },
        // 处理返回顶部点击事件
        backTop() {
            // 获取滚动条高度
            const top = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            // 调用返回顶部方法
            scrollTop(window, top, 0, this.duration);
            // 提交点击事件
            this.$emit('on-click');
        }
    },
};
</script>
