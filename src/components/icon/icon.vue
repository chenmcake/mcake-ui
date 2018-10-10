<template>
    <i v-if="type" :class="classes" :style="styles"></i>
</template>

<script>
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
        // 颜色
        color: String,
        // 行高
        lineHeight: [Number, String]
    },
    // 计算属性
    computed: {
        // 图标class
        classes () {
            return prefixClass + '-' + this.type;
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
    }
};
</script>
