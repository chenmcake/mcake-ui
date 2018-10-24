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

    .m-badge {
        margin-right: 30px;
    }
}
.demo-diy-item {
    .m-avatar {
        margin-right: 15px;
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
                    <m-avatar icon="user-b"></m-avatar>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>尺寸和形状</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-avatar icon="user-b" size="mini"></m-avatar>
                    <m-avatar icon="user-b" size="mini" shape="box"></m-avatar>
                    <m-avatar icon="user-b" size="mini" shape="circle"></m-avatar>
                </div>
                <div class="demo-item-box">
                    <m-avatar icon="user-b" size="small"></m-avatar>
                    <m-avatar icon="user-b" size="small" shape="box"></m-avatar>
                    <m-avatar icon="user-b" size="small" shape="circle"></m-avatar>
                </div>
                <div class="demo-item-box">
                    <m-avatar icon="user-b"></m-avatar>
                    <m-avatar icon="user-b" shape="box"></m-avatar>
                    <m-avatar icon="user-b" shape="circle"></m-avatar>
                </div>
                <div class="demo-item-box">
                    <m-avatar icon="user-b" size="large"></m-avatar>
                    <m-avatar icon="user-b" size="large" shape="box"></m-avatar>
                    <m-avatar icon="user-b" size="large" shape="circle"></m-avatar>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>类型<span> (支持Icon、文字、图片)</span></h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-avatar icon="user"></m-avatar>
                    <m-avatar>陈</m-avatar>
                    <m-avatar style="color: #3388FF;background: #e0edff;border:1px solid #c2dbff;">陈</m-avatar>
                    <m-avatar src="../img/demo-avatar.jpg" shape="circle">陈</m-avatar>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>带徽章的头像</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-badge :value="100" :max="99">
                        <m-avatar icon="user" shape="box"></m-avatar>
                    </m-badge>
                    <m-badge dot>
                        <m-avatar icon="user" shape="box"></m-avatar>
                    </m-badge>
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