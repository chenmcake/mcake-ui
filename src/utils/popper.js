/**
 * 基于popper.js和vue的弹出层控件 依赖0.6.4版本的popper.js
 * https://github.com/freeze-component/vue-popper
 * */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');  // eslint-disable-line

export default {
    props: {
        // 弹出层位置：可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end
        placement: {
            type: String,
            default: 'bottom'
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        // 触发按钮
        reference: Object,
        // 弹出层
        popper: Object,
        // 相对触发按钮偏移位置
        offset: {
            default: 0
        },
        // 显示状态值
        value: {
            type: Boolean,
            default: false
        },
        // 动画名称
        transition: String,
        // popper.js配置项
        options: {
            type: Object,
            default () {
                return {
                    modifiers: {
                        computeStyle:{
                            gpuAcceleration: false,
                        },
                        preventOverflow :{
                            boundariesElement: 'window' // 也可以是body
                        }
                    }
                };
            }
        },
    },
    data () {
        return {
            visible: this.value
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.visible = val;
                this.$emit('input', val);
            }
        },
        visible(val) {
            if (val) {
                this.updatePopper();
                this.$emit('on-popper-show');
            } else {
                this.$emit('on-popper-hide');
            }
            this.$emit('input', val);
        }
    },
    methods: {
        createPopper() {
            if (isServer) return;
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
                return;
            }

            const options = this.options;
            const popper = this.popper || this.$refs.popper;
            const reference = this.reference || this.$refs.reference;

            if (!popper || !reference) return;

            if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
                this.popperJS.destroy();
            }

            options.placement = this.placement;

            if (!options.modifiers.offset) {
                options.modifiers.offset = {};
            }
            options.modifiers.offset.offset = this.offset;
            options.onCreate =()=>{
                this.$nextTick(this.updatePopper);
                this.$emit('created', this);
            };

            this.popperJS = new Popper(reference, popper, options);

        },
        updatePopper() {
            if (isServer) return;
            this.popperJS ? this.popperJS.update() : this.createPopper();
        },
        doDestroy() {
            if (isServer) return;
            if (this.visible) return;
            this.popperJS.destroy();
            this.popperJS = null;
        }
    },
    updated(){
        this.$nextTick(()=>this.updatePopper());
    },
    beforeDestroy() {
        if (isServer) return;
        if (this.popperJS) {
            this.popperJS.destroy();
        }
    }
};
