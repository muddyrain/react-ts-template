import { FC, useEffect, useState } from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import router from '@/router'
import { RoutesProps } from '@/constant/types'
export const SliderComponent: FC<{
  configuration: RoutesProps
}> = ({ configuration }) => {
  const [menuItems, setMenuItems] = useState<MenuProps['items']>([])
  const formattedRoute = (routes: (typeof router)['routes']) => {
    for (const route of routes) {
      console.log(route)
    }
  }
  useEffect(() => {
    formattedRoute(router.routes || [])
  }, [])
  return (
    <>
      <Layout.Sider theme="light" width={200}>
        <Menu items={[]} />
      </Layout.Sider>
    </>
  )
}
