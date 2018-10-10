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

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
const Popper = Vue.prototype.$isServer ? function() {} : require('popper.js');


export default {
    data() {
        return {
        }
    },
    mounted() {
        var reference = document.querySelector('#btn');
        var popper = document.querySelector('#popper');
        console.log(reference)
        console.log(popper)
        console.log(Popper);
        // var anotherPopper = new Popper.Popper(reference, popper, {
        //     placement: 'left'
        // });
    },
    methods: {
        // 关闭事件
        handleClose(e) {
            console.log(e)
        },

    },
}
</script>