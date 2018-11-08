<style lang="scss" scoped>
@import "../../src/styles/variables";

.demo-tit {
    padding-left: 2.5%;
}
.demo-item-tit {
    h3 {
        span {
            font-size: 16px;
        }
    }
}
.demo-item-box {
    margin-bottom: 15px;
}
.demo-diy-item {
    .m-alert {
        margin-bottom: 15px;
    }
}

.back-top {
    position: fixed;
    right: 20px;
    bottom: 200px;
}
</style>
<template>
    <div class="demo-wrap">
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button id="btn" bordered>按钮</m-button>
                    <div id="popper" class="popper">
                        哈哈
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div style="height:2000px">

        </div>
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>返回顶部</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button class="back-top" @click="scrollTop" bordered>点击</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
import { scrollTop } from '@/utils/dom.js';
const Popper = Vue.prototype.$isServer ? function() {} : require('popper.js');

function getTime() {
    var date = new Date();
    date.year = date.getFullYear();
    date.month = date.getMonth() + 1;
    date.date = date.getDate();
    date.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    date.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    date.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    date.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return "现在是:" + date.year + "年" + date.month + "月" + date.date + "日 " + date.hour + ":" + date.minute + ":" + date.second
}

export default {
    data() {
        return {
        }
    },
    mounted() {
        var reference = document.querySelector('#btn');
        var popper = document.querySelector('#popper');
        // console.log(reference)
        // console.log(popper)
        // console.log(Popper);
        // var anotherPopper = new Popper.Popper(reference, popper, {
        //     placement: 'left'
        // });
    },
    methods: {
        // 关闭事件
        handleClose(e) {
            console.log(e)
        },
        scrollTop() {
            const sTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            console.log(getTime())
            scrollTop(window, sTop, 0, 1000, function() {
                console.log(getTime())
            });
        }
    },
}
</script>