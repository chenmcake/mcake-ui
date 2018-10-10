<template>
    <label :class="wrapClasses">
        <span class="m-checkbox-ipt">
            <!-- 图标 -->
            <span class="m-checkbox-inner"></span>
            <!-- 如果存在转义值 -->
            <input
                v-if="trueLabel || falseLabel"
                type="checkbox"
                :name="name"
                :true-value="trueLabel"
                :false-value="falseLabel"
                :disabled="isDisabled"
                v-model="model"
                @change="handleChange">
            <!-- 默认类型 -->
            <input
                v-else
                type="checkbox"
                :name="name"
                :value="label"
                :disabled="isDisabled"
                v-model="model"
                @change="handleChange">
        </span>
        <span class="m-checkbox-label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
// 公共方法
import { toNumber, isBoolean, isArray, includes } from '../../utils/base';
// 引入混合方法
import Emitter from '../../mixins/emitter';
// 组件主容器 class
const checkboxWrapClass = 'm-checkbox';

// 输出
export default {
    // 组件名称
    name: 'MCheckbox',
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
        // 被选中的值
        trueLabel: [String, Number],
        // 没有被选中的值
        falseLabel: [String, Number],
        // 单选框原生的name
        name: String,
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 选中状态
        checked: {
            type: Boolean,
            default: false
        },
        // 不确定状态 常用语全选操作
        indeterminate: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            // 自己默认的值
            selfModel: false,
            // 是否超过限制  用于控制最大和最小可选数 如果为true 则会被禁止再选中其他选项
            isLimitExceeded: false
        }
    },
    // 计算属性
    computed: {
        // 单选框主容器的calss
        wrapClasses() {
            return [
                `${checkboxWrapClass}`,
                {
                    // 选中状态
                    'checked': this.isChecked,
                    // 禁止状态
                    'disabled': this.isDisabled,
                    // 不确定状态
                    'indeterminate': this.indeterminate
                }
            ];
        },
        // 是否为单选框组
        isGroup() {
            // 获得父元素
            let parent = this.$parent;
            // 检测父元素是否为单选框组 组件
            if(parent.$options.name === 'MCheckboxGroup') {
                this._group = parent;
                // 返回是
                return true;
            }
            // 默认为否
            return false;
        },
        // 储存单选框组或自己的值
        store() {
            return this.isGroup ? this._group.value : this.value;
        },
        // 单选框绑定的值
        model: {
            get() {
                // 如果为多选框组 获取组的value 否则获取自己的值
                return this.isGroup ? this.store : ( this.value !== undefined ? this.value : this.selfModel );
            },
            set(val) {
                // 是否为单选组
                if (this.isGroup) {
                    // 先将超过限制状态设置为关闭状态
                    this.isLimitExceeded = false;
                    // 判断当前选项数是否小于最小数
                    let isLt = this._group.min !== undefined && val.length < toNumber(this._group.min),
                        // 是否大于最大数
                        isGt = this._group.max !== undefined && val.length > toNumber(this._group.max);

                    // 只要有一个不符合 禁止再选中
                    if(isLt || isGt) this.isLimitExceeded = true;
                    // 当没有超过限制时 提交选项改变事件
                    this.isLimitExceeded === false && this.dispatch('MCheckboxGroup', 'input', [val]);
                } else {
                    // 提交值改变事件
                    this.$emit('input', val);
                    // 设置当前自己的值
                    this.selfModel = val;
                }
            }
        },
        // 当前选项是否被选中
        isChecked() {
            // 获得当前值
            let model = this.model;
            // 如果为单个选项时
            if(isBoolean(model)) {
                return model;
            }
            // 如果多选框组时
            else if(isArray(model)) {
                return includes(model, this.label);
            }
            // 如果存在转义值
            else if (this.model !== null && this.model !== undefined) {
                return this.model === this.trueLabel;
            }
        },
        // 判断是否被禁用
        isDisabled() {
            return this.isGroup ? this._group.disabled || this.disabled : this.disabled;
        }

    },
    created() {
        // 如果被选中属性存在 设置值
        this.checked && this.setModel();
    },
    // 方法
    methods: {
        // 处理单选框改变事件
        handleChange(e) {
            // 当前值
            let value;
            // 如果多选框被选中
            if (e.target.checked) {
                // 返回trueLabel或true
                value = this.trueLabel === undefined ? true : this.trueLabel;
            } else {
                // 返回trueLabel或false
                value = this.falseLabel === undefined ? false : this.falseLabel;
            }
            // 数据发生改变后回调
            this.$nextTick(() => {
                // 触发单选框接口上的改变事件
                this.$emit('change', value, e);
                // 给单选框组事件冒泡
                this.isGroup && this.dispatch('MCheckboxGroup', 'change', [this._group.value]);
            });
        },
        // 设置当前单选框的值
        setModel() {
            // 如果数据为数组 也就是多选框组
            if(isArray(this.model)) {
                // 当前值不存在数组中
                if(!includes(this.model, this.label)) {
                    this.model.push(this.label);
                }
            }
            // 如果为单个多选框 设置等于被选中
            else {
                this.model = this.trueLabel || true;
            }
        }
    }
};
</script>
