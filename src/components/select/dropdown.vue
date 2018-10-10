<template>
    <div class="m-select-dropdown" :class="className"><slot></slot></div>
</template>

<script>
import Vue from 'vue';
// 弹出层控件
const isServer = Vue.prototype.$isServer;
const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');

// 输出
export default {
    name: 'MDrop',
    props: {
        // class名称
        className: String,
        // 弹出层相对按钮的位置 默认在下面
        placement: {
            type: String,
            default: 'bottom-start'
        },
    },
    data() {
        return {
            // 弹出层实例
            popper: null,
            // 弹出层状态
            popperStatus: false
        }
    },
    computed: {
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
            // set a height for parent is Modal and Select's width is 100%
            if (this.$parent.$options.name === 'iSelect') {
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
