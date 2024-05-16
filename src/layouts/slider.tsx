import { FC, useMemo, useRef } from 'react'
import { Layout, Menu } from 'antd'
import { RoutesProps } from '@/constant/types'
import { useNavigate } from 'react-router-dom'
import { routes } from '@/router'
import { ItemType, SubMenuType } from 'antd/es/menu/hooks/useItems'
import { SLIDER_SCROLLBAR_CLASSES } from '@/constant/classes'
import './menu.less'

export const SliderComponent: FC<{
  routeConfiguration: RoutesProps
  collapsed?: boolean
}> = ({ routeConfiguration: { parentPath, path }, collapsed }) => {
  const navigate = useNavigate()
  const routesPaths = useRef<string[]>([])
  const formatRoutes = (routes: RoutesProps[]) => {
    return routes.map(item => {
      if (item.hideMenu) {
        return null
      }
      if (item.path) {
        routesPaths.current.push(item.path)
      }
      const menuItem: ItemType & { children: null | SubMenuType['children'] } = {
        label: item.name || '',
        key: item.path || '',
        icon: item.icon || '',
        children: null,
      }
      if (item.children?.length) {
        menuItem.children = formatRoutes(item.children || [])
      }
      if (!item.children?.length && !item.element) {
        return null
      }
      return menuItem
    })
  }
  const selectedKey = useMemo(() => {
    return parentPath || path
  }, [path])
  const menuItems = useMemo(() => {
    return formatRoutes(routes as RoutesProps[])
  }, [])
  return (
    <Layout.Sider
      theme="light"
      width={300}
      collapsed={collapsed}
      className={`custom_layout_slider overflow-auto shadow-sm ${SLIDER_SCROLLBAR_CLASSES}`}
    >
      <Menu
        items={menuItems}
        selectedKeys={[selectedKey]}
        mode="inline"
        inlineIndent={24}
        className="py-2"
        defaultOpenKeys={routesPaths.current}
        onClick={({ key }) => {
          navigate(key)
        }}
      />
    </Layout.Sider>
  )
}
