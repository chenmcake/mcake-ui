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

    .m-switch {
        margin-right: 10px;
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
<template>
    <div class="demo-wrap">
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-switch></m-switch>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>文字和图标</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-switch v-model="switch_1">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch :value="true" true-text="on" false-text="off">
                    </m-switch>
                    <m-switch v-model="switch_2">
                        <m-icon type="success" slot="open"></m-icon>
                        <m-icon type="error" slot="close"></m-icon>
                    </m-switch>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义宽高</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-switch v-model="switch_2" :width="28" :height="16">
                    </m-switch>

                    <m-switch v-model="switch_2" :width="40" :height="22">
                    </m-switch>
                    <m-switch v-model="switch_2" :width="70" :height="30">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </m-switch>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色风格</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-switch v-model="switch_2">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="success">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="info">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="warning">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="error">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="noble">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                </div>
                <div class="demo-item-box">
                    <m-switch v-model="switch_2" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="success" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="info" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="warning" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="error" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                    <m-switch v-model="switch_2" type="noble" disabled>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </m-switch>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>事件测试</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-switch v-model="switch_4" @on-change="change" true-value="打开了" false-value="关闭了" :disabled="disabled"></m-switch>

                    <m-button type="primary" shape="fillet" @click="toggle">切换禁用状态</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            switch_1: false,
            switch_2: true,
            switch_3: true,
            disabled: true,
            switch_4: "打开了",
        }
    },
    methods: {
        // 按钮点击事件
        btnClick(e) {
            this.hide = !this.hide;
        },
        toggle() {
            this.disabled = !this.disabled;
        },
        change(value) {
            console.log(value)
        }
    }
}
</script>