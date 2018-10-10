<template>
    <div :class="wrapClasses">
        <span v-if="showText" class="m-divider-text">
            <slot></slot>
        </span>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-divider';

// 输出
export default {
    name: 'MDivider',
    props: {
        // 类型
        type: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return includes(['horizontal', 'vertical'], value);
            }
        },
        // 方向
        orientation: {
            type: String,
            validator(value) {
                return includes(['left', 'center', 'right'], value);
            }
        },
        // 是否为虚线
        dashed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showText: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 类型 水平、垂直
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 文字方向
                    [`${wrapClass}-${this.orientation}`]: !!this.orientation,
                    // 是否为虚线
                    [`${wrapClass}-dashed`]: !!this.dashed,
                }
            ];
        },

    },
    mounted() {
        // 设置是否显示文字  垂直状态不显示
        this.showText = this.$slots.default !== undefined && this.type === 'horizontal';
    },
    methods: {}
};
</script>
