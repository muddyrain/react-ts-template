import { FC } from 'react'
import { useSetState } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/useUserStore'
import { Button, Form, Input } from 'antd'
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
    <div className={`w-screen h-screen`}>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto bg-white w-[960px] h-[640px] duration-300 overflow-hidden rounded-lg flex">
        <div className="relative w-full h-full z-1 flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="inline-block text-3xl text-blue-600 font-bold relative">
              <span className="z-[1] relative">登录</span>
              <span className="line bottom-[-5%] z-0 left-[-10%] absolute w-[120%] h-2 bg-blue-100"></span>
            </div>
          </div>
          <Form
            className="w-40 my-10"
            onFinish={() => {
              handleLogin()
            }}
          >
            <Form.Item>
              <Input
                placeholder="请输入账号"
                value={state.username}
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
                value={state.password}
                onChange={e => {
                  setState({
                    password: e.target.value,
                  })
                }}
              />
            </Form.Item>
            <div className="flex justify-center">
              <Button block type={'primary'} htmlType={'submit'}>
                登录
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
