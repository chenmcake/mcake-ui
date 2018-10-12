/**
 * 关于Vue DOM的一些操作
 */
import { isString } from './base.js';

/**
 * 向上查找组件
 * @param  {[object]} context        [当前组件对象]
 * @param  {[string]} componentName  [要查找的组件名称]
 * @param  {[array]}  componentNames [要查找组件名称集合]
 * @return {[object]}                [查找到的组件对象]
 */
export function findComponentUpward (context, componentName, componentNames) {
    // 要查找的组件名称集合
    componentNames = isString(componentName) ? [componentName] : componentName;
    // 上一级组件
    let parent = context.$parent;
    let name = parent.$options.name;

    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

/**
 * 向下查找组件
 * @param  {[object]} context       [当前组件对象]
 * @param  {[string]} componentName [要查找的组件名称]
 * @return {[object]}               [查找到的组件对象]
 */
export function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}