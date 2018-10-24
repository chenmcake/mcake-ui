<style lang="scss" scoped>
@import "../../src/styles/variables";

.demo-wrap {
    position: relative;
    width: 300px;
    margin: 0 auto;
    margin-top: 100px;
    padding-bottom: 50px;
}
.select {
    width: 200px;
    height: 32px;
    margin-right: 5px;
}
.demo-cont {
    height: 300px;
    margin-bottom: 20px;
}
.box {
    width: 300px;
    height: 200px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    line-height: 200px;
    background-color: #9d2fbc;
}
.m-fade-leave-active {
    animation-duration: 1s;
}
</style>
<template>
    <div class="demo-wrap">
        <div class="demo-cont">
            <transition :name="typePrefix">
                <div v-show="visible" class="box">{{type}}</div>
            </transition>
        </div> <!-- demo-cont 结束 -->
        <div class="demo-foot">
            <select class="select" v-model="type" @change="change">
                <option v-for="(item, i) in animates" :value="item.name" :key="i">{{item.name}}</option>
            </select>
            <m-button type="primary" shape="fillet" @click="handleClick">{{buttonText}}</m-button>
        </div> <!-- demo-foot 结束 -->
    </div> <!-- demo-wrap 结束 -->
</template>
<script>
import animates from '../common/animates.js';

export default {
    data() {
        return {
            // 动画库列表
            animates,
            // 当前选中的动画类型
            type: "fade",
            // 显示状态
            visible: true

        }
    },
    computed: {
        // 动画类型前缀
        typePrefix() {
            return "m-" + this.type;
        },
        // 按钮文字
        buttonText() {
            return this.visible ? "退出动画" : "进入动画";
        }
    },
    methods: {
        // 按钮点击事件
        handleClick() {
            this.visible = !this.visible;
        },
        change() {
            this.visible = true;
        }

    }
}
</script>