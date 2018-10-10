<template>
    <div :class="wrapClasses">
        <!-- 按钮 -->
        <div class="m-dropdown-rel">
            <slot></slot>
        </div> <!-- m-dropdown-rel 结束 -->
        <!-- 下拉列表 -->
        <div class="m-dropdown-list">
            <slot name="list"></slot>
        </div> <!-- m-dropdown-list 结束 -->
    </div>
</template>

<script>
// 主容器 class
const wrapClass = 'm-dropdown';

// 输出
export default {
    name: 'MDropdown',
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
