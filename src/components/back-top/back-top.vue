<template>
    <div :class="wrapClasses">
        <slot>
        </slot>
    </div>
</template>

<script>

// 主容器 class
const wrapClass = 'm-back-top';

// 输出
export default {
    name: 'MBackTop',
    props: {

    },
    data() {
        return {
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return `${wrapClass}`;
        },

    },
    mounted() {},
    methods: {
    },
};
</script>
