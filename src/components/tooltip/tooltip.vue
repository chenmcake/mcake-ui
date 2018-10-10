<template>
    <div :class="wrapClasses"
         @mouseenter="showPopper"
         @mouseleave="closePopper">
        <!-- 触发按钮 -->
        <div class="m-tooltip-rel" ref="reference">
            <slot></slot>
        </div>
        <!-- 弹出内容区域 -->
        <transition name="m-fade">
            <div class="m-tooltip-popper"
                 ref="popper"
                 v-show="!disabled && (visible || always)"
                 v-transfer-dom>
                <div class="m-tooltip-body">
                    <!-- 箭头 -->
                    <div class="m-tooltip-arrow"></div>
                    <!-- 内容 -->
                    <div class="m-tooltip-content"><slot name="content">{{ content }}</slot></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 弹出控件
import Popper from '../../utils/popper';
import TransferDom from '../../directives/transfer-dom';
// 主容器 class
const wrapClass = 'm-tooltip';

// 输出
export default {
    name: 'MTooltip',
    mixins: [Popper],
    directives: { TransferDom },
    props: {
        // 颜色风格
        type: {
            type: String,
            validator (val) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], val);
            }
        },
        // 弹出层相对按钮的位置 默认在下面
        placement: {
            validator(value) {
                return includes(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
            },
            default: 'bottom'
        },
        // 内容
        content: {
            type: [String, Number],
            default: ''
        },
        // 是否为边框类型 默认为否
        bordered: {
            type: Boolean,
            default: false
        },
        // 延时 单位毫秒
        delay: {
            type: Number,
            default: 100
        },
        // 禁止显示
        disabled: {
            type: Boolean,
            default: false
        },
        // 一直显示
        always: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
        }
    },
    watch: {
        content () {
            this.updatePopper();
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 颜色主题
                    [`${wrapClass}-${this.type}`]: !!this.type,
                    // 是否为边框类型
                    // 是否有边框
                    'bordered': this.bordered,
                }
            ];
        },
    },
    mounted () {
        // 如果为一直显示
        if (this.always) {
            this.updatePopper();
        }
    },
    methods: {
        // 打开弹出层
        showPopper() {
            // 如果定时器已经存在 先清除
            if (this.timeout) clearTimeout(this.timeout);
            // 设置打开弹出层
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, this.delay);
        },
        // 关闭弹出层
        closePopper() {
            // 如果存在定时器
            if (this.timeout) {
                // 清除
                clearTimeout(this.timeout);
                // 关闭弹出层
                if(!this.controlled) {
                    this.timeout = setTimeout(() => {
                        this.visible = false;
                    }, 100);
                }
            }
        }
    }
};
</script>
