<template>
    <div class="m-crumb">
        <slot></slot>
    </div>
</template>

<script>

// 输出
export default {
    // 组件名称
    name: 'MCrumb',
    // 属性
    props: {
        // 分隔符
        separator: {
            type: String,
            default: '/'
        }
    },
    mounted() {
        // 更新子菜单分隔符
        this.updateChildren();
    },
    watch: {
        // 分隔符发生改变
        separator () {
            this.updateChildren();
        }
    },
    // 重新渲染时
    updated () {
        this.$nextTick(() => {
            this.updateChildren();
        });
    },
    // 方法
    methods: {
        // 更新所有的子菜单分隔符
        updateChildren() {
            this.$children.forEach(item => {
                item.separator = this.separator;
            });
        }
    }
};
</script>
