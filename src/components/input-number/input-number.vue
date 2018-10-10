<template>
    <div :class="wrapClasses">
        <!-- 输入框 -->
        <div class="m-ipt-number-content">
            <input
                class="m-ipt-number"
                type="text"
                :name="name"
                :value="formatterValue"
                :min="min"
                :max="max"
                :placeholder="placeholder"
                autocomplete="off"
                spellcheck="false">
        </div> <!-- m-ipt-number-content 结束 -->
        <!-- 操作 -->
        <div class="m-ipt-number-action">
            <span class="m-ipt-number-reduce"><i class="m-i-reduce"></i></span>
            <span class="m-ipt-number-plus"><i class="m-i-plus"></i></span>
        </div> <!-- m-ipt-number-action 结束 -->
    </div>
</template>

<script>
// 主容器 class
const wrapClass = 'm-ipt-number-wrap';

// 输出
export default {
    name: 'MInputNumber',
    props: {
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
        // 间隔值
        step: {
            type: Number,
            default: 1
        },
        // 默认值
        value: {
            type: Number,
            default: 0
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
