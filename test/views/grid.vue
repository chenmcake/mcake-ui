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
    margin-bottom: 10px;
    .m-col {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #FFF;
        background: $color-primary;
    }
    .diy-col {
        background: lighten($color-primary, 10%);
    }
}
.demo-diy-item {
    .m-col:nth-child(odd) {
        background: lighten($color-primary, 10%);
    }
}

.demo-gutter-item {
    .m-col {
        background: transparent;
        div {
            background: $color-primary;
        }
    }
}
</style>
<template>
    <div class="demo-wrap">
        <!-- <m-button @click="setGutter">改变间距</m-button> -->
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row>
                        <m-col>24：100%</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="12">12：33.33%</m-col>
                        <m-col span="12">12：33.33%</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="8">8：33.33%</m-col>
                        <m-col span="8">8：33.33%</m-col>
                        <m-col span="8">8：33.33%</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="6">6：25%</m-col>
                        <m-col span="6">6：25%</m-col>
                        <m-col span="6">6：25%</m-col>
                        <m-col span="6">6：25%</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="16">16：66.66%</m-col>
                        <m-col span="8">8：33.33%</m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-gutter-item">
            <div class="demo-item-tit">
                <h3>列间距</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row :gutter="gutter">
                        <m-col span="8"><div>col-8</div></m-col>
                        <m-col span="8"><div>col-8</div></m-col>
                        <m-col span="8"><div>col-8</div></m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>位置偏移</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="8">col-8</m-col>
                        <m-col span="8" offset="8">col-8 | offset-8</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="6" offset="6">col-6 | offset-6</m-col>
                        <m-col span="6" offset="6">col-6 | offset-6</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col :xs="{span: 12, offset: 6}" :sm="{span: 12, offset: 8}">xs: {span: 12, offset: 4} | sm: {span: 12, offset: 8}</m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>列排序</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="8">序号1 | col-8</m-col>
                        <m-col span="8" push="8">序号2 | col-8 | push-8</m-col>
                        <m-col span="8" pull="8" class="diy-col">序号3 | col-8 | pull-8</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col span="12" push="12">序号1 | col-12 | push-12</m-col>
                        <m-col span="12" pull="12" class-name="diy-col">序号2 | col-12 | pull-12</m-col>
                    </m-row>
                </div>
                <div class="demo-item-box">
                    <m-row>
                        <m-col :sm="{span: 8, push: 0}" :lg="{span: 8, push: 16}"  class="diy-col">序号1 | col-12 | push-12</m-col>
                        <m-col :sm="{span: 16, pull: 0}" :lg="{span: 16, pull: 8}">序号2 | col-12 | pull-12</m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>响应式 <span>span(默认) | xs(< 768px) | sm(< 992px) | md(< 1200px) | lg(< 1920px) | xl(>= 1920px)</span></h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row>
                        <m-col xs="24" md="12" lg="6">xs: 24 | md: 12 | lg: 6</m-col>
                        <m-col xs="24" md="12" lg="6">xs: 24 | md: 12 | lg: 6</m-col>
                        <m-col xs="24" md="12" lg="6">xs: 24 | md: 12 | lg: 6</m-col>
                        <m-col xs="24" md="12" lg="6">xs: 24 | md: 12 | lg: 6</m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


    </div>
</template>
<script>
export default {
    data() {
        return {
            gutter: 20
        }
    },
    methods: {
        setGutter() {
            this.gutter = 10;
        }
    }
}
</script>