import React, { FC, useEffect } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { RoutesProps } from '@/constant/types'
import { HeaderComponent, SliderComponent } from '.'
import { LAYOUT_SCROLLBAR_CLASSES } from '@/constant/classes'
import { useLocalStorageState } from 'ahooks'
import { AccountInfoType } from '@/constant/types'
import { useNavigate } from 'react-router-dom'
import { NotNeedLoginWhiteList } from '@/router/whiteList'
const { Content } = Layout
export const LayoutComponent: FC<{
  children: React.ReactNode
  routes: RoutesProps[]
  routeConfiguration: RoutesProps
}> = ({ children, routeConfiguration }) => {
  const navigate = useNavigate()
  const {
    backgroundColor = '#ffffff',
    breadcrumb = [],
    pure = false,
    name = '',
    styles = {},
  } = (routeConfiguration as RoutesProps) || {}
  const [accountInfo, setAccountInfo] = useLocalStorageState<AccountInfoType | undefined>(
    'accountInfo'
  )
  useEffect(() => {
    const needLoginType = Object.prototype.toString.call(routeConfiguration?.needLogin)
    if (!(needLoginType === '[object Boolean]' && routeConfiguration.needLogin)) {
      if (!accountInfo?.token && !NotNeedLoginWhiteList.includes(routeConfiguration.path)) {
        setAccountInfo()
        navigate('/login')
      }
    }
  }, [routeConfiguration, accountInfo])

  // 纯净模式默认无布局
  if (pure) {
    return <>{React.cloneElement(children as JSX.Element, { ...routeConfiguration })}</>
  }
  return (
    <Layout className="w-full h-full">
      {/* 头部 */}
      <HeaderComponent />
      <Layout>
        {/* 侧边栏 */}
        {<SliderComponent routeConfiguration={routeConfiguration} />}
        <Layout className="p-4">
          {/* 面包屑 */}
          <Breadcrumb
            className="mb-2"
            items={[
              {
                title: '首页',
                path: '/',
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
            className={`p-4 overflow-auto ${LAYOUT_SCROLLBAR_CLASSES}`}
            style={{
              backgroundColor,
              ...styles,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
