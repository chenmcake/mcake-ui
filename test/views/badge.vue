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
    .list {
        float: left;
        min-width: 120px;
    }
}

.box {
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 6px;
}
.demo-icon {
    font-size: 32px;
}

</style>
<style>
.demo-badge {
    background: #006AFF;
}
</style>
<template>
    <div class="demo-wrap">
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box clear">
                    <div class="list">
                        <m-badge value="8">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge :value="86">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge :value="2048" >
                            <m-button shape="fillet" bordered>评论</m-button>
                        </m-badge>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>小圆点</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box clear">
                    <div class="list">
                        <m-badge dot>
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge value="100" dot>
                            <m-icon class="demo-icon" type="mail"></m-icon>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge dot>
                            <a href="#">一个链接</a>
                        </m-badge>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>最大值</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box clear">
                    <div class="list">
                        <m-badge :value="100" :max="99">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge :value="1001" :max="999">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>独立使用和自定义样式</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box clear">
                    <div class="list">
                        <m-badge :value="98" />
                        <m-badge class-name="demo-badge" :value="1001" :max="999" />
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>显示与隐藏</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box clear">
                    <div class="list">
                        <m-badge value="8" :hide="hide">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge :value="2048" :hide="hide">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                    <div class="list">
                        <m-badge dot :hide="hide">
                            <div class="box"></div>
                        </m-badge>
                    </div>
                </div>
                <div class="demo-item-box">
                    <m-button shape="fillet" bordered @click="btnClick">{{this.hide ? '显示' : '隐藏'}}徽章</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->
    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            hide: false
        }
    },
    methods: {
        // 按钮点击事件
        btnClick(e) {
            this.hide = !this.hide;
        },

    }
}
</script>