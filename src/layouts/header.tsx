import { FC } from 'react'
import { Dropdown, Divider } from 'antd'
import { UserOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Avatar, Logo } from '@/assets'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/useUserStore'
import { PAGE_TITLE } from '@/constant'
export const HeaderComponent: FC<{
  onCollapsedClick?: () => void
  collapsed?: boolean
}> = ({ collapsed, onCollapsedClick }) => {
  const navigate = useNavigate()
  const [accountInfo, setAccountInfo] = useUserStore(state => [
    state.accountInfo,
    state.setAccountInfo,
  ])
  return (
    <>
      <div
        className="flex bg-white items-center px-0 z-10"
        style={{
          boxShadow: '0px 4px 8px rgba(138, 143, 153, 0.1)',
        }}
      >
        <div
          className="flex flex-shrink-0 duration-300 h-16 px-4 items-center justify-center cursor-pointer border-r border-zinc-100 overflow-hidden"
          onClick={() => navigate('/')}
          style={{
            width: collapsed ? '80px' : '300px',
          }}
        >
          <img src={Logo} className="w-8" />
          {!collapsed && (
            <span className="ml-2 text-lg font-bold whitespace-nowrap">{PAGE_TITLE}</span>
          )}
        </div>
        <div className="flex items-center justify-between flex-1 px-4">
          <div className="flex items-center">
            <MenuFoldOutlined
              onClick={() => {
                onCollapsedClick?.()
              }}
              className={'text-lg cursor-pointer mr-3 hover:text-primary duration-300'}
            />
            <span className={'text-zinc-500 text'}>首页</span>
          </div>
          <div className="flex items-center">
            <Dropdown
              trigger={['click']}
              menu={{
                items: [
                  {
                    label: '个人中心',
                    icon: <UserOutlined />,
                    key: 'person-center',
                  },
                ],
              }}
            >
              <div className="flex items-center duration-300 px-3 cursor-pointer">
                <img src={Avatar} width={36} className={'rounded-full'} />
                <span className="ml-3">{accountInfo?.username || '沙琪玛~'}</span>
              </div>
            </Dropdown>
            <Divider type="vertical" className="h-6" />
            <div
              className="flex items-center duration-300 px-3 cursor-pointer"
              onClick={() => {
                setAccountInfo(null)
                navigate('/login')
              }}
            >
              <span className="mr-3">退出</span>
              <PoweroffOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
