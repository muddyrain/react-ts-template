import { FC } from 'react'
import { Layout, Dropdown, Space } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Logo } from '@/assets'
import { useNavigate } from 'react-router-dom'
import { useLocalStorageState } from 'ahooks'
import { AccountInfoType } from '@/constant/types'
export const HeaderComponent: FC = () => {
  const navigate = useNavigate()
  const [accountInfo] = useLocalStorageState<AccountInfoType>('accountInfo', {})
  return (
    <>
      <Layout.Header className="flex items-center justify-between bg-white">
        {/* 左侧 */}
        <div
          className="flex h-full px-4 items-center cursor-pointer duration-300 hover:bg-zinc-100"
          onClick={() => navigate('/')}
        >
          {/* Logo */}
          <img src={Logo} />
          {/* 标题 */}
          <span className="font-bold text-color text-xl ml-2">React</span>
        </div>
        {/* 右侧 */}
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
                {
                  label: '退出登录',
                  icon: <LogoutOutlined />,
                  key: 'logout',
                },
              ],
            }}
          >
            <div className="hover:bg-zinc-100 flex items-center duration-300 px-4 cursor-pointer">
              <img src={Avatar} />
              <span className="ml-1">{accountInfo?.username || '沙琪玛~'}</span>
            </div>
          </Dropdown>
        </div>
      </Layout.Header>
    </>
  )
}
