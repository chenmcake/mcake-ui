<template>
    <div :class="groupClasses">
        <slot></slot>
    </div>
</template>

<script>

// 组件主容器 class
const GroupClass = 'm-radio-group';

// 输出
export default {
    // 组件名称
    name: 'MRadioGroup',
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否为垂直
        vertical: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data() {
        // 输入数据
        return {
        }
    },
    created() {
        // 监听单选框改变事件 并触发接口事件
        this.$on('handleChange', value => {
            // 触发接口事件
            this.$emit('change', value);
        });
    },
    // 计算属性
    computed: {
        // 单选框主容器的calss
        groupClasses() {
            return [
                `${GroupClass}`,
                {
                    'vertical': this.vertical
                }
            ];
        },
    },
    // 方法
    methods: {
    }
};
</script>
