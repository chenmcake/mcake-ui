<template>
    <div :class="wrapClasses" @click="handleClick">
        <!-- 标题 -->
        <div class="m-card-title" v-if="showTitle"><slot name="title">{{ title }}</slot></div>
        <!-- 封面 -->
        <div class="m-card-cover" v-if="showCover"><slot name="cover"><img :src="cover"></slot></div>
        <!-- 主要内容 -->
        <div class="m-card-body" :style="bodyStyle">
            <!-- 卡片预加载 -->
            <div v-if="loading" class="m-card-loading">
                <slot name="loading">
                    <div class="m-card-loading-row">
                        <span style="width: 100%;"></span>
                    </div>
                    <div class="m-card-loading-row">
                        <span style="width: 40%;"></span>
                        <span style="width: 55%;"></span>
                    </div>
                    <div class="m-card-loading-row">
                        <span style="width: 28%;"></span>
                        <span style="width: 34%;"></span>
                        <span style="width: 32%;"></span>
                    </div>
                    <div class="m-card-loading-row">
                        <span style="width: 62%;"></span>
                        <span style="width: 28%;"></span>
                    </div>
                    <div class="m-card-loading-row">
                        <span style="width: 20%;"></span>
                        <span style="width: 8%;"></span>
                        <span style="width: 36%;"></span>
                        <span style="width: 26%;"></span>
                    </div>
                </slot>
            </div>
            <template v-else="!loading">
                <slot></slot>
            </template>
        </div> <!-- m-card-body 结束 -->
        <!-- 底部 -->
        <div class="m-card-foot" v-if="showFoot">
            <slot name="foot">
                <ul class="m-card-action" v-if="isActions">
                    <li v-for="(item, i) in actions" :key="i" :style="actionItemStyles" @click.stop="handleActionClick(item)">
                        <template v-if="item.icon"><i :class="item.icon"></i></template>
                        <template v-else>{{item.name}}</template>
                    </li>
                </ul>
            </slot>
        </div> <!-- m-card-foot 结束 -->
    </div>
</template>

<script>
// 主容器 class
const wrapClass = 'm-card';

// 输出
export default {
    name: 'MCard',
    props: {
        // 卡片名称 用于提交点击事件
        name: String,
        // 标题
        title: String,
        // 封面 图片路径
        cover: String,
        // 是的有边框
        bordered: {
            type: Boolean,
            default: true
        },
        // 是否禁止hover
        disHover: {
            type: Boolean,
            default: false
        },
        // 是否禁止封面hover
        disCoverHover: {
            type: Boolean,
            default: false
        },
        // 主要内容样式
        bodyStyle: Object,
        // 预加载
        loading: {
            type: Boolean,
            default: false
        },
        // 操作按钮
        actions: Array
    },
    data() {
        return {
            // 是否显示标题
            showTitle: false,
            // 是否显示封面
            showCover: false,
            // 是否显示底部
            showFoot: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 边框
                    'bordered': this.bordered,
                    // 卡片悬停事件
                    'hover': !this.disHover,
                    // 封面悬停事件
                    'cover-hover': !this.disCoverHover,

                }
            ];
        },
        // 是否存在操作集合
        isActions() {
            return this.actions && this.actions.length;
        },
        // 操作集合样式
        actionItemStyles() {
            // 获得操作集合数组
            let actions = this.actions,
                width = actions ? (100 / this.actions.length).toFixed(2) : 0;
            return {
                width: width + '%'
            }
        }
    },
    mounted() {
        // 设置显示状态
        this.showTitle = this.title || this.$slots.title !== undefined;
        this.showCover = this.cover || this.$slots.cover !== undefined;
        this.showFoot = this.isActions || this.$slots.foot !== undefined;
    },
    methods: {
        // 卡片点击事件
        handleClick(e) {
            this.$emit('on-click', this.name);
        },
        // 处理操作集合点击事件
        handleActionClick(item) {
            this.$emit('on-action-click', item, item.name);
        }
    }
};
</script>
