import { FC } from 'react'
import { Outlet, useMatches } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import { RoutesProps } from '@/constant/types'
import { HeaderComponent, SliderComponent } from '.'
const { Content } = Layout
export const LayoutComponent: FC = () => {
  const matches = useMatches()
  const routeConfiguration = (matches.find(match => match.data)?.data as RoutesProps) || {}
  const {
    backgroundColor = '#ffffff',
    breadcrumb = [],
    pure = false,
    hideMenu = false,
    name = '',
  } = routeConfiguration
  return (
    <>
      {/* 纯净模式默认无布局 */}
      {pure ? (
        <Outlet />
      ) : (
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
      )}
    </>
  )
}
