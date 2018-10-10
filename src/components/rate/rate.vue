<template>
    <div :class="wrapClasses">
        <input type="hidden" :name="name" :value="currentValue">
        <!-- 评分项目 -->
        <span
            v-for="item in max"
            class="m-rate-item"
            @mousemove="setCurrentValue(item, $event)"
            @mouseleave="resetCurrentValue"
            @click="selectValue(item)" >
            <i
                :class="[
                    'm-rate-star',
                    classes[item - 1],
                    { 'hover': hoverIndex === item }
                ]"
                :style="getIconStyle(item)" >
                <i v-if="showHalfIcon(item)"
                   class="m-rate-half"
                   :class="halfIconClass"
                   :style="halfIconStyle" ></i>
            </i>
        </span>
        <!-- 提示文字 -->
        <span v-if="showText" class="m-rate-text">
            <slot>{{text}}</slot>
        </span>
    </div>
</template>

<script>
// 引入资源
import { hasClass } from '../../utils/dom.js';
// 主容器 class
const wrapClass = 'm-rate';

// 输出
export default {
    name: 'MRate',
    props: {
        value: {
            type: Number,
            default: 0
        },
        // 最大分值
        max: {
            type: Number,
            default: 5
        },
        // 低分到中等分数的界限
        lowThreshold: {
          type: Number,
          default: 2
        },
        // 中等分数到高分的界限
        highThreshold: {
          type: Number,
          default: 4
        },
        // 是否允许半星
        allowHalf: {
            type: Boolean,
            default: false
        },
        // 图标class名称 分别对应低分、中等分数、高分
        iconClasses: {
            type: Array,
            default() {
                return ['m-i-collect-b', 'm-i-collect-b', 'm-i-collect-b'];
            }
        },
        // 未选中默认图标class
        voidIconClass: {
          type: String,
          default: 'm-i-collect'
        },
        // 只读状态未选中默认图标class
        disabledVoidIconClass: {
          type: String,
          default: 'm-i-collect-b'
        },
        // 颜色 分别对应低分、中等分数、高分
        colors: {
            type: Array,
            default() {
                return ['#ffc600', '#ffc600', '#ffc600'];
            }
        },
        // 未选中时默认颜色
        voidColor: {
            type: String,
            default: '#D8D8D8'
        },
        // 只读状态未选中时默认颜色
        disabledVoidColor: {
            type: String,
            default: '#D8D8D8'
        },
        // 提示文字
        texts: {
            type: Array,
            default() {
                return ['极差', '失望', '一般', '满意', '非常满意'];
            }
        },
        // 显示文字
        showText: {
            type: Boolean,
            default: false
        },
        // 设置为只读
        disabled: {
            type: Boolean,
            default: false
        },
        // 表单字段名称
        name: String

    },
    data() {
        return {
            // 当前分值
            currentValue: this.value,
            // 当前鼠标指向的星星索引
            hoverIndex: -1,
            // 常用class查询地图
            classMap: {},
            // 鼠标移入半星上面
            pointerAtLeftHalf: true,
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
                {
                    // 只读状态
                    'disabled': this.disabled
                }
            ];
        },
        // 星星未被选中class
        voidClass() {
            // 判断是否为只读
            return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass;
        },
        // 星星被选中class
        activeClass() {
            return this.getValueFromMap(this.currentValue, this.classMap);
        },
        // 所有星星当前的class集合
        classes() {
            // 返回结果
            let ret = [],
                i = 0,
                // 界限
                threshold = this.currentValue;
            // 如果允许半星 且 当前值为小数
            if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
                threshold--;
            }
            // 放入被选中星星的class
            for (; i < threshold; i++) {
                ret.push(this.activeClass);
            }
            // 放入未被选中星星的class
            for (; i < this.max; i++) {
                ret.push(this.voidClass);
            }
            return ret;
        },
        // 半星的class
        halfIconClass() {
            return this.getValueFromMap(this.value, this.classMap);
        },
        // 半星的样式
        halfIconStyle() {
            return {
                color: this.activeColor,
            };
        },
        // 各种状态下颜色查询地图
        colorMap() {
            return {
                // 低分
                lowColor: this.colors[0],
                // 中等分数
                mediumColor: this.colors[1],
                // 高分
                highColor: this.colors[2],
                // 默认颜色
                voidColor: this.voidColor,
                // 只读颜色
                disabledVoidColor: this.disabledVoidColor
            };
        },
        // 选中时的颜色
        activeColor() {
            return this.getValueFromMap(this.currentValue, this.colorMap);
        },
        // 提示文字
        text() {
            let ret = '';
            if (this.disabled) {
                ret = this.value;
            } else {
                ret = this.texts[Math.ceil(this.currentValue) - 1];
            }
            return ret;
        },
    },
    watch: {
        value(val) {
            this.$emit('on-change', val);
            this.currentValue = val;
            this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
        }
    },
    created() {
        // 设置class查询地图数据
        this.classMap = {
            // 低分星星class
            lowClass: this.iconClasses[0],
            // 中分星星class
            mediumClass: this.iconClasses[1],
            // 高分星星class
            highClass: this.iconClasses[2],
            // 未选中星星class
            voidClass: this.voidIconClass,
            // 只读状态星星class
            disabledVoidClass: this.disabledVoidIconClass
        }
    },
    mounted() {},
    methods: {
        // 通过传入指定值和查询地图获得对应的颜色或class
        getValueFromMap(value, map) {
            let ret = '';
            // 低分
            if (value <= this.lowThreshold) {
              ret = map.lowColor || map.lowClass;
            }
            // 高分
            else if (value >= this.highThreshold) {
              ret = map.highColor || map.highClass;
            }
            // 中等分数
            else {
              ret = map.mediumColor || map.mediumClass;
            }
            return ret;
        },
        // 设置当前分数
        setCurrentValue(value, e) {
            // 如果为只读
            if(this.disabled) return;
            // 如果允许半星
            if(this.allowHalf) {
                // 鼠标指向的DOM对象
                let target = e.target;
                // 如果为星星项目容器
                if (hasClass(target, 'm-rate-item')) {
                  target = target.querySelector('.m-rate-star');
                }
                // 如果为半星容器
                if (hasClass(target, 'm-rate-half')) {
                  target = target.parentNode;
                }
                // 鼠标移入半星上面
                this.pointerAtLeftHalf = e.offsetX * 2 <= target.clientWidth;
                // 当前值
                this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
            }
            else {
                this.currentValue = value;
            }
            // 当前选中的星星index
            this.hoverIndex = value;

            // console.log(this.currentValue);
            // console.log(e)
        },
        // 选中分数
        selectValue(value){
            // 只读
            if (this.disabled) return;
            // 半星切被选中
            if (this.allowHalf && this.pointerAtLeftHalf) {
              this.$emit('input', this.currentValue);
            }
            else {
              this.$emit('input', value);
            }
        },
        // 重新刷新分数 用于鼠标移开事件
        resetCurrentValue() {
            // 只读
            if (this.disabled) return;
            // 设置半星被选中状态
            if (this.allowHalf) {
                this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
            }
            // 重新设置当前值
            this.currentValue = this.value;
            // 重新设置星星索引
            this.hoverIndex = -1;
        },
        // 是否显示半星
        showHalfIcon(item) {
            return this.allowHalf &&
                   this.pointerAtLeftHalf &&
                   item - 0.5 <= this.currentValue &&
                   item > this.currentValue;
        },
        // 星星的样式
        getIconStyle(item) {
            // 默认颜色
            let voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor,
                // 获得颜色
                color = item <= this.currentValue ? this.activeColor : voidColor;
            return {
                color
            };
        }
    },
};
</script>
