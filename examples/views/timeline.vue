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
}

.timeline-demo-tit {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
}
.btn {
    position: absolute;
    top: -9px;
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
                    <m-timeline>
                        <m-timeline-item>发布1.0版本</m-timeline-item>
                        <m-timeline-item>发布2.0版本</m-timeline-item>
                        <m-timeline-item>发布3.0版本</m-timeline-item>
                    </m-timeline>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>圆点颜色</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-timeline>
                        <m-timeline-item type="success">类型为：success</m-timeline-item>
                        <m-timeline-item type="info">类型为：info</m-timeline-item>
                        <m-timeline-item type="warning">类型为：warning</m-timeline-item>
                        <m-timeline-item type="error">类型为：error</m-timeline-item>
                        <m-timeline-item type="noble">类型为：noble</m-timeline-item>
                        <m-timeline-item>默认类型为：primary</m-timeline-item>
                    </m-timeline>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>自定义图标</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-timeline>
                        <m-timeline-item type="success">
                            <m-icon slot="dot" type="send-b" style="font-size: 24px;"></m-icon>
                            发布1.0 正式版本
                        </m-timeline-item>
                        <m-timeline-item icon="follow-b" type="warning">发布0.9 测试版本</m-timeline-item>
                        <m-timeline-item>开始进行开发</m-timeline-item>
                    </m-timeline>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>带标题的</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-timeline>
                        <m-timeline-item title="1931年9月18日">
                            <p>日本帝国主义制造九一八事变，发动侵华战争。</p>
                        </m-timeline-item>
                        <m-timeline-item title="1932年1月28日">
                            <p>日军制造一·二八事变。中国第19路军奋起抵抗。</p>
                        </m-timeline-item>
                        <m-timeline-item>
                            <template slot="title">1937年7月7日</template>
                            <p>日军在卢沟桥回龙庙附近进行挑衅性的军事演习，随后，炮轰宛平城。中国守军奋起抵抗，全国抗日战争从此开始。</p>
                        </m-timeline-item>
                        <m-timeline-item>
                            <m-button class="btn" type="primary" bordered>查看更多</m-button>
                        </m-timeline-item>
                    </m-timeline>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


    </div> <!-- demo-wrap 结束 -->
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>