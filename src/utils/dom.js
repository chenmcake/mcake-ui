/**
 * DOM 操作方法
 */

// 检查是否存在某个class
export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

// 添加class
export function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        }
        else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
};

// 删除class
export function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        }
        else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
};

// 将属性转换成驼峰
function camelCase(str){
    return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' });
}
// getStyle
export function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

/**
 * 返回顶部
 * @param  {Object}   el       [操作对象 window或dom]
 * @param  {Number}   from     [开始值]
 * @param  {Number}   to       [结束值]
 * @param  {Number}   duration [速度]
 * @param  {Function} callback [回调函数]
 *
 * 使用示例：
 * scrollTop(window, 500, 0, 1000, function() {
       console.log("已经返回到了顶部")
   });
 *
 */
export function scrollTop(el, from = 0, to, duration = 300, callback) {
    // 处理动画回调方法兼容性
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              return window.setTimeout(callback, 1000/60);
            }
        );
    }

    // 获得运动差值
    const diff = Math.abs(from - to);
    // 计算每次运动间隔步数
    const step = Math.ceil(diff / duration * 50);

    // 移动滚动条
    _scrollTo(from, to, step);

    function _scrollTo(start, end, step) {
        // 如果运动到了指定位置 触发回调
        if (start === end) {
            callback && callback.call(el);
            return;
        }

        // 下一个运动目标值
        let target = (start + step > end) ? end : start + step;

        if (start > end) {
            target = (start - step < end) ? end : start - step;
        }

        // 设置滚动高度
        if (el === window) {
            window.scrollTo(target, target);
        } else {
            el.scrollTop = target;
        }
        // 递归调用运动函数
        window.requestAnimationFrame(() => _scrollTo(target, end, step));
    }
}