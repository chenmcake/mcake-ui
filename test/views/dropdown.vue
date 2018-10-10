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
                    <m-dropdown>
                        <a href="javascript:;">
                            下拉菜单
                            <m-icon type="bottom"></m-icon>
                        </a>
                        <m-dropdown-menu slot="list">
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                            <m-dropdown-item>肉夹馍</m-dropdown-item>
                            <m-dropdown-item>山西油泼面</m-dropdown-item>
                            <m-dropdown-item>涮羊肉</m-dropdown-item>
                        </m-dropdown-menu>
                    </m-dropdown>
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