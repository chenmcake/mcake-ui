<template>
    <div
        :class="wrapClasses"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave">
        <!-- 按钮 -->
        <div class="m-dropdown-rel" ref="reference"><slot></slot></div>
        <!-- 下拉列表 -->
        <transition name="m-drop">
            <m-drop
                ref="drop"
                v-show="currentVisible"
                :class="listClasses"
                :placement="placement"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                v-transfer-dom >
                <slot name="list"></slot>
            </m-drop>
        </transition>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// 引入下拉菜单的弹出层组件
import MDrop from '../select/dropdown.vue';
// 动画
import TransferDom from '../../directives/transfer-dom';
// 主容器 class
const wrapClass = 'm-dropdown';

// 输出
export default {
    name: 'MDropdown',
    components: { MDrop },
    directives: { TransferDom },
    props: {
        // 显示状态
        visible: {
            type: Boolean,
            default: true
        },
        placement: {
            validator (value) {
                return includes(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
            },
            default: 'bottom'
        },
        trigger: {
            validator (value) {
                return includes(['click', 'hover', 'custom'], value);
            },
            default: 'hover'
        },
        // 是否将弹层放置于 body 内
        transfer: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 当前显示状态
            currentVisible: this.visible
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
            ];
        },
        listClasses() {
            return [
                {
                    [`${wrapClass}-transfer`]: this.transfer
                }
            ];
        }
    },
    watch: {
        visible (val) {
            this.currentVisible = val;
        },
        currentVisible (val) {
            if (val) {
                this.$refs.drop.update();
            } else {
                this.$refs.drop.destroy();
            }
            this.$emit('on-visible-change', val);
        }
    },
    mounted() {},
    methods: {
        // 鼠标移入事件
        handleMouseenter () {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'hover') {
                return false;
            }
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.currentVisible = true;
            }, 250);
        },
        // 鼠标离开事件
        handleMouseleave () {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'hover') {
                return false;
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.currentVisible = false;
                }, 150);
            }
        },
    },
};
</script>
