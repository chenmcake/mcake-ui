<template>
    <ul :class="wrapClasses">
        <slot></slot>
    </ul>
</template>

<script>
// 主容器 class
const wrapClass = 'm-timeline';

// 输出
export default {
    name: 'MTimeline',
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
                {}
            ];
        },
    },
    mounted() {},
    methods: {
    },
};
</script>
