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

.demo-box {
    padding: 20px;
    border: 1px solid #e1e1e1;
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
                    <div class="demo-box">
                        <m-ellipsis>窗夜望远红尘，思念归于何处？一首纯音乐“游子梦”听得如此心痛留下了眼泪，坎坎坷坷，我却不知道这样的情景在我的一生中出现了几次，也许，<a>一场游戏一场梦</a>一场游戏一场梦，一场离别全剧终；也许，午夜忧梦，再也梦不见那个遥不可及我深深思思的故乡；也许，面目全非的时候，我们才会明白，时间的流逝，却是我们的芳华！</m-ellipsis>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>指定截取行数</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <div class="demo-box">
                        <m-ellipsis :rows="2">窗夜望远红尘，思念归于何处？一首纯音乐“游子梦”听得如此心痛留下了眼泪，坎坎坷坷，我却不知道这样的情景在我的一生中出现了几次，也许，<a>一场游戏一场梦</a>一场游戏一场梦，一场离别全剧终；也许，午夜忧梦，再也梦不见那个遥不可及我深深思思的故乡；也许，面目全非的时候，我们才会明白，时间的流逝，却是我们的芳华！</m-ellipsis>
                    </div>
                </div>
            </div>
        </div> <!-- demo-item 结束 -->

        <div class="demo-item demo-diy-item">
            <div class="demo-item-tit">
                <h3>自定义截取符号和位置</h3>
            </div>
            <div class="demo-item-cont">
                <div class="demo-item-box">
                    <div class="demo-box">
                        <m-ellipsis :rows="1" char="AAAAA" position="middle">窗夜望远红尘，思念归于何处？一首纯音乐“游子梦”听得如此心痛留下了眼泪，坎坎坷坷，我却不知道这样的情景在我的一生中出现了几次，也许，<a>一场游戏一场梦</a>一场游戏一场梦，一场离别全剧终；也许，午夜忧梦，再也梦不见那个遥不可及我深深思思的故乡；也许，面目全非的时候，我们才会明白，时间的流逝，却是我们的芳华！</m-ellipsis>
                    </div>
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