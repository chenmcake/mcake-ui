<template>
    <div
        :class="wrapClasses"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-click-outside="handleClickOutside" >
        <!-- 按钮 -->
        <div
            class="m-dropdown-rel"
            ref="reference"
            @click="handleClick"
            @contextmenu.prevent="handleRightClick">
            <slot></slot>
        </div>
        <!-- 下拉列表 -->
        <transition name="m-drop">
            <m-drop
                ref="drop"
                v-show="currentVisible"
                :class="listClasses"
                :placement="placement"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                :parent-width="parentWidth"
                no-max-height
                v-transfer-dom >
                <slot name="list"></slot>
            </m-drop>
        </transition>
    </div>
</template>

<script>
// 公共方法
import { includes } from '../../utils/base';
// vue 组件操作方法
import { findComponentUpward } from '../../utils/vdom';
// 引入下拉菜单的弹出层组件
import MDrop from '../select/dropdown.vue';
// 动画
import TransferDom from '../../directives/transfer-dom';
// 外部点击事件指令
import { directive as clickOutside } from 'v-click-outside-x';
// 主容器 class
const wrapClass = 'm-dropdown';

// 输出
export default {
    name: 'MDropdown',
    components: { MDrop },
    directives: { TransferDom, clickOutside },
    props: {
        // 显示状态
        visible: {
            type: Boolean,
            default: false
        },
        // 下拉列表相对按钮的位置
        placement: {
            validator (value) {
                return includes(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
            },
            default: 'bottom'
        },
        // 触发方式
        trigger: {
            validator (value) {
                return includes(['click', 'hover', 'contextMenu', 'custom'], value);
            },
            default: 'hover'
        },
        // 是否为分割按钮
        splitButton: {
            type: Boolean,
            default: false
        },
        // 是否将弹层放置于 body 内
        transfer: {
            type: Boolean,
            default: false
        },
        // 下拉列表使用父级宽度 也就是按钮宽度
        parentWidth: {
            type: Boolean,
            default: false
        },
        // 是否取消
        noMaxHeight: {
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
                    [`${wrapClass}-transfer`]: this.transfer,
                }
            ];
        }
    },
    watch: {
        visible (val) {
            this.currentVisible = val;
        },
        currentVisible (val) {
            if(val) {
                this.$refs.drop.update();
            }
            else {
                this.$refs.drop.destroy();
            }
            this.$emit('on-visible-change', val);
        }
    },
    mounted() {
        // 监测菜单项目点击事件
        this.$on('on-click', key => {
            const $parent = this.hasParent();
            if ($parent) $parent.$emit('on-click', key);
        });

        // 处理触发方式为hover的菜单项目点击事件
        this.$on('on-hover-click', () => {
            const $parent = this.hasParent();
            if ($parent) {
                this.$nextTick(() => {
                    if (this.trigger === 'custom') return false;
                    this.currentVisible = false;
                });
                $parent.$emit('on-hover-click');
            } else {
                this.$nextTick(() => {
                    if (this.trigger === 'custom') return false;
                    this.currentVisible = false;
                });
            }
        });

        this.$on('on-haschild-click', () => {
            this.$nextTick(() => {
                if (this.trigger === 'custom') return false;
                this.currentVisible = true;
            });
            const $parent = this.hasParent();
            if ($parent) $parent.$emit('on-haschild-click');
        });
    },
    methods: {
        // 按钮点击事件
        handleClick() {
            if(this.trigger !== 'click' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },
        handleRightClick() {
            if(this.trigger !== 'contextMenu' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },
        // 鼠标移入事件
        handleMouseenter() {
            if(this.trigger !== 'hover' || this.trigger === 'custom') {
                return false;
            }
            if(this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.currentVisible = true;
            }, 250);
        },
        // 鼠标离开事件
        handleMouseleave() {
            if(this.trigger !== 'hover' || this.trigger === 'custom') {
                return false;
            }
            if(this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.currentVisible = false;
                }, 150);
            }
        },
        // 处理外部点击事件
        handleClickOutside(e) {
            this.handleClose();
            this.handleRightClose();
            if(this.currentVisible) this.$emit('on-click-outside', e);
        },
        // 处理下拉菜单关闭事件
        handleClose() {
            if(this.trigger !== 'click' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = false;
        },
        // 处理下拉菜单右键关闭事件
        handleRightClose() {
            if(this.trigger !== 'contextMenu' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = false;
        },
        // 找到下拉菜单
        hasParent() {
            // 查找父级是不是下拉菜单
            const $parent = findComponentUpward(this, 'MDropdown');
            //如果是返回下拉菜单组件 否则返回false
            return $parent ? $parent : false;
        }
    },
};
</script>
