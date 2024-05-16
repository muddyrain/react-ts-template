import React, { FC, useEffect, useState } from 'react'
import { Layout, Breadcrumb, Space } from 'antd'
import { RoutesProps } from '@/constant/types'
import { HeaderComponent, SliderComponent } from '.'
import { LAYOUT_SCROLLBAR_CLASSES } from '@/constant/classes'
import { useNavigate } from 'react-router-dom'
import { NotNeedLoginWhiteList } from '@/router/whiteList'
import { LeftOutlined } from '@ant-design/icons'
import { useUserStore } from '@/store/useUserStore'
const { Content } = Layout
export const LayoutComponent: FC<{
  children: React.ReactNode
  routes: RoutesProps[]
  routeConfiguration: RoutesProps
}> = ({ children, routeConfiguration }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const {
    backgroundColor = '#ffffff',
    breadcrumb = [],
    pure = false,
    name = '',
    styles = {},
  } = (routeConfiguration as RoutesProps) || {}
  const [accountInfo, setAccountInfo] = useUserStore(state => [
    state.accountInfo,
    state.setAccountInfo,
  ])
  useEffect(() => {
    const needLoginType = Object.prototype.toString.call(routeConfiguration?.needLogin)
    if (!(needLoginType === '[object Boolean]' && routeConfiguration.needLogin)) {
      if (!accountInfo?.token && !NotNeedLoginWhiteList.includes(routeConfiguration.path)) {
        setAccountInfo(null)
        navigate('/login')
      }
    }
  }, [routeConfiguration, accountInfo])
  if (pure) {
    return <>{React.cloneElement(children as JSX.Element, { ...routeConfiguration })}</>
  }
  return (
    <Layout className="w-full h-full">
      <HeaderComponent
        collapsed={collapsed}
        onCollapsedClick={() => {
          setCollapsed(!collapsed)
        }}
      />
      <Layout>
        <SliderComponent collapsed={collapsed} routeConfiguration={routeConfiguration} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Layout className="p-4 bg-[#F0F2F5]">
            <Content
              className={`p-4 overflow-auto shadow-sm ${LAYOUT_SCROLLBAR_CLASSES}`}
              style={{
                backgroundColor,
                ...styles,
              }}
            >
              {children}
            </Content>
          </Layout>
        </div>
      </Layout>
    </Layout>
  )
}
