<template>
    <label :class="wrapClasses">
        <span class="m-radio-ipt">
            <!-- 图标 -->
            <span class="m-radio-inner"></span>
            <input type="radio"
                   :name="name"
                   :value="label"
                   :disabled="isDisabled"
                   v-model="model"
                   @change="handleChange">
        </span>
        <span class="m-radio-label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
// 引入混合方法
import Emitter from '../../mixins/emitter';
// 组件主容器 class
const radioWrapClass = 'm-radio';

// 输出
export default {
    // 组件名称
    name: 'MRadio',
    // 混合
    mixins: [Emitter],
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 单选框文字
        label: {
            type: [String, Number]
        },
        // 单选框原生的name
        name: String,
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        }
    },
    // 计算属性
    computed: {
        // 单选框主容器的calss
        wrapClasses() {
            return [
                `${radioWrapClass}`,
                {
                    'checked': this.model === this.label,
                    'disabled': this.isDisabled
                }
            ];
        },
        // 是否为单选框组
        isGroup() {
            // 获得父元素
            let parent = this.$parent;
            // 检测父元素是否为单选框组 组件
            if(parent.$options.name === 'MRadioGroup') {
                this._group = parent;
                // 返回是
                return true;
            }
            // 默认为否
            return false;
        },
        // 单选框绑定的值
        model: {
            get() {
                return this.isGroup ? this._group.value : this.value;
            },
            set(val) {
                // 是否为单选组
                if (this.isGroup) {
                    this.dispatch('MRadioGroup', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        // 判断是否被禁用
        isDisabled() {
            return this.isGroup ? this._group.disabled || this.disabled : this.disabled;
        }
    },
    // 方法
    methods: {
        // 处理单选框改变事件
        handleChange() {
            this.$nextTick(() => {
                // 触发单选框接口上的改变事件
                this.$emit('change', this.model);
                // 给单选框组事件冒泡
                this.isGroup && this.dispatch('MRadioGroup', 'handleChange', this.model);
            });
        }
    }
};
</script>
