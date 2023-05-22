import { HomePage } from '@/pages/home'
import { routesType } from '@/constant'
import { RoutesProps, RoutesTypes } from '@/constant/types'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import { LayoutComponent } from '@/layouts'
const createRoute = routesType === RoutesTypes.hash ? createHashRouter : createBrowserRouter

const router = createRoute([
  {
    path: '/',
    name: '哈哈哈',
    element: <LayoutComponent />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
] as RoutesProps[])

export default router
