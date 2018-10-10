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

    .m-badge {
        margin-right: 30px;
    }
}
.demo-diy-item {
    .m-avatar {
        margin-right: 15px;
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
                    <m-collapse v-model="key_1" @on-change="change">
                        <m-collapse-item title="木兰词·拟古决绝词柬友">
                            <p>人生若只如初见，何事秋风悲画扇。</p>
                            <p>等闲变却故人心，却道故人心易变。</p>
                            <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                        </m-collapse-item>
                        <m-collapse-item title="塞下曲六首·其一">
                            <p>五月天山雪，无花只有寒。</p>
                            <p>笛中闻折柳，春色未曾看。</p>
                            <p>晓战随金鼓，宵眠抱玉鞍。</p>
                            <p>愿将腰下剑，直为斩楼兰。</p>
                        </m-collapse-item>
                        <m-collapse-item title="秋下荆门">
                            <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                            <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                        </m-collapse-item>
                    </m-collapse>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>手风琴模式</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-collapse v-model="key_2" @on-change="change" accordion>
                        <m-collapse-item title="木兰词·拟古决绝词柬友" name="one">
                            <p>人生若只如初见，何事秋风悲画扇。</p>
                            <p>等闲变却故人心，却道故人心易变。</p>
                            <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                        </m-collapse-item>
                        <m-collapse-item title="塞下曲六首·其一" name="two">
                            <p>五月天山雪，无花只有寒。</p>
                            <p>笛中闻折柳，春色未曾看。</p>
                            <p>晓战随金鼓，宵眠抱玉鞍。</p>
                            <p>愿将腰下剑，直为斩楼兰。</p>
                        </m-collapse-item>
                        <m-collapse-item title="秋下荆门" name="three">
                            <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                            <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                        </m-collapse-item>
                    </m-collapse>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>白色的面板</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-collapse type="white" v-model="key_3" @on-change="change">
                        <m-collapse-item title="木兰词·拟古决绝词柬友" name="one">
                            <p>人生若只如初见，何事秋风悲画扇。</p>
                            <p>等闲变却故人心，却道故人心易变。</p>
                            <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                        </m-collapse-item>
                        <m-collapse-item title="塞下曲六首·其一" name="two">
                            <p>五月天山雪，无花只有寒。</p>
                            <p>笛中闻折柳，春色未曾看。</p>
                            <p>晓战随金鼓，宵眠抱玉鞍。</p>
                            <p>愿将腰下剑，直为斩楼兰。</p>
                        </m-collapse-item>
                        <m-collapse-item title="秋下荆门" name="three">
                            <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                            <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                        </m-collapse-item>
                    </m-collapse>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>面板嵌套</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-collapse v-model="key_5" >
                        <m-collapse-item title="木兰词·拟古决绝词柬友">
                            <p>人生若只如初见，何事秋风悲画扇。</p>
                            <p>等闲变却故人心，却道故人心易变。</p>
                            <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                            <m-collapse v-model="key_6" >
                                <m-collapse-item title="木兰词·拟古决绝词柬友">
                                    <p>人生若只如初见，何事秋风悲画扇。</p>
                                    <p>等闲变却故人心，却道故人心易变。</p>
                                    <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                                    <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                                </m-collapse-item>
                                <m-collapse-item title="塞下曲六首·其一">
                                    <p>五月天山雪，无花只有寒。</p>
                                    <p>笛中闻折柳，春色未曾看。</p>
                                    <p>晓战随金鼓，宵眠抱玉鞍。</p>
                                    <p>愿将腰下剑，直为斩楼兰。</p>
                                </m-collapse-item>
                                <m-collapse-item title="秋下荆门">
                                    <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                                    <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                                </m-collapse-item>
                            </m-collapse>
                        </m-collapse-item>
                        <m-collapse-item title="塞下曲六首·其一">
                            <p>五月天山雪，无花只有寒。</p>
                            <p>笛中闻折柳，春色未曾看。</p>
                            <p>晓战随金鼓，宵眠抱玉鞍。</p>
                            <p>愿将腰下剑，直为斩楼兰。</p>
                        </m-collapse-item>
                        <m-collapse-item title="秋下荆门">
                            <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                            <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                        </m-collapse-item>
                    </m-collapse>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义标题</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-collapse icon="" v-model="key_4" @on-change="change" accordion>
                        <m-collapse-item name="one">
                            <template slot="title">
                                <span style="color: blue">
                                    木兰词·拟古决绝词柬友
                                    <m-icon type="info-o-b"></m-icon>
                                </span>
                            </template>
                            <p>人生若只如初见，何事秋风悲画扇。</p>
                            <p>等闲变却故人心，却道故人心易变。</p>
                            <p>骊山语罢清宵半，泪雨零铃终不怨。</p>
                            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
                        </m-collapse-item>
                        <m-collapse-item title="塞下曲六首·其一" name="two">
                            <p>五月天山雪，无花只有寒。</p>
                            <p>笛中闻折柳，春色未曾看。</p>
                            <p>晓战随金鼓，宵眠抱玉鞍。</p>
                            <p>愿将腰下剑，直为斩楼兰。</p>
                        </m-collapse-item>
                        <m-collapse-item title="秋下荆门" name="three">
                            <p>霜落荆门江树空，布帆无恙挂秋风。</p>
                            <p>此行不为鲈鱼鲙，自爱名山入剡中。</p>
                        </m-collapse-item>
                    </m-collapse>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
            key_1: [1, 2],
            key_2: "one",
            key_3: ['two', 'three'],
            key_4: "one",
            key_5: [0],
            key_6: [0],
        }
    },
    methods: {
        change(value) {
            console.log(value)
        }
    }
}
</script>