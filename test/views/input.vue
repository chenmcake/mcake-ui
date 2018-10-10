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
                    <m-input placeholder="提示信息" />
                    <m-input icon="time" placeholder="带图标的输入框" />
                    <m-input icon="user" placeholder="带图标的输入框" icon-before />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>尺寸和形状</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input icon="search" size="mini" placeholder="迷你输入框" />
                    <m-input icon="search" size="mini" shape="fillet" placeholder="迷你输入框" />
                    <m-input icon="search" size="mini" shape="pill" placeholder="迷你输入框" />
                </div>
                <div class="demo-item-box">
                    <m-input icon="search" size="small" placeholder="小型输入框" />
                    <m-input icon="search" size="small" shape="fillet" placeholder="小型输入框" />
                    <m-input icon="search" size="small" shape="pill" placeholder="小型输入框" />
                </div>
                <div class="demo-item-box">
                    <m-input icon="search" placeholder="普通输入框" />
                    <m-input icon="search" shape="fillet" placeholder="普通输入框" />
                    <m-input icon="search" shape="pill" placeholder="普通输入框" />
                </div>
                <div class="demo-item-box">
                    <m-input icon="search" size="large" placeholder="大型输入框" />
                    <m-input icon="search" size="large" shape="fillet" placeholder="大型输入框" />
                    <m-input icon="search" size="large" shape="pill" placeholder="大型输入框" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色风格</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input placeholder="default" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="primary" placeholder="primary" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="success" placeholder="success" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="info" placeholder="info" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="warning" placeholder="warning" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="error" placeholder="error" long />
                </div>
                <div class="demo-item-box">
                    <m-input theme="noble" placeholder="noble" long />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>多行文本框</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input icon="search" type="textarea" placeholder="default" />
                    <m-input type="textarea" theme="success" placeholder="success" />
                    <m-input type="textarea" theme="error" placeholder="success" />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>只读与禁止</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input placeholder="default" readonly/>
                    <m-input placeholder="default" disabled/>
                    <m-input theme="primary" placeholder="primary" disabled/>
                </div>

                <div class="demo-item-box">
                    <m-input type="textarea" placeholder="default" readonly/>
                    <m-input type="textarea" placeholder="default" disabled/>
                    <m-input type="textarea" theme="primary" placeholder="primary" disabled/>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>输入框组</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input size="mini" placeholder="输入数字" long>
                        <span slot="before">金额</span>
                        <span slot="after">¥</span>
                    </m-input>
                </div>
                <div class="demo-item-box">
                    <m-input size="small" placeholder="输入数字" long>
                        <span slot="before">金额</span>
                        <span slot="after">¥</span>
                    </m-input>
                </div>
                <div class="demo-item-box">
                    <m-input placeholder="输入数字" long>
                        <span slot="before">金额</span>
                        <span slot="after">¥</span>
                    </m-input>
                </div>
                <div class="demo-item-box">
                    <m-input size="large" placeholder="输入数字" long>
                        <span slot="before">金额</span>
                        <span slot="after">¥</span>
                    </m-input>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item-2">
            <div class="demo-item-tit">
                <h3>输入框组带圆角</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input shape="fillet" size="small" placeholder="输入账号">
                        <span slot="before">
                            <m-icon type="user"></m-icon>
                        </span>
                    </m-input>
                    <m-input shape="fillet" size="small" placeholder="输入账号">
                        <span slot="after">
                            <m-icon type="user"></m-icon>
                        </span>
                    </m-input>
                </div>
                <div class="demo-item-box">
                    <m-input shape="pill" size="small" placeholder="输入账号">
                        <span slot="before">
                            <m-icon type="user"></m-icon>
                        </span>
                    </m-input>
                    <m-input shape="pill" size="small" placeholder="输入账号">
                        <span slot="after">
                            <m-icon type="user"></m-icon>
                        </span>
                    </m-input>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自动获取焦点</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input autofocus />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>事件测试</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-input
                        icon="search"
                        @input="inputEvent"
                        @on-change="inputChange"
                        @on-enter="inputEnter"
                        @on-keyup="inputKeyup"
                        @on-keypress="inputkeypress"
                        @on-keydown="inpuKeydown"
                        @on-focus="inputFocus"
                        @on-blur="inputBlur"
                        @on-click="inputClick"
                         />
                </div>
            </div>
        </div> <!-- demo-item 结束 -->



    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        // 输入事件
        inputEvent(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 改变事件
        inputChange(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 回车事件
        inputEnter(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 键盘按下事件
        inputKeyup(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 回车事件
        inputkeypress(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 键盘按下事件
        inpuKeydown(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 获取焦点事件
        inputFocus(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 失去焦点事件
        inputBlur(value, e) {
            // console.log(value);
            // console.log(e)
        },
        // 点击事件
        inputClick(value, e) {
            // console.log(value);
            // console.log(e)
        },
    }
}
</script>