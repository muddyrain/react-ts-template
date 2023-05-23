import { useCallback, useEffect, useState } from 'react'
import router from '@/router'
import { RoutesProps } from '@/constant/types'
import { useLocation } from 'react-router-dom'
import { MenuProps } from 'antd'

export const useRoutes = () => {
  const [currentRouteConfiguration, setCurrentRouteConfiguration] = useState<RoutesProps>()
  const location = useLocation()
  const [menuItems, setMenuItems] = useState<MenuProps['items']>([])
  const formattedRoute = useCallback(
    (routes: (typeof router)['routes']) => {
      for (const route of routes) {
        if (route.path === location.pathname) {
          setCurrentRouteConfiguration(route as RoutesProps)
        }
        if (route.children?.length) {
          formattedRoute(route.children)
        }
      }
    },
    [location.pathname]
  )
  useEffect(() => {
    formattedRoute(router.routes || [])
  }, [formattedRoute])
  return {
    routeConfiguration: currentRouteConfiguration,
  }
}
