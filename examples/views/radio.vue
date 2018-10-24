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
                    <m-radio v-model="radio_1" label="1" >
                        选项一
                    </m-radio>
                    <m-radio v-model="radio_1" label="2" >
                        选项二
                    </m-radio>
                    <m-radio v-model="radio_1" label="3">
                        选项三
                    </m-radio>
                </div>
                <p>当前选择的值为：{{radio_1}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止的选项</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-radio v-model="radio_2" label="1" disabled>
                        选项一
                    </m-radio>
                    <m-radio v-model="radio_2" label="2" disabled>
                        选项二
                    </m-radio>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>垂直的选项</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <!-- 单选框组 也可以禁止 disabled -->
                    <m-radio-group v-model="radio_3" @change="groupChangeFn" vertical>
                        <m-radio label="1">
                            选项一
                        </m-radio>
                        <m-radio label="2">
                            选项二
                        </m-radio>
                        <m-radio label="3">
                            选项三
                        </m-radio>
                    </m-radio-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->




    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            // 基本实例
            radio_1: "1",
            // 禁止
            radio_2: "2",
            // 垂直的
            radio_3: "",
        }
    },
    methods: {
        changeFn(value) {
            console.log(value)
        },
        groupChangeFn(value) {
            console.log(value)
        }
    }
}
</script>