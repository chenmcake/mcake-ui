<style lang="scss" scoped>

.demo-tit {
    padding-left: 2.5%;
}

// 文字颜色
.text-demo {
    margin-bottom: 20px;

}
.text {
    font-size: 18px;
    margin-right: 20px;
    padding-left: 2.5%;
}

// 背景颜色
.bg-demo {
    p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
        margin-left: 2.5%;
    }
}

.color-item {
    width: 30%;
    height: 70px;
    line-height: 70px;
    margin-bottom: 20px;
    margin-left: 2.5%;
    padding: 0 15px;
    float: left;
    font-size: 16px;
    color: #fff;
}


</style>
<template>
    <div class="color-wrap">
        <div class="text-demo">
            <div class="demo-tit">
                <h3>文字颜色</h3>
            </div>
            <div class="demo-cont">
                <span class="text m-text-primary">primary</span>
                <span class="text m-text-success">success</span>
                <span class="text m-text-info">info</span>
                <span class="text m-text-warning">warning</span>
                <span class="text m-text-error">error</span>
                <span class="text m-text-noble">noble</span>
            </div>
        </div>
        <div class="bg-demo">
            <div class="demo-tit">
                <h3>背景颜色</h3>
            </div>
            <div class="demo-cont clear">
                <div class="color-item m-bg-primary">primary</div>
                <div class="color-item m-bg-primary-light">primary-light</div>
                <div class="color-item m-bg-primary-dark">primary-dark</div>

                <div class="color-item m-bg-success">success</div>
                <div class="color-item m-bg-success-light">success-light</div>
                <div class="color-item m-bg-success-dark">success-dark</div>

                <div class="color-item m-bg-info">info</div>
                <div class="color-item m-bg-info-light">info-light</div>
                <div class="color-item m-bg-info-dark">info-dark</div>

                <div class="color-item m-bg-warning">warning</div>
                <div class="color-item m-bg-warning-light">warning-light</div>
                <div class="color-item m-bg-warning-dark">warning-dark</div>

                <div class="color-item m-bg-error">error</div>
                <div class="color-item m-bg-error-light">error-light</div>
                <div class="color-item m-bg-error-dark">error-dark</div>

                <div class="color-item m-bg-noble">noble</div>
                <div class="color-item m-bg-noble-light">noble-light</div>
                <div class="color-item m-bg-noble-dark">noble-dark</div>
            </div>

            <p class="m-text-error">注意：可以通过设置class为m-text-{theme} 或 m-bg-{theme}来定义颜色主题</p>
        </div>


    </div>
</template>
<script>
export default {
}
</script>