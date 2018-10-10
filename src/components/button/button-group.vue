<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>

// icon class前缀
const prefixClass = 'm-btn-group';
// 输出
export default {
    // 组件名称
    name: 'MButtonGroup',
    // 属性
    props: {
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
                    // 默认为横向的
                    [`${prefixClass}-default`]: !this.vertical,
                    // 是否为垂直的
                    [`${prefixClass}-vertical`]: this.vertical,
                }
            ];
        },
    }
};
</script>
