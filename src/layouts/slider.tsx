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
}> = ({ routeConfiguration: { parentPath, path } }) => {
  const navigate = useNavigate()
  const routesPaths = useRef<string[]>([])
  const formateRoutes = (routes: RoutesProps[]) => {
    return routes.map(item => {
      // 如果设置该项则不生成菜单
      if (item.hideMenu) {
        return null
      }
      // 如果有路径则放入路径组中
      if (item.path) {
        routesPaths.current.push(item.path)
      }
      const menuItem: ItemType & { children: null | SubMenuType['children'] } = {
        label: item.name || '',
        key: item.path || '',
        icon: item.icon || '',
        children: null,
      }
      // 如果当前路由有子节点就递归遍历出子节点
      if (item.children?.length) {
        menuItem.children = formateRoutes(item.children || [])
      }
      // 如果当前路由没有子节点且当前路由也没有元素内容就不生成菜单
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
    return formateRoutes(routes as RoutesProps[])
  }, [])
  return (
    <Layout.Sider
      theme="light"
      width={300}
      className={`custom_layout_slider overflow-auto shadow-sm  ${SLIDER_SCROLLBAR_CLASSES}`}
    >
      <Menu
        items={menuItems}
        selectedKeys={[selectedKey]}
        mode="inline"
        inlineIndent={24}
        className="py-2"
        defaultOpenKeys={routesPaths.current}
        onSelect={({ key }) => {
          navigate(key)
        }}
      />
    </Layout.Sider>
  )
}
