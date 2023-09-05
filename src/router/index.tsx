import { RoutesProps } from '@/constant/types'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'
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
]
