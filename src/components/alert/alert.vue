<template>
    <transition name="m-fade">
        <div v-if="visible" :class="wrapClasses">
            <!-- 图标 -->
            <span v-if="showIcon" class="m-alert-icon">
                <slot name="icon">
                    <m-icon :type="iconType"></m-icon>
                </slot>
            </span> <!-- m-alert-icon 结束 -->
            <!-- 标题 -->
            <div v-if="isTitle" class="m-alert-title">
                <slot name="title">
                    {{title}}
                </slot>
            </div> <!-- m-alert-title 结束 -->
            <!-- 提示内容 -->
            <div class="m-alert-content">
                <slot>
                    {{content}}
                </slot>
            </div> <!-- m-alert-content 结束 -->
            <!-- 关闭按钮 -->
            <span v-if="closable" class="m-alert-close" title="关闭" @click="close">
                <slot name="close">
                    <template v-if="closeText">{{closeText}}</template>
                    <m-icon v-else type="error"></m-icon>
                </slot>
            </span> <!-- m-alert-close 结束 -->
        </div>
    </transition>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入子组件
import MIcon from '../icon';
// 主容器 class
const wrapClass = 'm-alert';

// 输出
export default {
    name: 'MAlert',
    props: {
        // 类型
        type: {
            type: String,
            default: 'info',
            validator(value) {
                return includes(['success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 标题
        title: String,
        // 提示内容
        content: String,
        // 是否为可关闭
        closable: {
            type: Boolean,
            default: false
        },
        // 自定义关闭文字
        closeText: String,
        // 是否显示图标
        showIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 显示状态
            visible: true,
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 类型
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 具有图标
                    [`${wrapClass}-with-icon`]: this.showIcon,
                    // 具有标题
                    [`${wrapClass}-with-title`]: this.isTitle
                }
            ];
        },
        // 是否存在标题
        isTitle() {
            return this.title || this.$slots.title;
        },
        // 图标类型
        iconType() {
            let type = '';
            // 根据主题风格设置图标类型
            switch (this.type) {
                case 'success':
                    type = 'success-face';
                    break;
                case 'info':
                    type = 'info-o';
                    break;
                case 'warning':
                    type = 'warn-o';
                    break;
                case 'error':
                    type = 'error-face';
                    break;
                case 'noble':
                    type = 'ask-o';
                    break;
            }
            return type;
        }
    },
    mounted() {},
    // 方法
    methods: {
        // 提示关闭事件
        close(e) {
            // 设置显示状态
            this.visible = false;
            // 提交事件
            this.$emit('on-close', e);
        },
    },
    components: { MIcon }
};
</script>
