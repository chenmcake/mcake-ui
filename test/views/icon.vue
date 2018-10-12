<style lang="scss" scoped>
@import "../../src/styles/variables";

.demo-head {
    position: relative;
    padding-right: 400px;
    h2 {
        strong {
            font-size: 16px;
            span {
                color: #f00;
                padding: 0 3px;
            }
        }
    }
}
.demo-head-right {
    position: absolute;
    top: 15px;
    right: 2%;

    .color-tit,
    ul {
        float: left;
    }


    .color-item {
        width: 30px;
        height: 20px;
        margin-left: 10px;
        float: left;
        display: block;
        color: #fff;
        cursor: pointer;
        text-align: center;
        background-color: #333;
        i {
            margin-top: -3px;
            font-size: 18px;
        }
    }
}

.icon-item-tit {
    padding-right: 2%;
    h3 {
        padding-bottom: 5px;
        font-size: 18px;
        border-bottom: 1px solid #eee;
        strong {
            font-size: 14px;
            span {
                padding: 0 3px;
                color: #f00;
            }
        }
    }
}
.icon-box {
    width: 18%;
    float: left;
    background: #f7f7f7;
    margin-right: 2%;
    margin-bottom: 20px;
    padding: 10px 0;
    text-align: center;

    i {
        font-size: 48px;
    }
    h4 {
        font-size: 18px;
    }
}
</style>
<template>
    <div class="wrap">
        <div class="demo-head">
            <h2 class="omiss">Mcake 字体图标库 <strong>共<span>{{iconsCount}}</span>个图标</strong></h2>
            <div class="demo-head-right">
                <span class="color-tit">换个颜色试试：</span>
                <ul>
                    <li v-for="color in colors"
                        :class="[
                            'color-item',
                            `m-bg-${color}`
                        ]"
                        @click="setColor(color)">
                        <m-icon v-if="color == nowColor" type="success"></m-icon>
                    </li>
                </ul>
            </div>
        </div> <!-- demo-head 结束 -->
        <div class="demo-body">
            <!-- 字体图标分组 -->
            <div v-for="(item, i) in icons">
                <div class="icon-item-tit">
                    <h3>
                        {{item.name}}
                        <strong>共<span>{{item.data.length}}</span>个图标</strong>
                    </h3>
                </div> <!-- icon-item-tit 结束 -->
                <div class="clear">
                    <div
                        v-for="(icon, j) in item.data"
                        class="icon-box">
                        <p>
                            <m-icon v-if="nowColor !== 'default'" :type="icon.value" :theme="nowColor"></m-icon>
                            <m-icon v-else :type="icon.value"></m-icon>
                        </p>
                        <h4 class="omiss">{{icon.value}}</h4>
                    </div> <!-- icon-box 结束 -->
                </div> <!-- icon-item-cont 结束 -->
            </div> <!-- icon-item 结束 -->
        </div> <!-- demo-body 结束 -->
    </div>
</template>
<script>
import icons from '../common/icons.js';

// 主题颜色
const colors = ["default", "primary", "success", "info", "warning", "error", "noble"];

export default {
    // 数据
    data() {
        return {
            // 字体图标列表
            icons,
            // 主题颜色
            colors,
            // 当前选中颜色
            nowColor: 'default',
        }
    },
    computed: {
        // 计算图标总数
        iconsCount() {
            let len = 0;
            icons.forEach(item => {
                len += item.data.length;
            });
            return len;
        }
    },
    methods: {
        setColor(color) {
            this.nowColor = color;
        }
    }
}
</script>