<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
// 公共方法
import { toNumber } from '../../utils/base';
// icon class前缀
const prefixClass = 'm-row';
// 输出
export default {
    // 组件名称
    name: 'MRow',
    // 属性
    props: {
        // 是否为垂直的
        vertical: {
            type: Boolean,
            default: false
        },
        // 间距
        gutter: {
            type: [String, Number],
            default: 0
        },
    },
    // 计算属性
    computed: {
        // class
        classes () {
            return  [
                // 默认class
                `${prefixClass}`,
            ];
        },
        // 样式
        styles() {
            // 获得间距
            let gutter = toNumber(this.gutter),
                // 样式
                style = {};
            // 如果间距
            if (gutter !== 0) {
                style = {
                    marginLeft: gutter / -2 + 'px',
                    marginRight: gutter / -2 + 'px'
                };
            }
            return style;
        }
    },
};
</script>
