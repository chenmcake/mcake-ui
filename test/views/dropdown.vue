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
    .m-dropdown {
        margin-left: 10px;
        margin-right: 40px;
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
                    <m-dropdown>
                        <a href="javascript:;">
                            下拉菜单
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item disabled>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>辣子鸡丁</m-dropdown-item>
                            <m-dropdown-item divided>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>

                    <m-dropdown>
                        <m-button type="primary" shape="fillet">
                            下拉菜单
                            <m-icon type="bottom"></m-icon>
                        </m-button>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item disabled>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>辣子鸡丁</m-dropdown-item>
                            <m-dropdown-item divided>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>

                    <m-dropdown parent-width>
                        <m-button type="primary" shape="fillet">
                            使用父级宽度
                            <m-icon type="bottom"></m-icon>
                        </m-button>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item disabled>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>辣子鸡丁</m-dropdown-item>
                            <m-dropdown-item divided>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>

                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>对齐方式</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-dropdown placement="bottom-start">
                        <m-button type="primary" shape="fillet">
                            菜单(左边)
                            <m-icon type="bottom"></m-icon>
                        </m-button>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>我是第一个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第二个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第三个项目内容</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
                    <m-dropdown>
                        <m-button type="primary" shape="fillet">
                            菜单(居中)
                            <m-icon type="bottom"></m-icon>
                        </m-button>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>我是第一个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第二个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第三个项目内容</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
                    <m-dropdown placement="bottom-end">
                        <m-button type="primary" shape="fillet">
                            菜单(右边)
                            <m-icon type="bottom"></m-icon>
                        </m-button>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>我是第一个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第二个项目内容</m-dropdown-item>
                            <m-dropdown-item>我是第三个项目内容</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>

                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>触发方式</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-dropdown>
                        <a href="javascript:;">
                            hover触发
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
                    <m-dropdown trigger="click">
                        <a href="javascript:;">
                            click触发
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
                    <m-dropdown trigger="contextMenu">
                        <a href="javascript:;">
                            右键触发
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
                    <m-dropdown trigger="custom" :visible="visible">
                        <a href="javascript:;" @click="handleOpen">
                            custom触发
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <div style="width: 200px; padding: 10px;" slot="list">
                            <p>自定义下拉内容的场景</p>
                            <div style="text-align: right; margin-top:10px;">
                                <m-button type="primary" @click="handleClose">关闭</m-button>
                            </div>
                        </div>
                    </m-dropdown>
                </div> <!-- demo-item-box 结束 -->
            </div> <!-- demo-item-cont 结束 -->
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        // 打开下拉菜单
        handleOpen() {
            this.visible = true;
        },
        // 关闭下拉菜单
        handleClose() {
            this.visible = false;
        }

    }
}
</script>