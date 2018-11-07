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

</style>
<template>
    <div class="demo-wrap">
        <div class="demo-item">
            <div class="demo-item-tit">
                <h3>基本实例</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="primary" shape="fillet" @click="start" >start</m-button>
                    <m-button type="primary" shape="fillet" @click="end" >end</m-button>
                    <m-button type="primary" shape="fillet" @click="error" >error</m-button>
                    <m-button type="primary" shape="fillet" @click="destroy" >destroy</m-button>
                    <m-button type="primary" shape="fillet" @click="config" >config</m-button>
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
    mounted() {
        console.log("加载进度条：")
        console.log(this.$Loading)
    },
    methods: {
        start() {
            this.$Loading.start();
        },
        end() {
            this.$Loading.end();
        },
        error() {
            this.$Loading.error();
        },
        destroy() {
            this.$Loading.destroy();
        },
        config() {
            this.$Loading.config({
                color: '#8600CC',
                errorColor: '#FFCB00',
                height: 4
            });
        }
    }
}
</script>