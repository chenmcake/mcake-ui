<template>
    <ul :class="wrapClasses">
        <slot></slot>
    </ul>
</template>

<script>
// 输入框主容器 class
const wrapClass = 'm-dropdown-menu';

// 输出
export default {
    name: 'MDropdownMenu',
    props: {

    },
    data() {
        return {
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
            ];
        },
    },
    mounted() {},
    methods: {
    },
};
</script>
