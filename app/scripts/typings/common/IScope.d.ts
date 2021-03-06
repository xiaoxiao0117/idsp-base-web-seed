// Created by baihuibo on 16/3/29.
import {MenuItem} from "../../__base/typings/MenuItem";
/**
 * 全局Scope
 * @prop {string} pageTitle 页面标题
 * @prop {MenuItem[]} menus 菜单
 * @prop {function} isActive 判断页面是否激活
 * @prop {function} setTitle 设置页面标题
 */
export interface IScope extends ng.IRootScopeService {
    //标题
    pageTitle:string;

    //菜单列表
    menus:any

    //当前页面是否激活
    isActive(route:string):boolean;

    //设置标题
    setTitle(title:string)
}