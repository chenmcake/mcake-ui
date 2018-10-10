<template>
    <span class="m-crumb-item">
        <!-- 可以点击的 -->
        <span v-if="to" class="m-crumb-item-link" @click="handleClick">
            <m-icon v-if="icon" :type="icon"></m-icon>
            <slot></slot>
        </span>
        <!-- 不可以点击的 -->
        <span v-else class="m-crumb-item-text">
            <slot></slot>
        </span>
        <!-- 分隔符 -->
        <span class="m-crumb-item-separator" v-html="separator"></span>
    </span>
</template>

<script>
// 引入子组件
import MIcon from '../icon';

// 输出
export default {
    // 组件名称
    name: 'MCrumbItem',
    // 属性
    props: {
        // 路由跳转地址
        to: {
            type: [Object, String]
        },
        // 图标
        icon: String,
        // 如果为true 路由跳转时，将不会向 history 添加新记录
        replace: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 分隔符
            separator: ''
        }
    },
    mounted() {},
    methods: {
        // 处理面包屑导航点击事件
        handleClick() {
            // 判断vue-router 是否存在
            if(this.$router) {
                this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
            }
            // 调用locationn方法跳转
            else {
                window.location.href = this.to;
            }
        }
    },
    // 子组件
    components: { MIcon }
};
</script>
