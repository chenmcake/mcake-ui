<template>
<transition name="m-fade">
    <div :class="wrapClasses" :style="wrapStyle">
        <div :class="innerClasses" :style="innerStyle"></div>
    </div>
</transition>
</template>

<script>
// 主容器 class
const wrapClass = 'm-loading-bar';

// 输出
export default {
    name: 'MLoadingBar',
    props: {
        // 默认颜色
        color: {
            type: String,
            default: 'primary'
        },
        // 加载错误时颜色
        errorColor: {
            type: String,
            default: 'error'
        },
        // 高度
        height: {
            type: Number,
            default: 2
        },
    },
    data() {
        return {
            // 进度条百分比
            percent: 0,
            // 进度条状态
            status: 'success',
            // 显示状态
            show: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return `${wrapClass}`;
        },
        // 进度条class
        innerClasses() {
            return [
                `${wrapClass}-inner`,
                {
                    [`${wrapClass}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
                    [`${wrapClass}-inner-color-error`]: this.errorColor === 'error' && this.status === 'error'
                }
            ];
        },
        wrapStyle() {
            return {
                height: this.height + 'px'
            };
        },
        innerStyle() {
            let style = {
                width: this.percent + '%',
                height: this.height + 'px'
            };
            // 如果自定义背景颜色
            if (this.color !== 'primary' && this.status === 'success') {
                style.backgroundColor = this.color;
            }

            if (this.errorColor !== 'error' && this.status === 'error') {
                style.backgroundColor = this.errorColor;
            }

            return style;
        }
    }
};
</script>
