<template>
    <li :class="wrapClasses" @click="handleClick"><slot></slot></li>
</template>

<script>
// vue 组件操作方法
import { findComponentUpward } from '../../utils/vdom';
// 输入框主容器 class
const wrapClass = 'm-dropdown-item';

// 输出
export default {
    name: 'MDropdownItem',
    props: {
        // 项目名称
        name: {
            type: [String, Number]
        },
        // 是否被禁止
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否选中了
        selected: {
            type: Boolean,
            default: false
        },
        // 是否有分割线
        divided: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                `${wrapClass}`,
                {
                    'disabled': this.disabled,
                    'selected': this.selected,
                    'divided': this.divided
                }
            ];
        },
    },
    mounted() {
    },
    methods: {
        // 下拉菜单选项点击事件
        handleClick() {
            // 向上找到下拉菜单组件
            const $parent = findComponentUpward(this, 'MDropdown');
            // 看一下父级组件是否就是下拉菜单
            const hasChildren = this.$parent && this.$parent.$options.name === 'MDropdown';

            // 如果当前选项为禁止状态
            if (this.disabled) {
                this.$nextTick(() => {
                    $parent.currentVisible = true;
                });
            }
            else if (hasChildren) {
                this.$parent.$emit('on-haschild-click');
            }
            else {
                if ($parent && $parent.$options.name === 'MDropdown') {
                    $parent.$emit('on-hover-click');
                }
            }
            $parent.$emit('on-click', this.name);
        }
    },
};
</script>
