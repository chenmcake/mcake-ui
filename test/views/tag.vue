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
.demo-diy-item {
    margin-bottom: 15px;
    .m-tag {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .m-btn {
        margin-bottom: 10px;
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
                    <m-tag>标签一</m-tag>
                    <m-tag shape="border">标签二</m-tag>
                    <m-tag shape="dot">标签二</m-tag>
                    <m-tag label="标签四" shape="dot-border"></m-tag>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>关闭按钮</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tag closable>标签一</m-tag>
                    <m-tag shape="border" closable>标签二</m-tag>
                    <m-tag shape="dot" closable>标签二</m-tag>
                    <m-tag label="标签四" shape="dot-border" closable></m-tag>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义高度</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tag closable>标签一</m-tag>
                    <m-tag :height="32" closable>标签一</m-tag>
                    <m-tag :height="40" closable>标签一</m-tag>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色风格</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tag closable>标签一</m-tag>
                    <m-tag type="primary" closable>标签二</m-tag>
                    <m-tag type="success" closable>标签三</m-tag>
                    <m-tag type="info" closable>标签四</m-tag>
                    <m-tag type="warning" closable>标签五</m-tag>
                    <m-tag type="error" closable>标签六</m-tag>
                    <m-tag type="noble" closable>标签七</m-tag>
                </div>
                <div class="demo-item-box">
                    <m-tag shape="border" closable>标签一</m-tag>
                    <m-tag shape="border" type="primary" closable>标签二</m-tag>
                    <m-tag shape="border" type="success" closable>标签三</m-tag>
                    <m-tag shape="border" type="info" closable>标签四</m-tag>
                    <m-tag shape="border" type="warning" closable>标签五</m-tag>
                    <m-tag shape="border" type="error" closable>标签六</m-tag>
                    <m-tag shape="border" type="noble" closable>标签七</m-tag>
                </div>
                <div class="demo-item-box">
                    <m-tag shape="dot">标签一</m-tag>
                    <m-tag shape="dot" type="primary">标签二</m-tag>
                    <m-tag shape="dot" type="success">标签三</m-tag>
                    <m-tag shape="dot" type="info">标签四</m-tag>
                    <m-tag shape="dot" type="warning">标签五</m-tag>
                    <m-tag shape="dot" type="error">标签六</m-tag>
                    <m-tag shape="dot" type="noble">标签七</m-tag>
                </div>
                <div class="demo-item-box">
                    <m-tag shape="dot-border" closable>标签一</m-tag>
                    <m-tag shape="dot-border" type="primary" closable>标签二</m-tag>
                    <m-tag shape="dot-border" type="success" closable>标签三</m-tag>
                    <m-tag shape="dot-border" type="info" closable>标签四</m-tag>
                    <m-tag shape="dot-border" type="warning" closable>标签五</m-tag>
                    <m-tag shape="dot-border" type="error" closable>标签六</m-tag>
                    <m-tag shape="dot-border" type="noble" closable>标签七</m-tag>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>动态生成标签测试</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-tag v-for="item in tagList" :name="item" :key="item" @on-close="close" closable>标签{{item+1}}</m-tag>
                    <m-button size="small" shape="fillet" icon="plus" @click="add" bordered>添加标签</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            tagList: [0, 1, 2]
        }
    },
    methods: {
        close(e, name) {
            console.log(e)
            console.log(name)
            let index = this.tagList.indexOf(name);
            this.tagList.splice(index, 1);
        },
        add () {
            let len = this.tagList.length;
            if (len) {
                this.tagList.push(this.tagList[len - 1] + 1);
            } else {
                this.tagList.push(0);
            }
        },
    }
}
</script>