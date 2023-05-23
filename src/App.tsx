import { FC } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { routes } from './router'
import { RoutesProps, RoutesTypes } from './constant/types'
import { LayoutComponent } from './layouts'
import { ROUTE_TYPE } from './constant'
const createRoute = (routes: RoutesProps[]) => {
  const list: React.ReactNode[] = []
  const recursion = (routes: RoutesProps[]) => {
    routes.map(route => {
      if (route.children?.length) {
        recursion(route.children)
      } else {
        const element = (
          <Route
            element={
              <LayoutComponent routes={routes} routeConfiguration={route}>
                {route.element}
              </LayoutComponent>
            }
            path={route.path}
            key={route.path}
          />
        )
        route.element && list.push(element)
      }
    })
  }
  recursion(routes)
  return list
}
export const App: FC = () => {
  const RouterComponent = ROUTE_TYPE === RoutesTypes.hash ? HashRouter : BrowserRouter

  return (
    <RouterComponent>
      <Routes>{createRoute(routes)}</Routes>
    </RouterComponent>
  )
}
