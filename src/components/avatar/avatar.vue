<template>
    <div :class="wrapClasses">
        <img v-if="src" :src="src">
        <m-icon v-else-if="icon" :type="icon"></m-icon>
        <div v-else class="m-avatar-text"><slot></slot></div>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入子组件
import MIcon from '../icon';

// 主容器 class
const wrapClass = 'm-avatar';

// 输出
export default {
    name: 'MAvatar',
    props: {
        // 形状
        shape: {
            type: String,
            validator(value) {
                return includes(['square','box', 'circle'], value);
            }
        },
        // 尺寸
        size: {
            type: String,
            validator(value) {
                return includes(['mini', 'small', 'default', 'large'], value);
            }
        },
        // 图标
        icon: String,
        // 图片路径
        src: String
    },
    data() {
        return {}
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    // 形状
                    [`${wrapClass}-${this.shape}`]: !!this.shape,
                    // 尺寸
                    [`${wrapClass}-${this.size}`]: !!this.size,
                }
            ];
        },
    },
    mounted() {},
    // 方法
    methods: {
    },
    // 子组件
    components: { MIcon }
};
</script>
