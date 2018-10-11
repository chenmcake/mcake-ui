<template>
    <button :class="classes" :type="htmlType" :disabled="disabled" @click="handleClick">
        <m-icon v-if="icon" :type="icon"></m-icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入子组件
import MIcon from '../icon';

// icon class前缀
const prefixClass = 'm-btn';
// 输出
export default {
    // 组件名称
    name: 'MButton',
    // 属性
    props: {
        // 类型
        type: {
            type: String,
            validator(value) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble', 'white', 'text'], value);
            }
        },
        // 大小尺寸
        size: {
            type: String,
            validator(value) {
                return includes(['mini', 'small', 'default', 'large'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator(value) {
                return includes(['fillet', 'pill', 'square', 'box', 'circle'], value);
            }
        },
        // 按钮HTML 类型
        htmlType: {
            type: String,
            default: 'button',
            validator(value) {
                return includes(['button', 'submit', 'reset'], value);
            }
        },
        // 是否为边框类型 默认为否
        bordered: {
            type: Boolean,
            default: false
        },
        // 是否禁止点击
        disabled: Boolean,
        // 是否为长按钮
        long: {
            type: Boolean,
            default: false
        },
        // 图标
        icon: String
    },
    data() {
        return {
            // 是否显示分发
            showSlot: true
        }
    },
    // 计算属性
    computed: {
        // class
        classes () {
            return  [
                // 默认class
                `${prefixClass}`,
                // 配置class
                {
                    // 尺寸
                    [`${prefixClass}-${this.size}`]: !!this.size,
                    // 类型
                    [`${prefixClass}-${this.type}`]: !!this.type,
                    // 形状
                    [`${prefixClass}-${this.shape}`]: !!this.shape,
                    // 是否有边框
                    'bordered': this.bordered,
                    // 是否为长按钮
                    [`${prefixClass}-long`]: this.long,
                }
            ];
        },
    },
    // 实例创建完毕
    mounted () {
        // 判断是否存在分发的内容
        this.showSlot = this.$slots.default !== undefined;
    },
    methods: {
        // 处理按钮点击事件
        handleClick(event) {
            this.$emit('click', event);
        }
    },
    // 子组件
    components: { MIcon }
};
</script>
