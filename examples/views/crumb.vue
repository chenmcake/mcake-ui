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
    .m-ipt-wrap {
        margin-right: 10px;
    }
}

.demo-diy-item-2 {
    .m-ipt-wrap {
        width: 48%;
    }
    .m-ipt-wrap + .m-ipt-wrap  {
        margin-left: 3.5%
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
                    <m-crumb>
                        <m-crumb-item to="/">首页</m-crumb-item>
                        <m-crumb-item to="/?page=radio">组件</m-crumb-item>
                        <m-crumb-item>面包屑</m-crumb-item>
                    </m-crumb>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义分隔符</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-crumb separator="<i style='color: red'>&gt;</i>">
                        <m-crumb-item to="/">首页</m-crumb-item>
                        <m-crumb-item to="/?page=radio">组件</m-crumb-item>
                        <m-crumb-item>面包屑</m-crumb-item>
                    </m-crumb>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>带图标的导航</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-crumb>
                        <m-crumb-item to="/" icon="img">首页</m-crumb-item>
                        <m-crumb-item to="/?page=radio">
                            <m-icon type="img-error"></m-icon>
                            组件
                        </m-crumb-item>
                        <m-crumb-item>面包屑</m-crumb-item>
                    </m-crumb>
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
    }
}
</script>