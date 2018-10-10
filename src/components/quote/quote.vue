<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-quote';

// 输出
export default {
    name: 'MQuote',
    props: {
        // 颜色主题
        type: {
            type: String,
            validator(value) {
                return includes(['primary','success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 是否显示边框
        bordered: {
            type: Boolean,
            default: false
        },
        // 是否显示背景
        showBg: {
            type: Boolean,
            default: false
        },
        // 是否有圆角
        radius: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {}
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 颜色主题
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 是否显示边框
                    'bordered': this.bordered,
                    // 是否显示背景
                    'show-bg': this.showBg,
                    // 是否有圆角
                    'radius': this.radius,
                }
            ];
        },
    },
    mounted() {},
    // 方法
    methods: {
    },

};
</script>
