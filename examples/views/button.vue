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
    <div class="demo-wrap">
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>基本</h3>
            </div>
            <div class="demo-item-cont">
                <m-button>默认按钮</m-button>
            </div>
        </div> <!-- demo-item 结束 -->
        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>尺寸大小</h3>
            </div>
            <div class="demo-item-cont">
                <m-button size="mini">迷你按钮</m-button>
                <m-button size="small">小型按钮</m-button>
                <m-button>普通按钮</m-button>
                <m-button size="large">大型按钮</m-button>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>颜色风格</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button>OK</m-button>
                    <m-button type="primary">OK</m-button>
                    <m-button type="success">OK</m-button>
                    <m-button type="info">OK</m-button>
                    <m-button type="warning">OK</m-button>
                    <m-button type="error">OK</m-button>
                    <m-button type="noble">OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button bordered>OK</m-button>
                    <m-button type="primary" bordered>OK</m-button>
                    <m-button type="success" bordered>OK</m-button>
                    <m-button type="info" bordered>OK</m-button>
                    <m-button type="warning" bordered>OK</m-button>
                    <m-button type="error" bordered>OK</m-button>
                    <m-button type="noble" bordered>OK</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮形状</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="primary" size="mini">OK</m-button>
                    <m-button type="primary" size="mini" shape="fillet">OK</m-button>
                    <m-button type="primary" size="mini" shape="pill">OK</m-button>
                    <m-button type="primary" size="mini" shape="square">OK</m-button>
                    <m-button type="primary" size="mini" shape="box">OK</m-button>
                    <m-button type="primary" size="mini" shape="circle">OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" size="small">OK</m-button>
                    <m-button type="primary" size="small" shape="fillet">OK</m-button>
                    <m-button type="primary" size="small" shape="pill">OK</m-button>
                    <m-button type="primary" size="small" shape="square">OK</m-button>
                    <m-button type="primary" size="small" shape="box">OK</m-button>
                    <m-button type="primary" size="small" shape="circle">OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary">OK</m-button>
                    <m-button type="primary" shape="fillet">OK</m-button>
                    <m-button type="primary" shape="pill">OK</m-button>
                    <m-button type="primary" shape="square">OK</m-button>
                    <m-button type="primary" shape="box">OK</m-button>
                    <m-button type="primary" shape="circle">OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" size="large">OK</m-button>
                    <m-button type="primary" size="large" shape="fillet">OK</m-button>
                    <m-button type="primary" size="large" shape="pill">OK</m-button>
                    <m-button type="primary" size="large" shape="square">OK</m-button>
                    <m-button type="primary" size="large" shape="box">OK</m-button>
                    <m-button type="primary" size="large" shape="circle">OK</m-button>
                </div>

                <div class="demo-item-box">
                    <m-button type="primary" size="mini" bordered>OK</m-button>
                    <m-button type="primary" size="mini" shape="fillet" bordered>OK</m-button>
                    <m-button type="primary" size="mini" shape="pill" bordered>OK</m-button>
                    <m-button type="primary" size="mini" shape="square" bordered>OK</m-button>
                    <m-button type="primary" size="mini" shape="box" bordered>OK</m-button>
                    <m-button type="primary" size="mini" shape="circle" bordered>OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" size="small" bordered>OK</m-button>
                    <m-button type="primary" size="small" shape="fillet" bordered>OK</m-button>
                    <m-button type="primary" size="small" shape="pill" bordered>OK</m-button>
                    <m-button type="primary" size="small" shape="square" bordered>OK</m-button>
                    <m-button type="primary" size="small" shape="box" bordered>OK</m-button>
                    <m-button type="primary" size="small" shape="circle" bordered>OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" bordered>OK</m-button>
                    <m-button type="primary" shape="fillet" bordered>OK</m-button>
                    <m-button type="primary" shape="pill" bordered>OK</m-button>
                    <m-button type="primary" shape="square" bordered>OK</m-button>
                    <m-button type="primary" shape="box" bordered>OK</m-button>
                    <m-button type="primary" shape="circle" bordered>OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" size="large" bordered>OK</m-button>
                    <m-button type="primary" size="large" shape="fillet" bordered>OK</m-button>
                    <m-button type="primary" size="large" shape="pill" bordered>OK</m-button>
                    <m-button type="primary" size="large" shape="square" bordered>OK</m-button>
                    <m-button type="primary" size="large" shape="box" bordered>OK</m-button>
                    <m-button type="primary" size="large" shape="circle" bordered>OK</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>白色边框</h3>
            </div>
            <div class="demo-item-cont" style="background-color: #6D1599; padding: 20px">
                <div class="demo-item-box">
                    <m-button type="white" bordered>OK</m-button>
                    <m-button type="white" shape="fillet" bordered>OK</m-button>
                    <m-button type="white" shape="pill" bordered>OK</m-button>
                    <m-button type="white" shape="square" bordered>OK</m-button>
                    <m-button type="white" shape="box" bordered>OK</m-button>
                    <m-button type="white" shape="circle" bordered>OK</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>禁止按钮</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button disabled>OK</m-button>
                    <m-button type="primary" disabled>OK</m-button>
                    <m-button type="success" disabled>OK</m-button>
                    <m-button type="info" disabled>OK</m-button>
                    <m-button type="warning" disabled>OK</m-button>
                    <m-button type="error" disabled>OK</m-button>
                    <m-button type="noble" disabled>OK</m-button>
                </div>
                <div class="demo-item-box">
                    <m-button bordered disabled>OK</m-button>
                    <m-button type="primary" bordered disabled>OK</m-button>
                    <m-button type="success" bordered disabled>OK</m-button>
                    <m-button type="info" bordered disabled>OK</m-button>
                    <m-button type="warning" bordered disabled>OK</m-button>
                    <m-button type="error" bordered disabled>OK</m-button>
                    <m-button type="noble" bordered disabled>OK</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>文字按钮</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="text">文字按钮</m-button>
                    <m-button type="text" disabled>禁止文字按钮</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>长按钮</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="primary" long>文字按钮</m-button>
                    <m-button type="error" long>文字按钮</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>带图标的按钮</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="primary" icon="search">搜索</m-button>
                    <m-button type="primary" shape="fillet" icon="search">搜索</m-button>
                    <m-button type="primary" shape="pill" icon="search">搜索</m-button>
                    <m-button type="primary" shape="square" icon="search"></m-button>
                    <m-button type="primary" shape="box" icon="search"></m-button>
                    <m-button type="primary" shape="circle" icon="search"></m-button>
                </div>
                <div class="demo-item-box">
                    <m-button type="primary" icon="search" bordered>搜索</m-button>
                    <m-button type="primary" shape="fillet" icon="search" bordered>搜索</m-button>
                    <m-button type="primary" shape="pill" icon="search" bordered>搜索</m-button>
                    <m-button type="primary" shape="square" icon="search" bordered></m-button>
                    <m-button type="primary" shape="box" icon="search" bordered></m-button>
                    <m-button type="primary" shape="circle" icon="search" bordered></m-button>
                </div>

                <div class="demo-item-box">
                    <m-button type="primary" size="large" shape="fillet" icon="search">搜索</m-button>
                    <m-button type="primary" size="large" shape="fillet" icon="collect">收藏</m-button>
                    <m-button type="primary" size="large" shape="fillet" icon="edit">编辑</m-button>
                    <m-button type="primary" size="large" shape="fillet" icon="plus">添加</m-button>
                    <m-button type="primary" size="large" shape="fillet" icon="remove">删除</m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>加载中</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button type="primary" shape="fillet" loading>Loading...</m-button>
                    <m-button type="primary" shape="fillet" :loading="loading_1" @click="setLoading">
                        <span v-if="!loading_1">Click me!</span>
                        <span v-else>Loading...</span>
                    </m-button>
                    <m-button type="primary" shape="fillet" icon="send-b" :loading="loading_2" @click="setLoading2">
                        <span v-if="!loading_2">Send</span>
                        <span v-else>Sending...</span>
                    </m-button>
                    <m-button shape="circle" bordered loading></m-button>
                    <m-button shape="circle" type="primary" loading></m-button>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮组 - 尺寸</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button-group size="mini">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group size="small">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group size="large">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>

            </div>
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮组 - 形状</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button-group>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="fillet">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="pill">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="square">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="box">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="circle">
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>

                <div class="demo-item-box">
                    <m-button-group>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="fillet">
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="pill">
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="square">
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="box">
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="circle">
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-vertical-item">
            <div class="demo-item-tit">
                <h3>按钮组-纵向排列</h3>
            </div>
            <div class="demo-item-cont clear">
                <div class="demo-item-box">
                    <m-button-group vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="fillet" vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="pill" vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="square" vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="box" vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="circle" vertical>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                        <m-button type="primary">OK</m-button>
                    </m-button-group>
                </div>

            </div> <!-- demo-item-cont 结束 -->
            <div class="demo-item-cont clear">
                <div class="demo-item-box">
                    <m-button-group vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="fillet" vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="pill" vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="square" vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="box" vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
                <div class="demo-item-box">
                    <m-button-group shape="circle" vertical>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
            </div> <!-- demo-item-cont 结束 -->
        </div> <!-- demo-item 结束 -->


        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮组 - 组合 <strong>你也可以不设置button-group的形状 直接通过设置按钮形状来进行拼接</strong> </h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button-group>
                        <m-button type="primary">下拉菜单</m-button>
                        <m-button type="primary" icon="bottom" shape="square"></m-button>
                    </m-button-group>
                    <m-button-group>
                        <m-button type="primary" shape="fillet">下拉菜单</m-button>
                        <m-button type="primary" icon="bottom" shape="box"></m-button>
                    </m-button-group>

                    <m-button-group>
                        <m-button type="primary" shape="pill">下拉菜单</m-button>
                        <m-button type="primary" icon="bottom" shape="circle"></m-button>
                    </m-button-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>按钮组 - 点击状态</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <m-button-group>
                        <m-button class="active" type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                        <m-button type="primary" bordered>OK</m-button>
                    </m-button-group>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            loading_1: false,
            loading_2: false
        }
    },
    methods: {
        btnClick() {
            alert("ss")
        },
        setLoading() {
            this.loading_1 = true;
        },
        setLoading2() {
            this.loading_2 = true;
        }
    }
}
</script>