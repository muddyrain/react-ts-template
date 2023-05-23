import { RoutesProps } from '@/constant/types'
import { HomePage } from '@/pages/home'
import { Page2Page } from '@/pages/page2'
import { Detail } from '@/pages/page2/detail'
export const routes: RoutesProps[] = [
  {
    path: '/',
    id: '/a',
    name: '哈哈哈',
    element: <HomePage />,
  },
  {
    path: '/a',
    name: 'page2',
    children: [
      {
        path: '/b',
        name: 'page2-2',
        element: <Page2Page />,
      },
      {
        path: '/d',
        hideMenu: true,
        parentPath: '/b',
        name: 'page2-detail',
        element: <Detail />,
      },
    ],
  },
]
