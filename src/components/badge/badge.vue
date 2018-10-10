<template>
    <div :class="wrapClasses">
        <slot></slot>
        <transition name="m-fade">
            <sup v-show="isShow"
                 :class="contentClasses"
                 v-text="content"></sup>
        </transition>
    </div>
</template>

<script>
// 公共方法
import { includes, isNumber } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-badge';

// 输出
export default {
    name: 'MBadge',
    props: {
        // 显示数值
        value: [Number, String],
        // 最大值
        max: Number,
        // 是否为小圆点
        dot: {
            type: Boolean,
            default: false
        },
        // 自定义class
        className: String,
        // 是否隐藏徽章
        hide: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return `${wrapClass}`;
        },
        // 徽章内容class
        contentClasses() {
            return [
                `${wrapClass}-cont`,
                {
                    // 小圆点
                    [`${wrapClass}-dot`]: this.dot,
                    // 单独使用的徽章
                    [`${wrapClass}-cont-alone`]: this.alone,
                    // 自定义class
                    [`${this.className}`]: !!this.className,
                }
            ];
        },
        // 是否显示徽章
        isShow() {
            return !this.hide && (this.content || this.dot);
        },
        // 徽章内容
        content() {
            // 如果为小圆点
            if(this.dot) return;
            // 获得传入的值和最大值
            let value = this.value,
                max = this.max;
            // 判断是否超出最大值
            if(isNumber(value) && isNumber(max)) {
                return value < max ? value : `${max}+`;
            }
            return value;
        },
        // 徽章是否为单独使用
        alone() {
            return this.$slots.default === undefined;
        }
    },
    mounted() {},
    methods: {
    },
};
</script>
