<template>
    <li :class="wrapClasses">
        <slot></slot>
    </li>
</template>

<script>
// 输入框主容器 class
const wrapClass = 'm-dropdown-item';

// 输出
export default {
    name: 'MDropdownItem',
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
