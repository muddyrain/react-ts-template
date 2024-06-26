import { Button, Result } from 'antd'
import { FC } from 'react'
import backgroundImage from '@/assets/background.jpg'
import { useNavigate } from 'react-router-dom'
export const NotFound404: FC = () => {
  const navigate = useNavigate()
  return (
    <div
      className={`w-screen h-screen bg-red-200`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: `100% 100%`,
      }}
    >
      <Result
        status="404"
        title="404"
        className="translate-y-20"
        subTitle="抱歉，您访问的页面不存在。"
        extra={
          <div>
            <Button
              type="primary"
              htmlType="button"
              onClick={() => {
                navigate('/')
              }}
            >
              回到首页
            </Button>
          </div>
        }
      />
    </div>
  )
}
