<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// icon class前缀
const prefixClass = 'm-btn-group';
// 输出
export default {
    // 组件名称
    name: 'MButtonGroup',
    // 属性
    props: {
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
        // 是否为垂直的
        vertical: {
            type: Boolean,
            default: false
        },
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
                    // 形状
                    [`${prefixClass}-${this.shape}`]: !!this.shape,
                    // 是否为垂直的
                    [`${prefixClass}-vertical`]: this.vertical,
                }
            ];
        },
    }
};
</script>
