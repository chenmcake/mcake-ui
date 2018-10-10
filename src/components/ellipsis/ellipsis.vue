<template>
    <div ref="ellipsis" :class="wrapClasses"><slot>{{content}}</slot></div>
</template>

<script>
// 引入DOM操作方法
import { getStyle } from '../../utils/dom.js';
// 主容器 class
const wrapClass = 'm-ellipsis';
// 输出
export default {
    name: 'MEllipsis',
    props: {
        // 行数 默认为1行
        rows: {
            type: Number,
            default: 1
        },
        // 省略符号
        char: {
            type: String,
            default: '...'
        },
        // 文字所在位置
        position: {
            type: String,
            default: 'tail'
        },
        // 文字内容
        content: String
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
            ];
        },

    },
    mounted() {
        // 对文字进行处理
        this.ellipsisText();
    },
    methods: {
        // 对文字进行处理
        ellipsisText() {
            // 主容器
            let el = this.$refs.ellipsis,
                // 文字内容
                text = this.content || el.textContent,
                // 省略符号
                char = this.char,
                // 储存一份原始文本
                origText = text,
                // 之前文本长度
                origLength = origText.length,
                // 之前的高度
                origHeight = parseInt(getStyle(el, 'height')),
                // 文字行高
                lineHeight = parseFloat(getStyle(el, 'lineHeight'), 10),
                // 截取后的高度
                targetHeight = lineHeight * this.rows;


            // 如果之前的高度小于等于截取后的高度 不进行截取
            if(origHeight <= targetHeight) {
                return;
            }

            // 开始长度
            let start = 0,
                // 长度
                length = 0,
                // 结束长度
                end = text.length;


            // 如果省略位置在尾部
            if(this.position === 'tail')  {
                // 处理文字
                while (start < end) {
                    length = Math.ceil((start + end) / 2);
                    // 设置内容 只是临时的内容
                    el.textContent = text.slice(0, length) + char;
                    // console.log(parseInt(getStyle(el, 'height')))
                    // 如果当前高度还是小于等于目标高度
                    if (parseInt(getStyle(el, 'height')) <= targetHeight) {
                        start = length;
                    } else {
                        end = length - 1;
                    }
                }

                text = text.slice(0, start);
                text += char;
            }
            else if(this.position === 'middle') {
                // 截取长度
                let sliceLength = 0,
                    // 头 尾
                    head, tail;

                // 处理文字
                while (start < end) {
                    length = Math.ceil((start + end) / 2);
                    sliceLength = Math.max(origLength - length, 0);
                    // 设置内容 只是临时的内容
                    el.textContent = origText.slice(0, Math.floor((origLength - sliceLength) / 2)) + char + origText.slice(Math.floor((origLength + sliceLength) / 2), origLength);

                    if (parseInt(getStyle(el, 'height')) <= targetHeight) {
                        start = length;
                    } else {
                        end = length - 1;
                    }
                }

                sliceLength = Math.max(origLength - start, 0);
                // 获得头部
                head = origText.slice(0, Math.floor((origLength - sliceLength) / 2));
                // 获得尾部
                tail = origText.slice(Math.floor((origLength + sliceLength) / 2), origLength);
                // 拼接最终结果
                text = head + char + tail;
            }

            // 设置最终内容
            el.textContent = text;

            // console.log(origHeight)
            // console.log(targetHeight)
            // console.log(text)
        },

    }
};
</script>
