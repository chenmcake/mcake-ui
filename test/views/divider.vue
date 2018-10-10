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
    width: 500px;
    padding: 20px 15px;
    margin-bottom: 15px;
    border: 1px solid #e9eaec;
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
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                    <m-divider />
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                    <m-divider>文字描述</m-divider>
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                    <m-divider orientation="center">文字描述</m-divider>
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                    <m-divider orientation="right">文字描述</m-divider>
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                    <m-divider dashed />
                    <p>秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。</p>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>垂直的分割线</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <span>文字</span>
                    <m-divider type="vertical" />
                    <a>链接</a>
                    <m-divider type="vertical" dashed />
                    <a>链接</a>
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