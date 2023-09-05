import { FC } from 'react'
import { Layout, Dropdown } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar } from '@/assets'
import { useNavigate } from 'react-router-dom'
import { PAGE_TITLE } from '@/constant'
import { Logo } from '@/assets/index'
import { useUserStore } from '@/store/userStore'
export const HeaderComponent: FC = () => {
  const navigate = useNavigate()
  const [accountInfo, setAccountInfo] = useUserStore(state => [
    state.accountInfo,
    state.setAccountInfo,
  ])
  return (
    <>
      <Layout.Header className="flex bg-gradient-to-r from-blue-500 to-sky-600 items-center justify-between">
        <div className="h-16">
          {/* 左侧 */}
          <div
            className="flex h-full px-4 items-center justify-center cursor-pointer duration-300 hover:bg-blue-400"
            onClick={() => navigate('/')}
          >
            {/* Logo */}
            <img src={Logo} className="w-8" />
            {/* 标题 */}
            <span className="text-color text-lg ml-2 text-white">{PAGE_TITLE}</span>
          </div>
        </div>
        {/* 右侧 */}

        <div className="flex items-center text-white">
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                {
                  label: '个人中心',
                  icon: <UserOutlined />,
                  key: 'person-center',
                },
                {
                  label: '退出登录',
                  icon: <LogoutOutlined />,
                  key: 'logout',
                  onClick: () => {
                    setAccountInfo(null)
                    navigate('/login')
                  },
                },
              ],
            }}
          >
            <div className="hover:bg-sky-500 flex items-center duration-300 px-4 cursor-pointer">
              <img src={Avatar} />
              <span className="ml-1">{accountInfo?.username || '沙琪玛~'}</span>
            </div>
          </Dropdown>
        </div>
      </Layout.Header>
    </>
  )
}
