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
                <h3>单个多选框</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox
                        v-model="checkbox_1"
                        @change="changeFn">
                        选项一
                    </m-checkbox>
                </div>
                <p>当前选择的值为：{{checkbox_1}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox-group v-model="checkbox_2">
                        <m-checkbox label="1">选项一</m-checkbox>
                        <m-checkbox label="2">选项二</m-checkbox>
                        <m-checkbox label="3">选项三</m-checkbox>
                    </m-checkbox-group>
                </div>
                <p>当前选择的值为：{{checkbox_2}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止的选项</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox-group v-model="checkbox_3" @change="groupChangeFn">
                        <m-checkbox label="1">选项一</m-checkbox>
                        <m-checkbox label="2" disabled>选项二</m-checkbox>
                        <m-checkbox label="3" disabled>选项三</m-checkbox>
                    </m-checkbox-group>
                </div>
                <p>当前选择的值为：{{checkbox_3}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>垂直的选项</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox-group v-model="checkbox_4" vertical @change="groupChangeFn">
                        <m-checkbox label="1" checked>选项一</m-checkbox>
                        <m-checkbox label="2" checked>选项二</m-checkbox>
                        <m-checkbox label="3">选项三</m-checkbox>
                    </m-checkbox-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>单个多选框值转义</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox
                        v-model="checkbox_5"
                        true-label="被选中了"
                        false-label="没有被选中"
                        checked
                        @change="changeFn">
                        选项一
                    </m-checkbox>
                </div>
                <p>当前选择的值为：{{checkbox_5}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>限制选项可选数量</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox-group v-model="checkbox_6" min="2" max="3">
                        <m-checkbox label="1">选项一</m-checkbox>
                        <m-checkbox label="2" checked disabled>选项二</m-checkbox>
                        <m-checkbox label="3">选项三</m-checkbox>
                        <m-checkbox label="4">选项四</m-checkbox>
                    </m-checkbox-group>
                </div>
                <p>当前选择的值为：{{checkbox_6}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>indeterminate 属性</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-checkbox
                        v-model="checkbox_7"
                        :indeterminate="indeterminate"
                        @click.prevent.native="handleCheckAll" >
                        全选
                    </m-checkbox>
                </div>
                <m-checkbox-group
                    v-model="checkbox_7_group"
                    @change="checkAllGroupChange">
                    <m-checkbox label="唱歌"></m-checkbox>
                    <m-checkbox label="游泳"></m-checkbox>
                    <m-checkbox label="跳舞"></m-checkbox>
                </m-checkbox-group>
                <p>全选框的值为：{{checkbox_7}}</p>
                <p>不确定状态：{{indeterminate}}</p>
                <p>当前选择的值为：{{checkbox_7_group}}</p>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            // 单个多选框
            checkbox_1: true,
            // 多个多选框
            checkbox_2: [],
            // 禁止的
            checkbox_3: ["3"],
            // 垂直的
            checkbox_4: ["1"],
            // 单个多选框
            checkbox_5: "没有被选中",
            // 限制选项数量
            checkbox_6: ["1"],
            // 全选多选框
            checkbox_7: false,
            // 不确定状态
            indeterminate: true,
            // 选项
            checkbox_7_group: ['唱歌', '跳舞']

        }
    },
    methods: {
        changeFn(value) {
            // console.log(value)
        },
        groupChangeFn(value) {
            // console.log(JSON.stringify(value))
        },
        handleCheckAll() {
            // 如果已经为不确定状态
            if (this.indeterminate) {
                this.checkbox_7 = false;
            }
            // 设置选中状态
            else {
                this.checkbox_7 = !this.checkbox_7;
            }
            // 设置不确定状态
            this.indeterminate = false;
            // 设置选项状态
            if(this.checkbox_7) {
                this.checkbox_7_group = ['唱歌', '游泳', '跳舞'];
            }
            else {
                this.checkbox_7_group = [];
            }
        },
        checkAllGroupChange(data) {
            // 如果全部选中
            if(data.length === 3) {
                this.indeterminate = false;
                this.checkbox_7 = true;
            }
            // 如果选中选项大于0
            else if(data.length > 0) {
                this.indeterminate = true;
                this.checkbox_7 = false;
            }
            else {
                this.indeterminate = false;
                this.checkbox_7 = false;
            }
        }
    }
}
</script>