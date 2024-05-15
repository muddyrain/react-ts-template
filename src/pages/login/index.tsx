import { FC } from 'react'
import { useSetState } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/useUserStore'
import { Button, Form, Input } from 'antd'
import bg from './bg.png'
export const LoginPage: FC = () => {
  const navigate = useNavigate()
  const [state, setState] = useSetState({
    username: 'admin',
    password: '123456',
    passwordType: 0,
    loading: false,
  })
  const [setAccountInfo] = useUserStore(state => [state.setAccountInfo])
  const handleLogin = () => {
    setState({
      loading: true,
    })
    setTimeout(() => {
      const { username, password } = state
      setAccountInfo({
        username,
        password,
        token: 'token',
      })
      setState({
        loading: false,
      })
      navigate('/')
    }, 1000)
  }
  return (
    <div
      className={`w-screen h-screen`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="absolute top-[50%] shadow left-[200px] translate-y-[-50%] m-auto bg-white w-[420px] h-[360px] duration-300 overflow-hidden rounded-lg flex">
        <div className="relative w-full h-full z-1 flex flex-col justify-center items-center p-8">
          <div className="text-center">
            <div className="inline-block text-3xl text-blue-600 font-bold relative">
              <span className="z-[1] relative">登录</span>
              <span className="line bottom-[-5%] z-0 left-[-10%] absolute w-[120%] h-2 bg-blue-100"></span>
            </div>
          </div>
          <Form
            className="w-full my-6"
            onFinish={() => {
              handleLogin()
            }}
          >
            <Form.Item>
              <Input
                placeholder="请输入账号"
                value={state.username}
                className={'p-2'}
                type={'username'}
                onChange={e => {
                  setState({
                    username: e.target.value,
                  })
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                placeholder="请输入密码"
                className={'p-2'}
                value={state.password}
                onChange={e => {
                  setState({
                    password: e.target.value,
                  })
                }}
              />
            </Form.Item>
            <div className="flex justify-center">
              <Button block type={'primary'} className={'h-10 text-lg'} htmlType={'submit'}>
                登录
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
