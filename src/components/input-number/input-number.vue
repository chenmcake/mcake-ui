<template>
    <div :class="wrapClasses">
        <!-- 减 -->
        <span :class="reduceClasses" @click="reduce"><i :class="controlsAtRight ? 'm-i-bottom' : 'm-i-reduce'"></i></span>
        <!-- 加 -->
        <span :class="plusClasses" @click="plus"><i :class="controlsAtRight ? 'm-i-top' : 'm-i-plus'"></i></span>
        <!-- 输入框 -->
        <input
            ref="input"
            class="m-ipt-number"
            type="text"
            :name="name"
            :value="formatterValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly || !editable"
            @change="handleChange"
            @keydown.stop="handleKeyDown"
            @focus="handleFocus"
            @blur="handleBlur" >
    </div>
</template>

<script>
// 引入公共方法
import { includes, toNumber, isNull } from '../../utils/base';
// 引入输入框组件
import MInput from '../input/input.vue';
// 主容器 class
const wrapClass = 'm-ipt-number-wrap';

// 输出
export default {
    name: 'MInputNumber',
    components: { MInput },
    props: {
        // 尺寸
        size: {
            type: String,
            validator (value) {
                return includes(['mini', 'small', 'large'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator (value) {
                return includes(['fillet'], value);
            }
        },
        // 按钮位置
        controlsPosition: {
            type: String,
            validator (value) {
                return includes(['right'], value);
            }
        },
        // 是否为长输入框
        long: {
            type: Boolean,
            default: false
        },
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
        placeholder: String,
        // 格式化数据的方法
        formatter: {
            type: Function
        },
        // 将格式化后的字符串转回数字的方法
        parser: {
            type: Function
        },
        // 只读
        readonly: {
            type: Boolean,
            default: false
        },
        // 不可编辑
        editable: {
            type: Boolean,
            default: true
        },
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
            this.handleBtnStatus(val);
        },
        disabled(val) {
            this.handleBtnStatus(this.currentValue);
        },
        min() {
            this.handleBtnStatus(this.currentValue);
        },
        max() {
            this.handleBtnStatus(this.currentValue);
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 尺寸
                    [`${wrapClass}-${this.size}`]: !!this.size,
                    // 形状
                    [`${wrapClass}-${this.shape}`]: !!this.shape,
                    // 是否为占整行
                    [`${wrapClass}-long`]: this.long,
                    // 按钮放置在右边
                    'controls-right': this.controlsAtRight,
                    // 禁止
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
            // 如果不存在
            if(!this.currentValue) return this.currentValue;
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
        },
        // 按钮是否放置在右边
        controlsAtRight() {
            return this.controlsPosition === "right";
        }
    },
    mounted() {
        this.handleBtnStatus(this.currentValue);
    },
    methods: {
        // 处理按钮禁止状态 根据当前值设置
        handleBtnStatus(val) {
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
            if(this.disabled || this.readonly || this.plusDisabled) return;
            // 输入框的值
            const value = this.value || 0;
            // 进行加法运算
            const newVal = this._plus(value, this.step);
            // 设置新的值
            this.setCurrentValue(newVal);
        },
        _plus(value, step) {
            // 如果值不为数字且不为空
            if (typeof value !== 'number' && value !== undefined) return this.currentValue;
            // 先将值乘以10的小数点位数幂次方
            const precisionFactor = Math.pow(10, this.numPrecision);
            // 将数字转成整数运算后在处理小数精度 解决小数运算问题
            return this.toPrecision((precisionFactor * value + precisionFactor * step) / precisionFactor);
        },
        // 减
        reduce() {
            // 如果为禁止点击
            if(this.disabled || this.readonly || this.reduceDisabled) return;
            // 输入框的值
            const value = this.value || 0;
            // 进行加法运算
            const newVal = this._reduce(value, this.step);
            // 设置新的值
            this.setCurrentValue(newVal);
        },
        _reduce(value, step) {
            // 如果值不为数字且不为空
            if (typeof value !== 'number' && value !== undefined) return this.currentValue;
            // 先将值乘以10的小数点位数幂次方
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
            // 如果值不为空
            if (newVal !== null) {
                // 处理最大值和最小值
                if (newVal >= this.max) newVal = this.max;
                if (newVal <= this.min) newVal = this.min;
                // 处理输入框输入大于max或小于min重新设置值的问题 判断formatterValue 是为了防止格式化错误
                if (oldVal === newVal) {
                    this.$refs.input.value = this.formatterValue;
                    return;
                }
            }

            this.currentValue = newVal;
            this.$emit('input', newVal);
            this.$emit('on-change', newVal, oldVal);
        },
        // 获取精度小数位数
        getPrecision(value) {
            // 小数点位数
            let precision = 0;
            // 如果当前值存在 进行计算 否则直接返回 0
            if(!isNull(value)) {
                // 获取小数点位置
                const valueString = value.toString();
                const dotPosition = valueString.indexOf('.');
                // 如果存在小数点
                if (dotPosition !== -1) {
                    // 计算小数位数
                    precision = valueString.length - dotPosition - 1;
                }
            }
            return precision;
        },
        // 按照精度转换值
        toPrecision(num, precision) {
            if (precision === undefined) precision = this.numPrecision;
            return parseFloat(parseFloat(Number(num).toFixed(precision)));
        },
        // 输入框值改变事件
        handleChange(event) {
            // 获取输入框的值
            let val = event.target.value.trim();

            // 转回数据的方法存在
            if (this.parser) {
                val = this.parser(val);
            }
            // 如果为空字符
            if(val.length === 0){
                this.setCurrentValue(null);
                return;
            }
            // 将字符串转成数字
            val = Number(val);

            // 如果是数字 进行设置
            if (!isNaN(val)) {
                this.setCurrentValue(val);
            }
            else {
                event.target.value = this.formatterValue;
            }
        },
        // 处理键盘上下键按下事件
        handleKeyDown (e) {
            // Up（上箭头）
            if (e.keyCode === 38) {
                // 组织默认事件
                e.preventDefault();
                // 加
                this.plus();
            }
            // Down（下箭头）
            else if (e.keyCode === 40) {
                // 组织默认事件
                e.preventDefault();
                // 减
                this.reduce();
            }
        },
        handleFocus(event) {
          this.$emit('on-focus', event);
        },
        handleBlur(event) {
          this.$emit('on-blur', event);
        },
    }
};
</script>
