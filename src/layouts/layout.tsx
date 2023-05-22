import { FC } from 'react'
import { Outlet, useMatch, useMatches } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import { RouteLoaderDataType } from '@/router'
import { HeaderComponent } from '.'
const { Content, Sider } = Layout
export const LayoutComponent: FC = () => {
  const matches = useMatches()
  const {
    backgroundColor = '#ffffff',
    parentRoute = '',
    breadcrumb = [],
    name,
  } = matches.find(match => match.data)?.data as RouteLoaderDataType
  const parentRouteConfig = useMatch(parentRoute)

  return (
    <>
      <Layout className="w-full h-full">
        <HeaderComponent />
        <Layout>
          {/* 侧边栏 */}
          <Sider theme="light" width={200}></Sider>
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
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
