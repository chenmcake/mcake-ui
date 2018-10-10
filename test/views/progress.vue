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
    .m-progress {
        margin-bottom: 15px;
    }
}
.demo-diy-item-2 {
    .m-progress {
        margin-right: 15px;
    }
}

// 自定义文字
.circle-demo-text {
    font-size: 14px;

    h1 {
        margin: 0;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
        margin-bottom: 5px;
    }
}
</style>
<template>
    <div class="demo-wrap">
        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_4" :bar-width="10"></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色风格</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_1" type="primary"></m-progress>
                    <m-progress :percent="percent_2" type="success"></m-progress>
                    <m-progress :percent="percent_3" type="info"></m-progress>
                    <m-progress :percent="percent_4" type="warning"></m-progress>
                    <m-progress :percent="percent_5" type="error"></m-progress>
                    <m-progress :percent="percent_6" type="noble"></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>内置文字描述及文字位置</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="20" text-position="left" text-inside></m-progress>
                    <m-progress :percent="40" text-inside></m-progress>
                    <m-progress :percent="60" text-position="right" text-inside></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>禁止显示文字描述</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_5" hide-text></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>进度条：胶囊形状、状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_5" pill></m-progress>
                    <m-progress :percent="percent_6" type="noble" status="success" pill></m-progress>
                    <m-progress :percent="percent_3" type="noble" status="error" pill></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>自定义文字</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_6" type="noble" status="success">
                        <m-icon type="success-o-b"></m-icon>
                        成功
                    </m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>进度条动画</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_7" :bar-width="40" text-inside text-align="left"></m-progress>
                </div>
                <div class="demo-item-box">
                    <m-button-group>
                        <m-button type="primary" shape="fillet" icon="plus" bordered @click="handleClick('plus')"></m-button>
                        <m-button type="primary" shape="fillet" icon="reduce" bordered @click="handleClick('reduce')"></m-button>
                    </m-button-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item-2">
            <div class="demo-item-tit">
                <h3>环形进度条</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_1" type="primary" shape="circle"></m-progress>
                    <m-progress :percent="percent_2" type="success" shape="circle"></m-progress>
                    <m-progress :percent="percent_3" type="info" shape="circle"></m-progress>
                    <m-progress :percent="percent_4" type="warning" shape="circle"></m-progress>
                    <m-progress :percent="percent_5" type="error" shape="circle"></m-progress>
                    <m-progress :percent="percent_6" type="noble" shape="circle"></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item-2">
            <div class="demo-item-tit">
                <h3>环形进度条：胶囊形状、状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_5" shape="circle" pill></m-progress>
                    <m-progress :percent="percent_6" shape="circle" pill status="success"></m-progress>
                    <m-progress :percent="percent_3" type="info" shape="circle" pill status="error"></m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item-2">
            <div class="demo-item-tit">
                <h3>环形进度条：自定义文字</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-progress :percent="percent_4" :size="300" :bar-width="30" type="noble" shape="circle" pill>
                        <div class="circle-demo-text">
                            <h1>8,755,889</h1>
                            <p>男性人口数量</p>
                            <span>
                                占总人口比重
                                <i>{{percent_4}}%</i>
                            </span>
                        </div>
                    </m-progress>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            // 进度条
            percent_1: 10,
            percent_2: 20,
            percent_3: 40,
            percent_4: 60,
            percent_5: 80,
            percent_6: 100,
            // 动态进度条
            percent_7: 30,
            // 状态
            status: 'success'
        }
    },
    methods: {
        // 控制进度条加减
        handleClick(type) {
            // 如果为增加
            if(type === "plus") {
                if(this.percent_7 >= 100) {
                    return;
                }
                this.percent_7 += 10;
            }
            else {
                if(this.percent_7 <= 0) {
                    return;
                }
                this.percent_7 -= 10;
            }
        },
        // 切换状态
        toggleStatus() {
            if(this.status == 'success') {
                this.status = 'error';
            }
            else {
                this.status = 'success';
            }
        }
    }
}
</script>