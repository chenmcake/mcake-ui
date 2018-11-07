// 加载进度条
import LoadingBar from './loading-bar';

// 加载进度条实例
let LoadingBarInstance;
// 默认颜色
let color = 'primary';
// 错误颜色
let errorColor = 'error';
// 进度条高度 单位px
let height = 2;
// 定时器
let timer;

// 获取实例
function getLoadingBar() {
    // 如果已经创建实例 获取之前的 否则创建一个新的实例
    LoadingBarInstance = LoadingBarInstance || LoadingBar.newInstance({
        color,
        errorColor,
        height
    });
    return LoadingBarInstance;
}

// 更新实例方法
function update(opts) {
    // 获取实例
    let instance = getLoadingBar();
    // 调用实例方法
    instance.update(opts);
}

// 手动更新 会先清除定时器
function manualUpdate(opts, hideBar) {
    // 清除定时器
    clearTimer();
    // 更新实例
    update(opts);
    // 隐藏进度条
    if(hideBar) hide();
}

// 清除定时器
function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 隐藏进度条
function hide() {
    setTimeout(() => {
        // 设置隐藏
        update({
            show: false
        });
        // 设置进度条精度为0
        setTimeout(() => {
            update({
                percent: 0
            });
        }, 200);
    }, 800);
}


export default {
    // 开始加载
    start() {
        // 如果定时器存在
        if(timer) return;

        // 精度
        let percent = 0;

        // 创建或更新实例
        update({
            percent,
            status: 'success',
            show: true
        });

        // 创建定时器更新进度条精度
        timer = setInterval(() => {
            // 逐渐加 1-3 随机数
            percent += Math.floor(Math.random() * 3 + 1);
            // 大于90%时清除定时器
            if(percent > 90) {
                clearTimer();
            }
            update({
                percent,
                status: 'success',
                show: true
            });
        }, 200);
    },
    // 手动更新进度条精度
    update(percent) {
        // 设置精度
        manualUpdate({
            percent,
            status: 'success',
            show: true
        });
    },
    // 结束加载
    end() {
        // 设置进度条精度为100 然后关闭进度条
        manualUpdate({
            percent: 100,
            status: 'success',
            show: true
        }, true);
    },
    // 加载错误
    error() {
        manualUpdate({
            percent: 100,
            status: 'error',
            show: true
        }, true);
    },
    // 销毁实例
    destroy() {
        // 清除定时器
        clearTimer();
        // 获取实例
        let instance = getLoadingBar();
        // 设置缓存变量为空
        LoadingBarInstance = null;
        // 删除加载进度条DOM
        instance.destroy();
    },
    // 设置加载进度条配置
    config(opts) {
        // 默认颜色、错误颜色、高度
        if(opts.color) color = opts.color;
        if(opts.errorColor) errorColor = opts.errorColor;
        if(opts.height) height = opts.height;
    }

};