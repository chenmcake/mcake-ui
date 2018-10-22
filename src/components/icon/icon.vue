<template>
    <i v-if="type" :class="classes" :style="styles"></i>
</template>

<script>
import { includes } from '../../utils/base.js';
// icon class前缀
const prefixClass = 'm-i';
// 输出
export default {
    // 组件名称
    name: 'MIcon',
    // 属性
    props: {
        // 图标类型
        type: String,
        // 字体大小
        size: [Number, String],
        // 主题
        theme: {
            type: String,
            validator(value) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 旋转动画
        spin: {
            type: Boolean,
            default: false
        },
        // 颜色
        color: String,
        // 行高
        lineHeight: [Number, String]
    },
    // 计算属性
    computed: {
        // 图标class
        classes () {
            return [
                {
                    // 图标类型 用于控制显示哪个图标
                    [`${prefixClass}-${this.type}`]: !!this.type,
                    // 图标颜色主题
                    [`m-text-${this.theme}`]: !!this.theme,
                    // 旋转加载中动画
                    [`${prefixClass}-spin-loading`]: this.spin,
                }
            ]
        },
        // 图标样式
        styles () {
            let style = {};
            // 如果大小存在
            if (this.size) {
                style['font-size'] = this.size + 'px';
            }
            // 如果颜色存在
            if (this.color) {
                style.color = this.color;
            }
            // 如果行高存在
            if (this.lineHeight) {
                style['line-height'] = this.lineHeight + 'px';
            }
            return style;
        }
    },
    mounted() {
        console.log(this.spin)
    }
};
</script>
