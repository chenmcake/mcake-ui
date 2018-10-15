/**
 * 查询数组中是否包含某个值
 * @param  {[array]}   arr   [数组]
 * @param  {[string]}  value [查找的值]
 * @return {[boolean]}       [true/false]
 */
export function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
};

/**
 * 数据类型判断
 */
// 数据类型查询地图
const typeClass = getTypeClass();
// 获取数据类型查询地图
function getTypeClass() {
    let obj = {};
    "Boolean Number String Function Array Date RegExp Object Error Symbol Arguments".split(" ").forEach(function(name,i) {
        obj[ "[object "+name+"]" ] = name.toLowerCase();
    })
    return obj;
};
/**
 * 类型检测
 * @param  {[type]} obj [传入要检测的内容]
 * @return {String}     [返回类型对应的字符串]
 */
export function type(obj) {
    return typeof obj === "object" || typeof obj === "function" ?
        typeClass[{}.toString.call(obj)] || "object" : typeof obj;
};

/**
 * 类型是否为数字
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isNumber(obj) {
    return type(obj) === "number";
};

/**
 * 类型是否为对象
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isObject(obj) {
    return type(obj) === "object";
};

/**
 * 类型是否为字符串
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isString(obj) {
    return type(obj) === "string";
};

/**
 * 是否为数组
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isArray(obj) {
    return type(obj) === "array";
};

/**
 * 是否为布尔值
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isBoolean(obj) {
    return type(obj) === "boolean";
};

/**
 * 是否为空 null undefined 空字符串
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
export function isNull(obj) {
    return obj == null || obj === "";
};

/**
 * 转成成数字
 * @param  {[string]} val [转换字符串]
 * @return {[number]}     [转换后的值]
 */
export function toNumber(val) {
    var n = parseFloat(val, 10);
    return (n || n === 0) ? n : val;
};

/**
 * 转换成字符串 支持JSON和数组数据的转换 带2空格缩进
 * @param  {[number/null]} val [转换前的值]
 * @return {[type]}            [转换后的值]
 */
export function toString(val) {
    //如果参数不存在  为空字符 如果为对象 则返回缩进2空格的字符串
    return isNull(val) ? "" : typeof val === 'object' ? JSON.stringify(val) : String(val);
};


/**
 * 迭代器 遍历 obj 所有元素（数组、对象数组、对象），执行 callback 方法，最终还是返回 obj
 * 注意1：callback.call(obj[i],obj[i], i, obj) 函数执行的环境和参数  第一个obj[i] 影响this
 * 注意2：=== false) return obj 一旦有函数返回 false，即跳出循环，类似 break
 * 注意3：无论哪种情况，最终返回的还是 obj
 */
export function each(obj, callback) {
    //声明变量
    var i, key;
    //判断传入的元素是否为数组或数组对象
    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++)
            if (callback.call(obj[i],obj[i], i, obj) === false) return obj;
    }
    else {
        for (key in obj)
            if (callback.call(obj[i],obj[key], key, obj) === false) return obj;
    }
    //无论哪种情况，最终返回的还是 obj
    return obj;
};