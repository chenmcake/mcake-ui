<template>
    <li :class="wrapClasses" :style="wrapStyle">
        <!-- 圆点和线 -->
        <div class="m-timeline-tail" :style="tailStyle">
            <div class="m-timeline-dot">
                <slot name="dot"><i :class="iconClasses"></i></slot>
                <span class="m-timeline-line"></span>
            </div>
        </div>
        <!-- 内容 -->
        <div class="m-timeline-cont">
            <div v-if="showTitle" class="m-timeline-title">
                <slot name="title">{{title}}</slot>
            </div>
            <slot></slot>
        </div>
    </li>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-timeline-item';

// 输出
export default {
    name: 'MTimelineItem',
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator (value) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 圆点和线容器的宽度
        tailWidth: {
            type: Number,
            default: 32
        },
        title: String,
        // 图标
        icon: String
    },
    data() {
        return {
            showTitle: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
                {
                    // 颜色风格
                    [`${wrapClass}-${this.type}`]: !!this.type,
                }
            ];
        },
        // 主容器样式
        wrapStyle() {
            return {
                paddingLeft: this.tailWidth + 'px'
            }
        },
        // 圆点主容器样式
        tailStyle() {
            return {
                width: this.tailWidth + 'px'
            }
        },
        // 圆点class
        iconClasses() {
            return this.icon ? 'm-i-' + this.icon :'m-timeline-dot-inner';
        }
    },
    mounted() {
        // 检查是否存在标题插槽
        this.showTitle = this.title || this.$slots.title !== undefined;
    },
    methods: {
    },
};
</script>
