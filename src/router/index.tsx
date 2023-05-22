import { HomePage } from '@/pages/home'
import { routesType } from '@/constant'
import { RoutesTypes } from '@/constant/types'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import { LayoutComponent } from '@/layouts'
import { BreadcrumbProps } from 'antd'
const createRoute = routesType === RoutesTypes.hash ? createHashRouter : createBrowserRouter
export interface RouteLoaderDataType {
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
}
const routes = createRoute([
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: (): RouteLoaderDataType => {
          return { name: '首页', breadcrumb: [] }
        },
      },
    ],
  },
])

export default routes
