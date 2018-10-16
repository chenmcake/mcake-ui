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
                    <m-input-number v-model="value0" :min="-5" :max="10" placeholder="提示信息" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value1" disabled />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>步数</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value2" :step="1.25" :precision="2" :min="1" :max="10" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


        <m-button type="primary" @click="getValue">点击</m-button>


    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            value0: 12,
            value1: 1,
            value2: 1
        }
    },
    watch: {

        value1(value) {
            console.log(value)
        }
    },
    methods: {
        getValue() {
            console.log(this.value0)
        }
    }
}
</script>