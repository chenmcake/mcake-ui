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
                    <m-alert content="这是一个 info 的警告提示"></m-alert>
                    <m-alert type="success" content="这是一个 success 的警告提示"></m-alert>
                    <m-alert type="warning" content="这是一个 warning 的警告提示"></m-alert>
                    <m-alert type="error" content="这是一个 error 的警告提示"></m-alert>
                    <m-alert type="noble" content="这是一个 noble 的警告提示"></m-alert>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>带标题的提示</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-alert title="我是标题" content="这是一个 info 的警告提示"></m-alert>
                    <m-alert type="success">
                        <span slot="title">我是标题</span>
                        这是一个 success 的警告提示
                    </m-alert>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>显示图标</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-alert content="这是一个 info 的警告提示" show-icon></m-alert>
                    <m-alert type="success" content="这是一个 success 的警告提示" show-icon></m-alert>
                    <m-alert type="warning" content="这是一个 warning 的警告提示" show-icon></m-alert>
                    <m-alert type="error" content="这是一个 error 的警告提示" show-icon></m-alert>
                    <m-alert type="noble" content="这是一个 noble 的警告提示" show-icon></m-alert>
                </div>
                <div class="demo-item-box">
                    <m-alert title="我是标题" content="这是一个 info 的警告提示" show-icon></m-alert>
                    <m-alert title="我是标题" type="success" content="这是一个 success 的警告提示" show-icon></m-alert>
                    <m-alert title="我是标题" type="warning" content="这是一个 warning 的警告提示" show-icon></m-alert>
                    <m-alert title="我是标题" type="error" content="这是一个 error 的警告提示" show-icon></m-alert>
                    <m-alert title="我是标题" type="noble" content="这是一个 noble 的警告提示" show-icon></m-alert>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义图标</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-alert title="系统提示" content="您收到一封新的邮件！" show-icon>
                        <m-icon slot="icon" type="mail"></m-icon>
                    </m-alert>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>可关闭的</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-alert content="这是一个 info 的警告提示" @on-close="handleClose" closable></m-alert>
                    <m-alert title="我是标题" content="这是一个 info 的警告提示" @on-close="handleClose" closable show-icon></m-alert>
                    <m-alert type="success" content="这是一个 success 的警告提示" close-text="我知道了" @on-close="handleClose" closable show-icon></m-alert>
                    <m-alert type="error" title="我是标题" content="这是一个 error 的警告提示" @on-close="handleClose" closable show-icon>
                        <span slot="close">我知道了</span>
                    </m-alert>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        // 关闭事件
        handleClose(e) {
            console.log(e)
        },

    }
}
</script>