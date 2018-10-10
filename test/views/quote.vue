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
    .m-quote {
        margin-bottom: 15px;
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
                    <m-quote>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色主题</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-quote>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="primary">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="success">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="info">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="warning">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="error">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="noble">秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>显示边框</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-quote bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="primary" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="success" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="info" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="warning" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="error" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="noble" bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>显示背景</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-quote show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="primary" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="success" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="info" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="warning" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="error" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote type="noble" show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>圆角</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-quote radius>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote radius bordered>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
                    <m-quote radius show-bg>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</m-quote>
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