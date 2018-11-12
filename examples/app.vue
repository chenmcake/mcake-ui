<style lang="scss">
// 引入mcake样式
@import "../src/styles/index";

.home {
    position: relative;
    .left-nav,
    .right-content {
        float: left;
        margin-top: 20px;
        padding: 0 20px;
    }
    .left-nav {
        width: 20%;
        li {
            font-size: 18px;
            color: #666;
            li {
                font-size: 16px;
                cursor: pointer;
                padding: 5px 0 5px 20px;
                &.active {
                    color: #0099CC;
                }
            }
        }
    }
    .right-content{
        width: 80%;
        min-height: 500px;
    }
}
.home-line {
    display: block;
    position: absolute;
    top: 0;
    left: 20%;
    width: 1px;
    height: 100%;
    background: #ccc;
}
.demo-item {
    padding-bottom: 20px;
    .demo-item-box {
        margin-bottom: 10px;
    }
}

.hide {
    display: none;
}

</style>
<template>
    <div class="home clear">
        <div class="left-nav hide">
            <ul>
                <li v-for="(item, i) in components">
                    {{item.title}}
                    <ul v-if="item.children">
                        <li v-for="(page, j) in item.children" :class="{ 'active':showPage == 'M' + page.name }" @click="setShowPage(page.name)">{{page.title}}</li>
                    </ul>
                </li>
                <!-- <li>公共基础</li> -->
            </ul>
        </div>
        <div class="right-content">
            <component v-if="showPage" :is="showPage"></component>
        </div>
        <span class="home-line hide"></span>
    </div> <!-- home 结束 -->
</template>
<script>

// 获得所有组件
import { components } from './common/common.js';
// 所以组件数据
const pages = {};
// 获得所有组件
components.forEach(function(item) {
    let children = item.children;
    if(children) {
        children.forEach(function(page) {
            let name = page.name;
            pages['M' + name] = resolve => require(['./views/' + name], resolve);
        });
    }
});

function getUrl(urlStr) {
    //返回结果/参数前的字段
    var ret = {};
    //获得URL全部内容 如果传入了url字符串 则以传入的url为内容 否则以当前页面URL为内容
    var context = urlStr || window.location.href,
        urlArr = context.split("?");
    //判读url中"?"符后的参数是否存在
    if(urlArr.length === 2){
        //将所有参数分割成数组
        var paramArr = urlArr[1].split("&");
        //获得所有参数的键/值
        paramArr.forEach((val,i) => {
            //获得每一个参数
            var param = val.split("=");
            //这里不用unescape() 因为中文参数会乱码
            ret[param[0]]=decodeURI(param[1]);
        });
        //返回?前的路径
        ret.href = urlArr[0];
    }
    else{
        //返回全部URL
        ret.href = context;
    }
    ret.context = context;

    return ret;
};

// 输出
export default {
    data() {
        return {
            // 当前显示页
            showPage: '',
            // 所有组件数据
            components,
            // 当前URL
            nowUrl: getUrl()
        }
    },
    mounted() {
        // 获得URL上的页名称
        let page = this.nowUrl.page;
        // 如果存在指定组件
        if(page) {
            this.showPage = 'M' + page;
        }
    },
    methods: {
        // 设置当前显示页
        setShowPage(val) {
            window.location.href = this.nowUrl.href + '?page=' + val;
        }
    },
    components: {
        ...pages
    }
}
</script>