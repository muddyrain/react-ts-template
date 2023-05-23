import { HomePage } from '@/pages/home'
import { routesType } from '@/constant'
import { RoutesProps, RoutesTypes } from '@/constant/types'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import { LayoutComponent } from '@/layouts'
import { Page2Page } from '@/pages/page2'
const createRoute = routesType === RoutesTypes.hash ? createHashRouter : createBrowserRouter

const router = createRoute([
  {
    path: '/',
    element: <LayoutComponent />,
    breadcrumb: [],
    name: '',
    children: [
      {
        path: '/',
        id: '/a',
        name: '哈哈哈',
        element: <HomePage />,
      },
      {
        path: '/page2',
        id: '哈哈',
        name: 'page2',
        element: <Page2Page />,
      },
    ],
  },
] as RoutesProps[])

export default router
