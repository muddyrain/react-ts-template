import { BreadcrumbProps } from 'antd'
import { RouteObject } from 'react-router-dom'

/**
 * 路由类型
 */
export enum RoutesTypes {
  hash = 'hash',
  history = 'history',
}

/**
 * 路由配置
 */
export type RoutesProps = RouteObject & {
  // 页面名称
  name: string
  // 隐藏菜单
  hideMenu?: boolean
  // 纯净模式
  pure?: boolean
  // 背景颜色
  backgroundColor?: string
  // 面包屑
  breadcrumb?: BreadcrumbProps['items']
  // 父路由
  parentRoute?: string
  children?: RoutesProps[]
}
