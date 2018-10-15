<template>
    <div :class="wrapClasses">
        <!-- 减 -->
        <span class="m-ipt-number-reduce"><i class="m-i-reduce"></i></span>
        <!-- 加 -->
        <span class="m-ipt-number-plus"><i class="m-i-plus"></i></span>
        <!-- 输入框 -->
        <input class="m-ipt-number" type="text" :name="name" value="" :placeholder="placeholder">
    </div>
</template>

<script>
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
        // step: {
        //     type: Number,
        //     default: 1
        // },
        // 精度 用于控制小数位数
        // precision: Number,
        // name 用于表单提交
        name: String,
        // 提示信息
        placeholder: String
    },
    data() {
        return {
            // 当前值
            currentValue: this.value
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
    },
    methods: {
        // 对当前值进行改变
        changeValue(val) {

        },
        // 卡片点击事件
        handleClick(e) {

        },
    }
};
</script>
