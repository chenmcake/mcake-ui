<template>
    <transition name="m-fade">
        <div :class="wrapClasses" :style="wrapStyle">
            <span v-if="isDot" class="m-tag-inner"></span>
            <span class="m-tag-label"><slot>{{label}}</slot></span>
            <span
                v-if="closable"
                class="m-tag-close"
                :style="closeStyle"
                @click.stop="close" >
                <m-icon type="error"></m-icon>
            </span>
        </div>
    </transition>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入子组件
import MIcon from '../icon';
// 主容器 class
const wrapClass = 'm-tag';

// 输出
export default {
    name: 'MTag',
    props: {
        // 标签文字 也可以直接通过slot设置
        label: String,
        // 颜色风格
        type: {
            type: String,
            validator (value) {
                return includes(['primary','success','info','warning','error','noble'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator (value) {
                return includes(['border', 'dot', 'dot-border'], value);
            }
        },
        // 标签高度
        height: {
            type: Number,
            default: 28
        },
        // 可关闭的
        closable: {
            type: Boolean,
            default: false
        },
        // 可以绑定名称 用于关闭等事件识别
        name: {
            type: [String, Number]
        }
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
                {
                    // 颜色风格
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 形状
                    [`${wrapClass}-${this.shape}`]: !!this.shape,
                    // 是否拥有关闭按钮
                    [`${wrapClass}-with-close`]: this.closable,
                }
            ];
        },
        // 主容器样式
        wrapStyle() {
            let style = {
                height: this.height + "px",
                lineHeight: this.closeSize + "px"
            };
            if(this.closable) style.paddingRight = this.closeSize + "px";
            return style;
        },
        // 关闭按钮样式
        closeStyle() {
            return {
                width: this.closeSize + "px",
                height: this.closeSize + "px",
            }
        },
        // 关闭按钮大小
        closeSize() {
            // 减掉上下1像素边框 和 上下1像素边距
            return this.height - 2;
        },
        // 是否为圆点类型
        isDot() {
            return this.shape === 'dot' || this.shape === 'dot-border';
        }
    },
    mounted() {},
    methods: {
        // 关闭
        close(e) {
            if (this.name === undefined) {
                this.$emit('on-close', event);
            } else {
                this.$emit('on-close', event, this.name);
            }
        }
    },
    components: { MIcon }
};
</script>
