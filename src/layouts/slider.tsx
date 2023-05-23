import { FC, useEffect, useState } from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { RoutesProps } from '@/constant/types'
import { useNavigate } from 'react-router-dom'
export const SliderComponent: FC<{
  configuration: RoutesProps
}> = ({ configuration }) => {
  const [menuItems, setMenuItems] = useState<MenuProps['items']>([])
  const navigate = useNavigate()
  return (
    <>
      <Layout.Sider theme="light" width={200}>
        <Menu
          items={[
            {
              label: '首页',
              key: '/',
            },
            {
              label: 'page2',
              key: '/page2',
            },
          ]}
          onSelect={({ key }) => {
            navigate(key)
          }}
        />
      </Layout.Sider>
    </>
  )
}
