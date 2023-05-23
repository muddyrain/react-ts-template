import { FC } from 'react'
import { Outlet, useMatches } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import { RoutesProps } from '@/constant/types'
import { HeaderComponent, SliderComponent } from '.'
import { useRoutes } from './useRoutes'
const { Content } = Layout
export const LayoutComponent: FC = () => {
  const { routeConfiguration } = useRoutes()
  const {
    backgroundColor = '#ffffff',
    breadcrumb = [],
    pure = false,
    hideMenu = false,
    name = '',
  } = (routeConfiguration as RoutesProps) || {}
  {
    /* 纯净模式默认无布局 */
  }
  if (pure) {
    return <Outlet />
  }
  if (routeConfiguration) {
    return (
      <Layout className="w-full h-full">
        <HeaderComponent />
        <Layout>
          {/* 侧边栏 */}
          {!hideMenu && <SliderComponent configuration={routeConfiguration} />}
          <Layout className="p-4">
            {/* 面包屑 */}
            <Breadcrumb
              className="mb-2"
              items={[
                {
                  title: '首页',
                  href: '/',
                },
                ...(breadcrumb?.length
                  ? [...breadcrumb]
                  : [
                      {
                        title: name,
                      },
                    ]),
              ]}
            />
            {/* 内容中心 */}
            <Content
              className="p-4"
              style={{
                background: backgroundColor,
              }}
            >
              <Outlet context={[routeConfiguration]} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  } else {
    return <></>
  }
}
