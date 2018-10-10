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
.gary-box {
    padding: 30px;
    background: #f7f7f7;
}

.demo-card-body {
    .demo-card-img{
        img {
            width: 100%;
        }
    }
    .demo-card-cont {
        padding: 20px;

        p {
            color: #999;
        }
    }
}

.demo-card-foot {
    padding: 15px 0;
}

.demo-item-list {
    display: inline-block;
    margin-right: 30px;
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
                    <m-row :gutter="30">
                        <m-col span="8">
                            <m-card title="木兰词·拟古决绝词柬友" @click="cardClick">
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义标题</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-row :gutter="30">
                        <m-col span="8">
                            <m-card>
                                <template slot="title">
                                    <span>木兰词·拟古决绝词柬友</span>
                                    <a style="float: right;">
                                        <m-icon type="refresh"></m-icon>
                                        换一换
                                    </a>
                                </template>
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止边框和悬停事件</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box gary-box">
                    <m-row :gutter="30">
                        <m-col span="8">
                            <m-card :bordered="false">
                                <span slot="title">木兰词·拟古决绝词柬友</span>
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                        <m-col span="8">
                            <m-card dis-hover>
                                <span slot="title">木兰词·拟古决绝词柬友</span>
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>卡片封面及禁止动画</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <div class="demo-item-list">
                        <m-card
                            cover="../img/demo-card.jpg"
                            style="width: 300px;">
                            <h5>卡片标题</h5>
                            <p>这里可以是一段描述...</p>
                        </m-card>
                    </div>
                    <div class="demo-item-list">
                        <m-card
                            cover="../img/demo-card.jpg"
                            style="width: 300px;"
                            dis-cover-hover>
                            <h5>卡片标题</h5>
                            <p>这里可以是一段描述...</p>
                        </m-card>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>底部操作</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-card
                        name="卡片名称"
                        cover="../img/demo-card.jpg"
                        :actions="actions"
                        @on-click="cardClick"
                        @on-action-click="actionClick"
                        style="width: 300px;" >
                        <h5>卡片标题</h5>
                        <p>这里可以是一段描述...</p>
                    </m-card>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>预加载</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <div style="margin-bottom: 10px;">
                        <m-button type="primary" @click="loading_1 = !loading_1">切换加载状态</m-button>
                    </div>
                    <m-row :gutter="30">
                        <m-col span="8">
                            <m-card :loading="loading_1" style="height: 220px;">
                                <span slot="title">木兰词·拟古决绝词柬友</span>
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                        <m-col span="8">
                            <m-card :loading="loading_1" style="height: 220px;">
                                <span slot="title">木兰词·拟古决绝词柬友</span>
                                <span slot="loading">自定义加载内容...</span>
                                <p>人生若只如初见，何事秋风悲画扇。</p>
                                <p>等闲变却故人心，却道故人心易变。</p>
                                <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            </m-card>
                        </m-col>
                    </m-row>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            loading_1: true,
            loading_2: false,
            actions: [
                {
                    name: "查看",
                    icon: "m-i-see"
                },
                {
                    name: "设置",
                    icon: "m-i-settings"
                },
                {
                    name: "删除"
                },
            ]
        }
    },
    methods: {
        cardClick(name) {
            console.log(name)
        },
        actionClick(item, itemName) {
            console.log(JSON.parse(JSON.stringify(item)))
            console.log(itemName)
        }
    }
}
</script>