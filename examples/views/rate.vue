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

    .item {
        display: inline-block;
        width: 300px;
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
                    <m-rate v-model="value_1"></m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>半星</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-rate v-model="value_2" allow-half></m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>提示文字</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <div class="item">
                        <m-rate v-model="value_3" show-text></m-rate>
                    </div>
                    <div class="item">
                        <m-rate v-model="value_4" allow-half show-text>
                            <span style="color: red">{{value_4}}分</span>
                        </m-rate>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>改变图标和颜色</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-rate
                        v-model="value_5"
                        :icon-classes="['m-i-error-face', 'm-i-commonly-face', 'm-i-success-face']"
                        :colors="['#F74342', '#2FBD57', '#3388FF']"
                        void-icon-class="m-i-commonly-face"></m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>改变最大值</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-rate v-model="value_8" :max="10"></m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>只读</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-rate v-model="value_6" allow-half show-text disabled>
                        <span style="color: red;font-size:20px;">{{value_6}}分</span>
                    </m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>事件测试</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-rate v-model="value_7" name="rate" @on-change="Change" allow-half></m-rate>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            value_1: 3,
            value_2: 3.9,
            value_3: 4,
            value_4: 3.8,
            value_5: 4,
            value_6: 3.7,
            value_7: 2.8,
            value_8: 5
        }
    },
    methods: {
        Change(value) {
            console.log(value)
        }
    }
}
</script>