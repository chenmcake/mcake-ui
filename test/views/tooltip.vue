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
    width: 700px;
    .demo-item-box {
        margin-top: 50px;
        margin-left: 150px;
    }
}
.top,
.bottom {
    text-align: center;
    .m-tooltip {
        margin: 20px 60px;
    }
}
.left,
.right {
    width: 70px;
    .m-tooltip {
        margin: 15px;
    }
}
.left {
    float: left;
}
.right {
    float: right;
}
.demo-item-box-x {
    margin-bottom: 60px;
    .m-tooltip:first-child {
        margin-left: 30px;
    }
    .m-tooltip + .m-tooltip{
        margin-left: 70px;
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
                <div class="demo-item-box demo-diy-item">
                    <div class="top">
                        <m-tooltip content="Tooltip 文字提示" placement="top-start" always>
                            <m-button shape="fillet" bordered>上左</m-button>
                        </m-tooltip>
                        <m-tooltip content="Tooltip 文字提示" placement="top" always>
                            <m-button shape="fillet" bordered>上边</m-button>
                        </m-tooltip>
                        <m-tooltip content="Tooltip 文字提示" placement="top-end" always>
                            <m-button shape="fillet" bordered>上右</m-button>
                        </m-tooltip>
                    </div>
                    <div class="center clear">
                        <div class="left">
                            <m-tooltip content="Tooltip 文字提示" placement="left-start" always>
                                <m-button shape="fillet" bordered>左上</m-button>
                            </m-tooltip>
                            <m-tooltip content="Tooltip 文字提示" placement="left" always>
                                <m-button shape="fillet" bordered>左边</m-button>
                            </m-tooltip>
                            <m-tooltip content="Tooltip 文字提示" placement="left-end" always>
                                <m-button shape="fillet" bordered>右下</m-button>
                            </m-tooltip>
                        </div>
                        <div class="right">
                            <m-tooltip content="Tooltip 文字提示" placement="right-start" always>
                                <m-button shape="fillet" bordered>右上</m-button>
                            </m-tooltip>
                            <m-tooltip content="Tooltip 文字提示" placement="right" always>
                                <m-button shape="fillet" bordered>右边</m-button>
                            </m-tooltip>
                            <m-tooltip content="Tooltip 文字提示" placement="right-end" always>
                                <m-button shape="fillet" bordered>右下</m-button>
                            </m-tooltip>
                        </div>
                    </div>
                    <div class="bottom">
                        <m-tooltip content="Tooltip 文字提示" placement="bottom-start" always>
                            <m-button shape="fillet" bordered>下左</m-button>
                        </m-tooltip>
                        <m-tooltip content="Tooltip 文字提示" placement="bottom" always>
                            <m-button shape="fillet" bordered>下边</m-button>
                        </m-tooltip>
                        <m-tooltip content="Tooltip 文字提示" placement="bottom-end" always>
                            <m-button shape="fillet" bordered>下右</m-button>
                        </m-tooltip>
                    </div>

                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>颜色主题</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box demo-item-box-x">
                    <m-tooltip content="Tooltip 文字提示" always>
                        <m-button shape="fillet" bordered>default</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="primary" always>
                        <m-button shape="fillet" bordered>primary</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="success" always>
                        <m-button shape="fillet" bordered>success</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="info" always>
                        <m-button shape="fillet" bordered>info</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="warning" always>
                        <m-button shape="fillet" bordered>warning</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="error" always>
                        <m-button shape="fillet" bordered>error</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="noble" always>
                        <m-button shape="fillet" bordered>noble</m-button>
                    </m-tooltip>
                </div>
                <div class="demo-item-box demo-item-box-x">
                    <m-tooltip content="Tooltip 文字提示" bordered always>
                        <m-button shape="fillet" bordered>default</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="primary" bordered always>
                        <m-button shape="fillet" bordered>primary</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="success" bordered always>
                        <m-button shape="fillet" bordered>success</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="info" bordered always>
                        <m-button shape="fillet" bordered>info</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="warning" bordered always>
                        <m-button shape="fillet" bordered>warning</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="error" bordered always>
                        <m-button shape="fillet" bordered>error</m-button>
                    </m-tooltip>
                    <m-tooltip content="Tooltip 文字提示" type="noble" bordered always>
                        <m-button shape="fillet" bordered>noble</m-button>
                    </m-tooltip>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>多行内容</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tooltip placement="right" always>
                        <m-button shape="fillet" bordered>多行内容</m-button>
                        <div slot="content" style="width: 120px">
                            <h4>提示信息</h4>
                            <p>这是一段描述内容</p>
                        </div>
                    </m-tooltip>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>延时显示</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tooltip  content="Tooltip 文字提示" placement="right" :delay="1000">
                        <m-button shape="fillet" bordered>延时1秒显示</m-button>
                    </m-tooltip>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>关闭提示信息</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tooltip content="Tooltip 文字提示" placement="right" :disabled="close">
                        <m-button shape="fillet" bordered @click="handleClose">{{btnText}}</m-button>
                    </m-tooltip>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            close: false
        }
    },
    computed: {
        btnText() {
            return this.close ? "点击打开提示" : "点击关闭提示";
        }
    },
    methods: {
        // 关闭事件
        handleClose() {
            this.close = !this.close;
        },

    }
}
</script>