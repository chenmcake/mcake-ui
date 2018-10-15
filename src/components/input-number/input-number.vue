<template>
    <div :class="wrapClasses">
        <!-- 减 -->
        <span :class="reduceClasses"><i class="m-i-reduce"></i></span>
        <!-- 加 -->
        <span :class="plusClasses"><i class="m-i-plus"></i></span>
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
            type: [Number, String],
            default: 0
        },
        // 最大值
        // max: {
        //     type: Number,
        //     default: Infinity
        // },
        // 最小值
        // min: {
        //     type: Number,
        //     default: -Infinity
        // },
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
        // 精度 用于控制小数位数
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

                this.plusDisabled = val + step > this.max;
                this.reduceDisabled = val - step < this.min;
            } else {
                this.plusDisabled = true;
                this.reduceDisabled = true;
            }
        },
        // 点击事件
        handleClick(e) {
        },
    }
};
</script>
