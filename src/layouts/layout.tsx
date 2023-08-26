import React, { FC, useEffect } from 'react'
import { Layout, Breadcrumb, Space } from 'antd'
import { RoutesProps } from '@/constant/types'
import { HeaderComponent, SliderComponent } from '.'
import { LAYOUT_SCROLLBAR_CLASSES } from '@/constant/classes'
import { useLocalStorageState } from 'ahooks'
import { AccountInfoType } from '@/constant/types'
import { useNavigate } from 'react-router-dom'
import { NotNeedLoginWhiteList } from '@/router/whiteList'
import { LeftOutlined } from '@ant-design/icons'
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
      <HeaderComponent />
      <Layout>
        {/* 侧边栏 */}
        {<SliderComponent routeConfiguration={routeConfiguration} />}
        {/* 头部 */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <Layout className="p-4">
            {/* 面包屑 */}
            <div className="flex justify-between">
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
              <Space
                className="cursor-pointer hover:text-indigo-400 duration-300"
                size={2}
                onClick={() => {
                  navigate(-1)
                }}
              >
                <LeftOutlined />
                <span>返回</span>
              </Space>
            </div>
            {/* 内容中心 */}
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
