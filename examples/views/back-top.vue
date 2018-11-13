<style lang="scss" scoped>
@import "../../src/styles/variables";

.demo-tit {
    padding-left: 2.5%;
}

.demo-diy-item {
    .m-btn {
        margin-bottom: 10px;
    }
}
.demo-item-tit {
    h3 {
        strong {
            font-size: 14px;
        }
    }
}
// 垂直的
.demo-vertical-item {
    .demo-item-box {
        float: left;
        margin-right: 30px;
        margin-bottom: 20px;
    }
}

</style>
<template>
    <div class="demo-wrap" style="height: 2000px">
        <p>哈哈哈</p>

        <m-back-top :height="200"></m-back-top>
    </div>
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