import { FC } from 'react'
import { Layout, Dropdown } from 'antd'
import { UserOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons'
import { Avatar } from '@/assets'
import { useNavigate } from 'react-router-dom'
import { useLocalStorageState } from 'ahooks'
import { AccountInfoType } from '@/constant/types'
import { PAGE_TITLE } from '@/constant'
import { Logo } from '@/assets/index'
export const HeaderComponent: FC = () => {
  const navigate = useNavigate()
  const [accountInfo, setAccountInfo] = useLocalStorageState<AccountInfoType | undefined>(
    'accountInfo'
  )
  return (
    <>
      <Layout.Header className="flex bg-gradient-to-r from-[#6464f1] to-indigo-600 items-center justify-between">
        <div className="h-16">
          {/* 左侧 */}
          <div
            className="flex h-full px-4 items-center justify-center cursor-pointer duration-300 hover:bg-indigo-600"
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
                    setAccountInfo()
                    navigate('/login')
                  },
                },
              ],
            }}
          >
            <div className="hover:bg-indigo-500 flex items-center duration-300 px-4 cursor-pointer">
              <img src={Avatar} />
              <span className="ml-1">{accountInfo?.username || '沙琪玛~'}</span>
            </div>
          </Dropdown>
        </div>
      </Layout.Header>
    </>
  )
}
