/**
 * 基于popper.js和vue的弹出层控件 依赖0.6.4版本的popper.js
 * https://github.com/freeze-component/vue-popper
 * */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
const Popper = isServer ? function() {} : require('popper.js');  // eslint-disable-line

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
                    gpuAcceleration: false,
                    boundariesElement: 'body'    // todo 暂时注释，发现在 vue 2 里方向暂时可以自动识别了，待验证(还是有问题的)
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
                this.destroyPopper();
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
            options.offset = this.offset;

            this.popperJS = new Popper(reference, popper, options);
            this.popperJS.onCreate(popper => {
                this.resetTransformOrigin(popper);
                this.$nextTick(this.updatePopper);
                this.$emit('created', this);
            });
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
        },
        destroyPopper() {
            if (isServer) return;
            if (this.popperJS) {
                this.resetTransformOrigin(this.popperJS);
            }
        },
        resetTransformOrigin(popper) {
            if (isServer) return;
            let placementMap = {top: 'bottom', bottom: 'top', left: 'right', right: 'left'};
            let placement = popper._popper.getAttribute('x-placement').split('-')[0];
            let origin = placementMap[placement];
            popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
        }
    },
    beforeDestroy() {
        if (isServer) return;
        if (this.popperJS) {
            this.popperJS.destroy();
        }
    }
};
