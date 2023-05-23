import { FC } from 'react'
import { Layout, Dropdown, Space } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Logo } from '@/assets'
import { useNavigate } from 'react-router-dom'
export const HeaderComponent: FC = () => {
  const navigate = useNavigate()

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
            <Space className="hover:bg-zinc-100 duration-300 px-4 cursor-pointer">
              <img src={Avatar} />
              <span>沙琪玛~</span>
            </Space>
          </Dropdown>
        </div>
      </Layout.Header>
    </>
  )
}
