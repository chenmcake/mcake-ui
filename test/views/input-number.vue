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

    &.inline {
        .m-ipt-number-wrap {
            margin-right: 20px;
            margin-bottom: 10px;
        }
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
                    <m-input-number v-model="value0" :min="0" :max="5" placeholder="提示信息" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>尺寸和形状</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box inline">
                    <m-input-number v-model="value7" :min="0" :max="10" size="mini" />
                    <m-input-number v-model="value7" :min="0" :max="10" size="mini" shape="fillet" />
                </div>
                <div class="demo-item-box inline">
                    <m-input-number v-model="value7" :min="0" :max="10" size="small" />
                    <m-input-number v-model="value7" :min="0" :max="10" size="small" shape="fillet" />
                </div>
                <div class="demo-item-box inline">
                    <m-input-number v-model="value7" :min="0" :max="10"  />
                    <m-input-number v-model="value7" :min="0" :max="10" shape="fillet" />
                </div>
                <div class="demo-item-box inline">
                    <m-input-number v-model="value7" :min="0" :max="10" size="large" />
                    <m-input-number v-model="value7" :min="0" :max="10" size="large" shape="fillet" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮位置</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box inline">
                    <m-input-number v-model="value7" controls-position="right" :min="0" :max="10" shape="fillet" size="mini" />
                    <m-input-number v-model="value7" controls-position="right" :min="0" :max="10" shape="fillet" size="small" />
                    <m-input-number v-model="value7" controls-position="right" :min="0" :max="10" shape="fillet" />
                    <m-input-number v-model="value7" controls-position="right" :min="0" :max="10" shape="fillet" size="large" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>占整行</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value7" long />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>步数与精度</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value1" :step="1.25" :precision="2" :min="1" :max="10" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>格式化</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box inline">
                    <m-input-number
                        v-model="value3_1"
                        :min="0"
                        :max="10000"
                        :formatter="formatter_1"
                        :parser="parser_1" />

                    <!-- 百分比 -->
                    <m-input-number
                        v-model="value3_2"
                        :min="0"
                        :max="100"
                        :formatter="formatter_2"
                        :parser="parser_2"
                         />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>只读和不可编辑状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box inline">
                    <m-input-number v-model="value6" :editable="false" />
                    <m-input-number v-model="value6" readonly />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value4" :disabled="disabled" />
                    <m-button type="primary" @click="toggle">切换禁止状态</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>事件处理</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input-number v-model="value5" :min="0" :max="99" @on-change="onChange" @on-focus="onFocus" @on-blur="onBlur" />
                    <m-button type="primary" @click="getValue">获取当前的值</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            value0: 1,
            value1: 1,
            value2: 1,
            value3_1: 1100,
            value3_2: 10,
            value4: 99,
            value5: 1,
            value6: 10,
            value7: 8,
            disabled: true,
            editable: false
        }
    },
    watch: {

        value1(value) {
            console.log(value)
        }
    },
    methods: {
        getValue() {
            console.log(this.value3_1)
        },
        toggle() {
            this.disabled = !this.disabled;
        },
        toggleEditable() {
            this.editable = !this.editable;
        },
        onChange(newVal, oldVal) {
            console.log("newVal：" + newVal + "  oldVal：" + oldVal)
        },
        onFocus(e) {
            console.log("输入框获取了焦点")
            console.log(e)
        },
        onBlur(e) {
            console.log("输入框失去了焦点")
            console.log(e)
        },
        formatter_1(value) {
            // /(\d)(?=(?:\d{3})+$)/g
            return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        },
        parser_1(value) {
            return value.replace(/\$\s?|(,*)/g, '');
        },
        formatter_2(value) {
            return `${value}%`;
        },
        parser_2(value) {
            return value.replace('%', '');
        }
    }
}
</script>