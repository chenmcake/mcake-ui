<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
// 公共方法
import { each, isString, isNumber, isObject, toNumber } from '../../utils/base';
// icon class前缀
const prefixClass = 'm-col';
// 输出
export default {
    // 组件名称
    name: 'MCol',
    // 属性
    props: {
        // class名称
        className: String,
        // 栅格格数
        span: [Number, String],
        // 向左排序
        push: [Number, String],
        // 向右排序
        pull: [Number, String],
        // 偏移位置
        offset: [Number, String],
        // 屏幕尺寸
        xs: [Number, String, Object],
        sm: [Number, String, Object],
        md: [Number, String, Object],
        lg: [Number, String, Object],
        xl: [Number, String, Object],
    },

    // 计算属性
    computed: {
        // class
        classes () {
            // 存放class的数组
            let classList = [
                    // 默认class
                    `${prefixClass}`,
                    // 配置class
                    {
                        [`${this.className}`]: !!this.className,
                        [`${prefixClass}-span-${this.span}`]: this.span,
                        [`${prefixClass}-span-push-${this.push}`]: this.push,
                        [`${prefixClass}-span-pull-${this.pull}`]: this.pull,
                        [`${prefixClass}-span-offset-${this.offset}`]: this.offset,
                    }
                ],
                // 尺寸列表
                sizeList = ["xs", "sm", "md", "lg", "xl"];

            // 遍历所有的尺寸
            sizeList.forEach(item => {
                // 获得相关配置
                let size = this[item];
                // 如果为字符串 转换成数字
                if(isString(size)) {
                    size = toNumber(size);
                }
                // 如果为数字
                if(isNumber(size)) {
                    classList.push(`${prefixClass}-${item}-${size}`);
                }
                else if(isObject(size)) {
                    // 遍历所有key
                    each(size, (value, key) => {
                        classList.push(key === 'span' ? `${prefixClass}-${item}-${value}` : `${prefixClass}-${item}-${key}-${value}`);
                    });
                }
            });

            return classList;
        },
        // 样式
        styles() {
            // 获得间距
            let gutter = toNumber(this.$parent.gutter),
                // 样式
                style = {};
            // 如果间距
            if (gutter !== 0) {
                style = {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                };
            }
            return style;
        }
    },
};
</script>
