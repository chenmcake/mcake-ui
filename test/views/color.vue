<style lang="scss" scoped>
@import "../../src/styles/variables";

.demo-tit {
    padding-left: 2.5%;
}

// 文字颜色
.text-demo {
}
.text {
    font-size: 18px;
    margin-right: 20px;
    padding-left: 2.5%;
}
.text-primary {
    color: $color-primary;
}
.text-success {
    color: $color-success;
}
.text-info {
    color: $color-info;
}
.text-warning {
    color: $color-warning;
}
.text-error {
    color: $color-error;
}
.text-noble {
    color: $color-noble;
}

// 背景颜色
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

.primary {
    background-color: $color-primary;
}
.primary-light {
    background-color: lighten($color-primary, $color-gradient);
}
.primary-dark {
    background-color: darken($color-primary, $color-gradient);
}

.success {
    background-color: $color-success;
}
.success-light {
    background-color: lighten($color-success, $color-gradient);
}
.success-dark {
    background-color: darken($color-success, $color-gradient);
}

.info {
    background-color: $color-info;
}
.info-light {
    background-color: lighten($color-info, $color-gradient);
}
.info-dark {
    background-color: darken($color-info, $color-gradient);
}

.warning {
    background-color: $color-warning;
}
.warning-light {
    background-color: lighten($color-warning, $color-gradient);
}
.warning-dark {
    background-color: darken($color-warning, $color-gradient);
}

.error {
    background-color: $color-error;
}
.error-light {
    background-color: lighten($color-error, $color-gradient);
}
.error-dark {
    background-color: darken($color-error, $color-gradient);
}

.noble {
    background-color: $color-noble;
}
.noble-light {
    background-color: lighten($color-noble, $color-gradient);
}
.noble-dark {
    background-color: darken($color-noble, $color-gradient);
}
</style>
<template>
    <div class="color-wrap">
        <div class="text-demo">
            <div class="demo-tit">
                <h3>文字颜色</h3>
            </div>
            <span class="text text-primary">primary</span>
            <span class="text text-success">success</span>
            <span class="text text-info">info</span>
            <span class="text text-warning">warning</span>
            <span class="text text-error">error</span>
            <span class="text text-noble">noble</span>
        </div>
        <div class="bg-demo clear">
            <div class="demo-tit">
                <h3>背景颜色</h3>
            </div>
            <div class="color-item primary">primary</div>
            <div class="color-item primary-light">primary-light</div>
            <div class="color-item primary-dark">primary-dark</div>

            <div class="color-item success">success</div>
            <div class="color-item success-light">success-light</div>
            <div class="color-item success-dark">success-dark</div>

            <div class="color-item info">info</div>
            <div class="color-item info-light">info-light</div>
            <div class="color-item info-dark">info-dark</div>

            <div class="color-item warning">warning</div>
            <div class="color-item warning-light">warning-light</div>
            <div class="color-item warning-dark">warning-dark</div>

            <div class="color-item error">error</div>
            <div class="color-item error-light">error-light</div>
            <div class="color-item error-dark">error-dark</div>

            <div class="color-item noble">noble</div>
            <div class="color-item noble-light">noble-light</div>
            <div class="color-item noble-dark">noble-dark</div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>