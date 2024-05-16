import { RoutesProps } from '@/constant/types'
import { HomePage } from '@/pages/home'
import { Management } from '@/pages/management'
import { LoginPage } from '@/pages/login'
import { HomeOutlined } from '@ant-design/icons'
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
    icon: <HomeOutlined />,
  },
  {
    path: '/management',
    name: '管理模块',
    icon: <HomeOutlined />,
    children: [
      {
        path: '/management-list',
        name: '管理',
        element: <Management />,
      },
    ],
  },
]
