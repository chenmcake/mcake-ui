<template>
    <div :class="wrapClasses">

        <div class="m-ipt-before" v-if="before" v-show="slotReady" >
            <slot name="before"></slot>
        </div> <!-- m-ipt-before 结束 -->

        <div class="m-ipt-content">
            <template v-if="type !== 'textarea'">
                <input
                    ref="input"
                    :class="iptClasses"
                    :type="type"
                    :name="name"
                    :value="currentValue"
                    :placeholder="placeholder"
                    :maxlength="maxlength"
                    :readonly="readonly"
                    :disabled="disabled"
                    :autofocus="autofocus"
                    :autocomplete="autocomplete"
                    @input="handleInput"
                    @change="handleChange"
                    @keyup.enter="handleEnter"
                    @keyup="handleKeyup"
                    @keypress="handleKeypress"
                    @keydown="handleKeydown"
                    @focus="handleFocus"
                    @blur="handleBlur"
                     >

                <!-- 清除图标 -->
                <i v-if="showClear"
                   :class="['m-ipt-clear', 'm-ipt-icon', 'm-i-error-o-b']"
                   @click="handleClear" ></i>
                <!-- 普通图标 -->
                <i v-else-if="icon"
                   :class="['m-ipt-icon', `m-i-${icon}`]"
                   @click="handleIconClick" ></i>
            </template>
            <template v-else>
                <textarea
                    ref="input"
                    :class="iptClasses"
                    :type="type"
                    :name="name"
                    :value="currentValue"
                    :placeholder="placeholder"
                    :maxlength="maxlength"
                    :readonly="readonly"
                    :disabled="disabled"
                    :autofocus="autofocus"
                    :autocomplete="autocomplete"
                    :rows="rows"
                    @input="handleInput"
                    @change="handleChange"
                    @keyup.enter="handleEnter"
                    @keyup="handleKeyup"
                    @keypress="handleKeypress"
                    @keydown="handleKeydown"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    >
                </textarea>
            </template>
        </div> <!-- m-ipt-content 结束 -->

        <div class="m-ipt-after" v-if="after" v-show="slotReady" >
             <slot name="after"></slot>
        </div> <!-- m-ipt-after 结束 -->
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 输入框主容器 class
const wrapPrefixClass = 'm-ipt-wrap',
      // 输入框父容器 也是图标父容器
      contentClass = 'm-ipt-content',
      // 拥有图标的容器
      iconContentClass = 'm-ipt-icon-content',
      // 图标在前面的容器
      iconBeforeContentClass = 'm-ipt-icon-before-content',
      // 输入框本身的class
      iptClass = 'm-ipt',
      // 图标左右位置时 输入框class
      iptClassIconLeft = 'm-ipt-icon-left',
      iptClassIconRight = 'm-ipt-icon-right';

// 输出
export default {
    // 组件名称
    name: 'MInput',
    // 属性
    props: {
        // 输入框类型 可以为: text、password 或 textarea
        type: {
            validator (value) {
                return includes(['text', 'textarea', 'password'], value);
            },
            default: "text"
        },
        // 是否为长输入框
        long: {
            type: Boolean,
            default: false
        },
        // 颜色主题
        theme: {
            type: String,
            validator (value) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 大小尺寸
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
                return includes(['fillet', 'pill'], value);
            }
        },
        // 图标
        icon: String,
        // 图标是否在前面
        iconBefore: {
            type: Boolean,
            default: false
        },
        // 提示信息
        placeholder: {
            type: String,
            default: ''
        },
        // 最大输入长度
        maxlength: Number,
        // name
        name: String,
        // 默认值
        value: {
            type: [String, Number],
            default: ''
        },
        // 只读
        readonly: {
            type: Boolean,
            default: false
        },
        // 禁止
        disabled: {
            type: Boolean,
            default: false
        },
        // 自动获取焦点
        autofocus: {
            type: Boolean,
            default: false
        },
        // 原生的自动完成功能
        autocomplete: {
            validator (value) {
                return includes(['on', 'off'], value);
            },
            default: 'off'
        },
        // 多行文本框的行数
        rows: {
            type: Number,
            default: 4
        },
        // 是否可清空
        clearable: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data() {
        // 输入数据
        return {
            // 输入框当前值
            currentValue: this.value,
            // 是否向前插入内容
            before: true,
            // 是否向后插入内容
            after: true,
            // 是否显示插入内容
            slotReady: false
        }
    },
    // 观察者
    watch: {
        // 输入框值
        value(val) {
            this.setCurrentValue(val);
        }
    },
    // 计算属性
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapPrefixClass}`,
                {
                    // 是否为长按钮
                    [`${wrapPrefixClass}-long`]: this.long,
                    // 颜色主题
                    [`${wrapPrefixClass}-${this.theme}`]: !!this.theme,
                    // 尺寸
                    [`${wrapPrefixClass}-${this.size}`]: !!this.size,
                    // 形状
                    [`${wrapPrefixClass}-${this.shape}`]: !!this.shape,
                }
            ];
        },
        // 输入框本身的class
        iptClasses() {
            return [
                // 默认class
                `${iptClass}`,
                {
                    // 图标位置
                    [`${this.iconInputClass}`]: !!this.iconInputClass,
                }
            ];
        },
        // 输入框存在图标时 输入框样式
        iconInputClass() {
            // 如果清空图标存在
            if(this.showClear) return iptClassIconRight;
            // 如果为普通图标
            if(this.icon) {
                return this.iconBefore ? iptClassIconLeft : iptClassIconRight;
            }
            return null;
        },
        // 是否显示清空按钮
        showClear() {
            return this.clearable && !this.readonly && !this.disabled && this.currentValue !== '';
        }
    },
    // 实例初始化完成
    mounted() {
        // 判断前后插入内容
        if (this.type !== 'textarea') {
            this.before = this.$slots.before !== undefined;
            this.after = this.$slots.after !== undefined;
        } else {
            this.before = false;
            this.after = false;
        }
        // 显示插入内容
        this.slotReady = true;
    },
    // 方法
    methods: {
        // 设置当前输入框值
        setCurrentValue(val) {
            // 如果等于当前值
            if(val === this.currentValue) return;
            // 设置新的值
            this.currentValue = val;
        },
        // 输入事件
        handleInput(e) {
            // 获得输入内容
            let value = e.target.value;
            //console.log(value)
            // 提交相关事件
            this.$emit('input', value, e);
            this.setCurrentValue(value);
            this.$emit('on-input', value, e);
            // console.log(e)
        },
        // 值改变事件
        handleChange(e) {
            this.$emit('on-change', e.target.value, e);
        },
        // 处理回车事件
        handleEnter (e) {
            this.$emit('on-enter', e.target.value, e);
        },
        // 按下按钮松开时
        handleKeyup (e) {
            this.$emit('on-keyup', e.target.value, e);
        },
        // keypress 事件与 keydown 事件类似
        handleKeypress(e) {
            this.$emit('on-keypress', e.target.value, e);
        },
        // 鼠标按下事件
        handleKeydown (e) {
            this.$emit('on-keydown', e.target.value, e);
        },
        // 获取焦点事件
        handleFocus (e) {
            this.$emit('on-focus', e.target.value, e);
        },
        // 失去焦点事件
        handleBlur (e) {
            this.$emit('on-blur', e.target.value, e);
        },
        // 图标点击事件
        handleIconClick (e) {
            this.$emit('on-click', this.currentValue, e);
        },
        // 清空事件
        handleClear() {
            // 生成一个e对象 防止出错
            let e = { target: { value: '' } };
            //console.log(value)
            // 提交相关事件
            this.$emit('input', '');
            this.setCurrentValue('');
            this.$emit('on-input', '', e);
            this.$emit('on-change', '', e);
            this.$emit('on-clear', '');
        }
    }
};
</script>
