<template>
    <div :class="wrapClasses">
        <!-- 减 -->
        <span :class="reduceClasses" @click="reduce"><i class="m-i-reduce"></i></span>
        <!-- 加 -->
        <span :class="plusClasses" @click="plus"><i class="m-i-plus"></i></span>
        <!-- 输入框 -->
        <input
            class="m-ipt-number"
            type="text"
            :name="name"
            :value="formatterValue"
            :placeholder="placeholder"
            :disabled="disabled">
    </div>
</template>

<script>
// 引入公共方法
import { toNumber } from '../../utils/base';
// 引入输入框组件
import MInput from '../input/input.vue';
// 主容器 class
const wrapClass = 'm-ipt-number-wrap';

// 输出
export default {
    name: 'MInputNumber',
    components: { MInput },
    props: {
        // 默认值
        value: {
            type: Number,
            default: 0
        },
        // 最大值
        max: {
            type: Number,
            default: Infinity
        },
        // 最小值
        min: {
            type: Number,
            default: -Infinity
        },
        // 间隔值 每次递增或递减的数目
        step: {
            type: Number,
            default: 1
        },
        // 是否禁止
        disabled: {
            type: Boolean,
            default: false
        },
        // 精度 用于控制小数位数 值必须是一个非负整数，并且不能小于 step 的小数位数。
        precision: Number,
        // name 用于表单提交
        name: String,
        // 提示信息
        placeholder: String
    },
    data() {
        return {
            // 当前值
            currentValue: this.value,
            // 减按钮禁止状态
            reduceDisabled: false,
            // 加按钮禁止状态
            plusDisabled: false,
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue (val) {
            this.changeValue(val);
        },
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    'disabled': this.disabled
                }
            ];
        },
        reduceClasses() {
            return [
                'm-ipt-number-reduce',
                {
                    'disabled': this.reduceDisabled
                }
            ];
        },
        plusClasses() {
            return [
                'm-ipt-number-plus',
                {
                    'disabled': this.plusDisabled
                }
            ];
        },
        // 根据精度计算当前值
        precisionValue () {
            // 如果精度存在则根据精度计算 否则使用当前值
            return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue;
        },
        // 格式化后的值
        formatterValue() {
            // 如果格式化存在
            if (this.formatter && this.precisionValue !== null) {
                return this.formatter(this.precisionValue);
            }
            else {
                return this.precisionValue;
            }
        },
        // 精度小数位数
        numPrecision() {
            const { value, step, getPrecision, precision } = this;
            const stepPrecision = getPrecision(step);

            // 如果精度存在 返回精度
            if (precision !== undefined) {
                if (stepPrecision > precision) {
                    console.warn('[McakeUI Warn][InputNumber] 精度(precision)不得小于步数(step)的小数位数');
                }
                return precision;
            }
            // 如果不存在 取当前值或步数的精度
            else {
                return Math.max(getPrecision(value), stepPrecision);
            }
        }
    },
    mounted() {
        this.changeValue(this.currentValue);
    },
    methods: {
        // 对当前值进行改变
        changeValue(val) {
            val = Number(val);
            if (!isNaN(val)) {
                const step = this.step;

                this.plusDisabled = this.disabled || val + step > this.max;
                this.reduceDisabled = this.disabled || val - step < this.min;
            } else {
                this.plusDisabled = true;
                this.reduceDisabled = true;
            }
        },
        // 加
        plus() {
            // 如果为禁止点击
            if(this.disabled || this.plusDisabled) return;
            // 输入框的值
            const value = this.value || 0;
            // 进行加法运算
            const newVal = this._plus(value, this.step);
            // 设置新的值
            this.setCurrentValue(newVal);
        },
        _plus(value, step) {
            if (typeof value !== 'number' && value !== undefined) return this.currentValue;
            const precisionFactor = Math.pow(10, this.numPrecision);
            // 将数字转成整数运算后在处理小数精度 解决小数运算问题
            return this.toPrecision((precisionFactor * value + precisionFactor * step) / precisionFactor);
        },
        // 减
        reduce() {
            // 如果为禁止点击
            if(this.disabled || this.reduceDisabled) return;
            // 输入框的值
            const value = this.value || 0;
            // 进行加法运算
            const newVal = this._reduce(value, this.step);
            // 设置新的值
            this.setCurrentValue(newVal);
        },
        _reduce(value, step) {
            if (typeof value !== 'number' && value !== undefined) return this.currentValue;
            const precisionFactor = Math.pow(10, this.numPrecision);
            // 将数字转成整数运算后在处理小数精度 解决小数运算问题
            return this.toPrecision((precisionFactor * value - precisionFactor * step) / precisionFactor);
        },
        setCurrentValue(newVal) {
            // 获取之前的值
            const oldVal = this.currentValue;
            // 处理精度
            if (typeof newVal === 'number' && this.precision !== undefined) {
                newVal = this.toPrecision(newVal, this.precision);
            }
            // 处理最大值和最小值
            if (newVal >= this.max) newVal = this.max;
            if (newVal <= this.min) newVal = this.min;
            if (oldVal === newVal) return;

            this.$emit('input', newVal);
            this.$emit('on-change', newVal, oldVal);
            this.currentValue = newVal;
        },
        // 点击事件
        handleClick(e) {
        },
        // 获取精度小数位数
        getPrecision(value) {
          if (value === undefined) return 0;
          const valueString = value.toString();
          const dotPosition = valueString.indexOf('.');
          let precision = 0;
          if (dotPosition !== -1) {
            precision = valueString.length - dotPosition - 1;
          }
          return precision;
        },
        // 按照精度转换值
        toPrecision(num, precision) {
          if (precision === undefined) precision = this.numPrecision;
          return parseFloat(parseFloat(Number(num).toFixed(precision)));
        },
    }
};
</script>
