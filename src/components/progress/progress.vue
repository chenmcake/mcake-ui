<template>
    <div :class="wrapClasses">
        <!-- 进度条 -->
        <div v-if="!isCircle" class="m-progress-inner">
            <div class="m-progress-bar" :style="barStyle">
                <div class="m-progress-bar-inner" :style="barInnerStyle">
                    <!-- 内置文字描述 -->
                    <div v-if="!hideText && textInside" :class="textClasses" :style="textStyle">
                        <slot>
                            <span class="m-progress-percent">
                                {{percent}}%
                            </span>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="m-progress-inner" :style="circleStyle">
            <svg viewBox="0 0 100 100">
                <!-- 环形背景 -->
                <path class="m-progress-bar" :stroke="baseVars.progress_bar_bg" :d="trackPath" :stroke-width="circleBarWidth" fill="none"></path>
                <!-- 环形进度条 -->
                <path class="m-progress-bar-inner" :d="trackPath" :stroke-linecap="pathShape" :stroke="pathBgColor" :stroke-width="circleBarWidth" :style="circlePathStyle" fill="none"></path>
            </svg>
        </div>
        <!-- 文字描述 -->
        <div v-if="!hideText && !textInside" :class="textClasses" :style="textStyle">
            <slot>
                <span class="m-progress-icon" v-if="status">
                    <m-icon :type="iconType"></m-icon>
                </span>
                <span class="m-progress-percent" v-else>
                    {{percent}}%
                </span>
            </slot>
        </div>
    </div> <!-- m-progress 结束 -->
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入子组件
import MIcon from '../icon';
// 引入公共样式变量
import baseVars from '../../common/variables.js';

// 主容器 class
const wrapClass = 'm-progress',
      // 文字信息主容器
      textClass = 'm-progress-text';

// 输出
export default {
    // 组件名称
    name: 'MProgress',
    // 属性
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator (val) {
                return includes(['primary', 'success', 'info', 'warning', 'error', 'noble'], val);
            }
        },
        // 进度条形状 包含：默认、circle(环形)
        shape: {
            type: String,
            default: 'line',
            validator (val) {
                return includes(['line', 'circle'], val)
            }
        },
        // 百分比 0-100之间 为必填
        percent: {
            type: Number,
            default: 0,
            required: true,
            validator: val => val >= 0 && val <= 100
        },
        // 进度条宽度 单位为px
        barWidth: {
            type: Number,
            default: 20,
        },
        // 是否禁止文字描述
        hideText: {
            type: Boolean,
            default: false
        },
        // 文字描述是否内置
        textInside: {
            type: Boolean,
            default: false
        },
        // 文字描述位置
        textPosition: {
            type: String,
            default: 'center',
            validator: val => includes(['left', 'center', 'right'], val)
        },
        // 进度条状态：success(成功)、error(错误)
        status: {
            type: String,
            validator (val) {
                return includes(['success', 'error'], val);
            }
        },
        // 环状进度条大小
        size: {
            type: Number,
            default: 150
        },
        // 是否为胶囊状
        pill: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data() {
        // 输入数据
        return {
            // 公共变量
            baseVars
        }
    },
    // 计算属性
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 形状
                    [`${wrapClass}-${this.shape}`]: !!this.shape,
                    //  颜色风格
                    [`${wrapClass}-${this.barType}`]: !!this.barType,
                    // 是否为胶囊状
                    [`${wrapClass}-pill`]: !!this.pill,
                    // 状态
                    [`${wrapClass}-status-${this.status}`]: !!this.status,
                }
            ];
        },
        // 进度条状态
        barType() {
            // 如果状态存在 返回状态 否则 返回颜色风格
            return this.status ? this.status : this.type;
        },
        // 进度条样式
        barStyle() {
            return {
                // 进度条宽度
                height: this.barWidth + 'px'
            }
        },
        // 进度条背景样式
        barInnerStyle() {
            return {
                // 进度条宽度
                width: this.percent + '%'
            }
        },
        // 文本描述clas
        textClasses() {
            return [
                // 默认class
                `${textClass}`,
                {
                    // 文字对齐方式 只对内置文本有效
                    [`${textClass}-${this.textPosition}`]: this.textInside && !!this.textPosition,
                }
            ];
        },
        // 文字描述样式
        textStyle() {
            // 计算字体大小
            let fontSize = (this.shape === 'circle') ? this.size * 0.111111 + 4 : (this.barWidth * 0.7);
            // 如果小于12px 设置为12px
            fontSize = fontSize < 14 ? 14 : parseInt(fontSize);
            // 输出样式
            return {
                // 文字大小
                fontSize: fontSize + 'px'
            }
        },
        // 状态描述图标类型
        iconType() {
            let ret = '',
                status = this.status;
            // 如果条状
            if(this.shape === "line") {
                if(status === 'success') {
                    ret = 'success-o-b';
                }
                else if(status === 'error') {
                    ret = 'error-o-b';
                }
            }
            else {
                if(status === 'success') {
                    ret = 'success';
                }
                else if(status === 'error') {
                    ret = 'error';
                }
            }
            return ret;
        },
        // 是否为环形
        isCircle() {
            return this.shape === 'circle';
        },
        // 环形进度条主容器样式
        circleStyle() {
            let width = this.size + 'px';
            return {
                width,
                height: width
            }
        },
        // 环形进度条宽度
        circleBarWidth() {
            return (this.barWidth / this.size * 100).toFixed(1);
        },
        // 环形进度条背景
        trackPath() {
            let radius = parseInt(50 - parseFloat(this.circleBarWidth) / 2, 10);
            return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
        },
        // 进度条周长  用于计算百分比
        perimeter() {
            let radius = 50 - parseFloat(this.circleBarWidth) / 2;
            return 2 * Math.PI * radius;
        },
        // 环形进度条路径样式
        circlePathStyle() {
          let perimeter = this.perimeter;
          return {
            strokeDasharray: `${perimeter}px, ${perimeter}px`,
            strokeDashoffset: (1 - this.percent / 100) * perimeter + 'px',
            transition: 'stroke-dashoffset 0.2s linear 0s, stroke 0.2s linear'
          };
        },
        // 环形进度条的形状
        pathShape() {
            return this.pill ? 'round' : '';
        },
        // 环形进度条颜色
        pathBgColor() {
            // 获得公共变量
            let baseVars = this.baseVars,
                // 设置默认颜色
                ret = baseVars.color_primary;

            switch (this.barType) {
                case 'success':
                    ret = baseVars.color_success;
                    break;
                case 'info':
                    ret = baseVars.color_info;
                    break;
                case 'warning':
                    ret = baseVars.color_warning;
                    break;
                case 'error':
                    ret = baseVars.color_error;
                    break;
                case 'noble':
                    ret = baseVars.color_noble;
                    break;
            }
            return ret;
        }
    },
    // 实例初始化完成
    mounted() {},
    // 方法
    methods: {
    },
    // 子组件
    components: { MIcon }
};
</script>
