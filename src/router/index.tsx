import { RoutesProps } from '@/constant/types'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'
import { Page2Page } from '@/pages/page2'
import { Detail } from '@/pages/page2/detail'
export const routes: RoutesProps[] = [
  {
    path: '/login',
    name: '登录',
    element: <LoginPage />,
    pure: true,
    hideMenu: true,
  },
  {
    path: '/',
    name: '首页',
    element: <HomePage />,
  },
  {
    path: '/a',
    name: 'page2',
    children: [
      {
        path: '/b',
        name: 'page2-2',
        parentPath: '',
        element: <Page2Page />,
      },
    ],
  },
]
