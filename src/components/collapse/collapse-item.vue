<template>
    <div :class="wrapClasses">
        <div class="m-collapse-item-head" @click="toggle">
            <m-icon class="m-collapse-item-icon" type="right"></m-icon>
            <slot name="title">{{title}}</slot>
        </div>
        <m-collapse-transition>
            <div v-show="isOpen" class="m-collapse-item-body">
                <div class="m-collapse-item-cont">
                    <slot></slot>
                </div>
            </div>
        </m-collapse-transition>
    </div>
</template>

<script>
// 引入子组件
import MIcon from '../icon';
// 折叠面板动画
import MCollapseTransition from '../../common/collapse-transition.js';

// 主容器 class
const wrapClass = 'm-collapse-item';

// 输出
export default {
    name: 'MCollapseItem',
    props: {
        // 标题
        title: String,
        // 名称
        name: String
    },
    data() {
        return {
            // 当没有使用name时索引默认值
            index: 0,
            // 打开状态
            isOpen: false
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    'is-open': this.isOpen
                }
            ];
        },
    },
    mounted() {},
    // 方法
    methods: {
        // 切换展开状态
        toggle() {
            this.$parent.toggle({
                // 当前面板名称
                name: this.name || this.index,
                // 打开状态
                isOpen: this.isOpen
            });
        }
    },
    // 子组件
    components: { MIcon, MCollapseTransition }
};
</script>
