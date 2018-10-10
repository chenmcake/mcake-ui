<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>

<script>
// 公共方法
import { toString, includes, isArray } from '../../utils/base';
// 主容器 class
const wrapClass = 'm-collapse';

// 输出
export default {
    name: 'MCollapse',
    props: {
        // 颜色风格
        type: {
            type: String,
            validator (value) {
                return includes(['white'], value);
            }
        },
        // 当前展开的项目
        value: {
            type: [Array, String]
        },
        // 是否为手风琴模式
        accordion: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            // 当前展开项
            currentValue: this.value
        }
    },
    computed: {
        // 主容器class
        wrapClasses() {
            return [
                // 默认class
                `${wrapClass}`,
                {
                    [`${wrapClass}-${this.type}`]: !!this.type
                }
            ];
        },
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue () {
            this.setOpen();
        }
    },
    mounted() {
        // 初始化展开项
        this.setOpen();
    },
    // 方法
    methods: {
        // 设置展开项
        setOpen() {
            // 获取当前展开项
            let openKey = this.getOpenKey();
            // 遍历所有的面板项
            this.$children.forEach((child, index) => {
                // 当前面板的名称 如果没有名称 使用index
                let name = child.name || toString(index),
                    // 显示状态 判断是否存在于展开项数组中
                    isOpen = includes(openKey, name);

                // 设置打开状态和索引
                child.isOpen = isOpen;
                child.index = index;
            });
        },
        // 获取需要展开的项目的key
        getOpenKey() {
            // 获取当前展开项
            let openKey = this.currentValue || [];
            // 如果不是数组
            if(!isArray(openKey)) {
                openKey = [openKey];
            }

            // 如果为手风琴模式 且长度大于1
            if(this.accordion && openKey.length > 1) {
                // 取第0个
                openKey = [openKey[0]];
            }

            // 将所有的key转换成字符串 防止index为数字
            openKey = openKey.map(value => toString(value));

            return openKey;
        },
        // 切换某个面板打开状态
        toggle(obj) {
            // 当前面板名称
            let name = toString(obj.name),
                // 新的展开值
                newOpenKey = [];

            // 如果为手风琴
            if(this.accordion) {
                // 如果当前项目不是展开项 设置展开
                if(!obj.isOpen) {
                    newOpenKey.push(name);
                }
            }
            else {
                // 获取之前的展开名称
                let openKey = this.getOpenKey(),
                    // 当前面板名称在展开项中的索引
                    index = openKey.indexOf(name);

                // 如果是展开的
                if (obj.isOpen) {
                    // 如果存在数组中 删除
                    if (index > -1) {
                        openKey.splice(index, 1);
                    }
                } else {
                    // 如果不存在数组中 放入
                    if (index < 0) {
                        openKey.push(name);
                    }
                }
                // 设置新的展开项
                newOpenKey = openKey;
            }
            // 设置当前值 并提交事件
            this.currentValue = newOpenKey;
            this.$emit('input', newOpenKey);
            this.$emit('on-change', newOpenKey);

        }
    },
};
</script>
