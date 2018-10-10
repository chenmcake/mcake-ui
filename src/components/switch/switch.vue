<template>
    <div :class="wrapClasses" @click="toggle" :style="wrapStyle">
        <input type="hidden" :name="name" :value="currentValue">
        <!-- 圆点 -->
        <span class="m-switch-dot" :style="dotStyle"></span>
        <!-- 文字内容 -->
        <span class="m-switch-text">
            <slot name="open" v-if="checked">{{trueText}}</slot>
            <slot name="close" v-if="!checked">{{falseText}}</slot>
        </span>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-switch';

// 输出
export default {
    name: 'MSwitch',
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator (value) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 状态值
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        // 打开时显示文字
        trueText: String,
        // 关闭时显示文字
        falseText: String,
        // 打开时的值
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        // 关闭时的值
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        // 禁用
        disabled: {
            type: Boolean,
            default: false
        },
        //  宽度
        width: {
            type: Number,
            default: 46
        },
        // 高度
        height: {
            type: Number,
            default: 24
        },
        // 输入框名称
        name: String
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
                {
                    // 颜色风格
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 选中状态
                    "checked": this.checked,
                    // 禁止状态
                    "disabled": this.disabled
                }
            ];
        },
        // 主容器样式
        wrapStyle() {
            return {
                width: this.width + "px",
                height: this.height + "px",
                lineHeight: (this.height - 2) + "px"
            }
        },
        // 圆点样式
        dotStyle() {
            return {
                width: this.dotSize + "px",
                height: this.dotSize + "px",
                left: this.checked ? (this.width - this.dotSize - 3) + "px" : "1px"
            }
        },
        // 圆点的大小
        dotSize() {
            // 减掉上下1像素边框 和 上下1像素边距
            return this.height - 4;
        },
        // 是否被选中
        checked() {
            return this.currentValue === this.trueValue;
        }
    },
    watch: {
        value (val) {
            if (val !== this.trueValue && val !== this.falseValue) {
                throw '值只能等于 trueValue 或 falseValue';
            }
            this.currentValue = val;
        }
    },
    mounted() {},
    methods: {
        // 切换状态
        toggle() {
            // 如果是禁用的 中断操作
            if(this.disabled) return;
            // 获得切换后的值
            let value = this.checked ? this.falseValue : this.trueValue;
            // 设置新的值
            this.currentValue = value;
            // 提交事件
            this.$emit("input", value);
            this.$emit("on-change", value);
        }
    },
};
</script>
