<template>
    <div :class="wrapClasses" :style="styles"><slot></slot></div>
</template>

<script>
import Vue from 'vue';
import { getStyle } from '../../utils/dom.js';
// 弹出层控件
const isServer = Vue.prototype.$isServer;
const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');
// 主容器 class
const wrapClass = 'm-select-dropdown';

// 输出
export default {
    name: 'MDrop',
    props: {
        // 弹出层相对按钮的位置 默认在下面
        placement: {
            type: String,
            default: 'bottom-start'
        },
        // 使用父级宽度
        parentWidth: {
            type: Boolean,
            default: false
        },
        // 取消下拉列表最大高度限制
        noMaxHeight: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 弹出层实例
            popper: null,
            // 弹出层宽度
            width: '',
            // 弹出层状态
            popperStatus: false
        }
    },
    computed: {
        wrapClasses() {
            return [
                `${wrapClass}`,
                {
                    [`${wrapClass}-no-max-height`]: this.noMaxHeight,
                }
            ];
        },
        styles () {
            let style = {};
            if (this.width) style.width = `${this.width}px`;
            return style;
        }
    },
    created() {
        this.$on('on-update-popper', this.update);
        this.$on('on-destroy-popper', this.destroy);
    },
    methods: {
        // 更新弹出层
        update() {
            if (isServer) return;
            // 如果实例存在
            if (this.popper) {
                this.$nextTick(() => {
                    this.popper.update();
                    this.popperStatus = true;
                });
            }
            else {
                this.$nextTick(() => {
                    this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                        placement: this.placement,
                        modifiers: {
                            computeStyle:{
                                gpuAcceleration: false
                            },
                            preventOverflow :{
                                boundariesElement: 'window'
                            }
                        },
                        onCreate:()=>{
                            this.resetTransformOrigin();
                            this.$nextTick(this.popper.update());
                        },
                        onUpdate:()=>{
                            this.resetTransformOrigin();
                        }
                    });
                });
            }

            // 处理选择器下拉列表宽度 为 100%
            if (this.$parent.$options.name === 'MSelect' || this.parentWidth) {
                this.width = parseInt(getStyle(this.$parent.$el, 'width'));
            }
        },
        // 销毁弹出层
        destroy() {
            if (this.popper) {
                setTimeout(() => {
                    if (this.popper && !this.popperStatus) {
                        this.popper.destroy();
                        this.popper = null;
                    }
                    this.popperStatus = false;
                }, 300);
            }
        },
        resetTransformOrigin() {
            if (!this.popper) return;
            let x_placement = this.popper.popper.getAttribute('x-placement');
            let placementStart = x_placement.split('-')[0];
            let placementEnd = x_placement.split('-')[1];
            const leftOrRight = x_placement === 'left' || x_placement === 'right';
            if(!leftOrRight){
                this.popper.popper.style.transformOrigin = placementStart==='bottom' || ( placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
            }
        }
    },
    beforeDestroy() {
        // 销毁弹出层
        if (this.popper) {
            this.popper.destroy();
        }
    }
};
</script>
