<template>
    <div :class="wrapClasses">
        <!-- 滑道 -->
        <div :class="[prefixClass + '-runway']">
            <!-- 进度条 -->
            <div :class="[prefixClass + '-bar']" :style="barStyle"></div>
        </div>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 主容器 class
const prefixClass = 'm-slider';

export default {
    name: 'MSlider',
    props: {
        // 是否为范围选择
        range: {
            type: Boolean,
            default: false
        },
        // 是否为垂直显示
        vertical: {
            type: Boolean,
            default: false
        },
        // 垂直显示时滑块高度
        height: {
            type: String,
            default: '200px'
        },
    },
    data() {
        return {
            prefixClass
        }
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixClass}`,
                {
                }
            ];
        },
        // 进度条样式
        barStyle() {

        }
    },
    mounted() {
    },
    methods: {
    }
};
</script>
