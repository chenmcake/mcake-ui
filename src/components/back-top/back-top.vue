<template>
    <div :class="wrapClasses" :style="wrapStyles" @click="backTop">
        <slot>
            <div class="m-back-top-inner">
                <i class="m-i-top-l"></i>
            </div>
        </slot>
    </div>
</template>

<script>

// 主容器 class
const wrapClass = 'm-back-top';

// 输出
export default {
    name: 'MBackTop',
    props: {
        // 显示返回顶部按钮滚动条高度
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
    mounted() {},
    methods: {
        backTop() {

        }
    },
};
</script>
