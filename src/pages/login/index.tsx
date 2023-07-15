import { FC } from 'react'
import styles from './index.module.less'
import images from './images'
import { useSetState, useLocalStorageState } from 'ahooks'
import { EyeInvisibleOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons'
import { AccountInfoType } from '@/constant/types'
export const LoginPage: FC = () => {
  const [state, setState] = useSetState({
    username: 'admin',
    password: '123456',
    passwordType: 0,
    loading: false,
  })
  const [accountInfo, setAccountInfo] = useLocalStorageState<AccountInfoType>('accountInfo', {})
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
      console.log(accountInfo)
      setState({
        loading: false,
      })
      window.location.href = '/'
    }, 1000)
  }
  return (
    <div className={styles.container}>
      <img className="absolute right-0 top-0 w-[8%] h-[15%]" src={images.RightTopImage} />
      <img className="absolute left-0 top-[15%] w-[5%] h-[20%]" src={images.LeftCenterTopImage} />
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto 2xl:w-[1380px] 2xl:h-[750px]  xl:w-[1180px] xl:h-[650px]  md:w-[960px] md:h-[520px] duration-300 overflow-hidden rounded-lg flex">
        <div className={`${styles.leftBox} w-1/2 relative p-16`}>
          <img
            src={images.ContentImage}
            className="absolute bottom-[5%] w-[80%] h-[60%] left-[10%]"
            alt=""
          />
          <div className="relative z-1 w-[75%]">
            <div className="line bg-white w-14 h-2"></div>
            <div className="text-white mt-6 2xl:text-5xl xl:text-4xl md:text-3xl">专业数据分析</div>
            <div className="text-white mt-6 xl:text-base md:text-sm tracking-widest">
              数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。
            </div>
          </div>
        </div>
        <div className={`w-1/2 bg-white relative p-24 ${styles.rightBox}`}>
          <img className="absolute top-0 left-0 h-[6%] w-[25%]" src={images.LoginTopImage} alt="" />
          <img
            className="absolute bottom-0 left-0 w-full h-[25%]"
            src={images.LoginBottomImage}
            alt=""
          />
          <div className="relative z-1">
            <div className="text-center">
              <div className="inline-block text-3xl text-blue-600 font-bold relative">
                <span className="z-[1] relative">登录</span>
                <span className="line bottom-[-5%] z-0 left-[-10%] absolute w-[120%] h-2 bg-blue-100"></span>
              </div>
            </div>
            <div className="login xl:mt-20 md:mt-10">
              <div className={`${styles.input_box}`}>
                <img src={images.UserImage} alt="" className={`${styles.icon}`} />
                <input
                  className="p-5 rounded-2xl text-lg border-zinc-200 w-full placeholder:text-lg placeholder:tracking-widest"
                  type="text"
                  value={state.username}
                  onChange={e => {
                    setState({
                      username: e.target.value,
                    })
                  }}
                  placeholder="请输入账号"
                />
              </div>
              <div className={`${styles.input_box}`}>
                <img src={images.PasswordImage} alt="" className={`${styles.icon}`} />
                <input
                  className="p-5 rounded-2xl  text-lg border-zinc-200 w-full placeholder:text-lg placeholder:tracking-widest"
                  type={state.passwordType === 0 ? 'password' : 'text'}
                  value={state.password}
                  onChange={e => {
                    setState({
                      password: e.target.value,
                    })
                  }}
                  placeholder="请输入密码"
                />
                <div
                  className="absolute right-[5%] top-[50%] translate-y-[-40%] cursor-pointer"
                  onClick={() => {
                    setState({
                      passwordType: state.passwordType === 0 ? 1 : 0,
                    })
                  }}
                >
                  {state.passwordType === 0 ? (
                    <EyeInvisibleOutlined className="text-3xl text-zinc-300 hover:text-zinc-400 duration-300" />
                  ) : (
                    <EyeOutlined className="text-3xl text-zinc-300 hover:text-zinc-400 duration-300" />
                  )}
                </div>
              </div>
              <div
                className={`bg-blue-600 xl:mt-16 md:8 rounded-[37px] duration-300 py-6 text-center text-white cursor-pointer hover:bg-blue-400`}
                onClick={handleLogin}
              >
                {state.loading && <LoadingOutlined />}
                <span className="ml-2">登录</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute left-0 bottom-0 w-[100%] h-[25%]" src={images.BottomImage} />
    </div>
  )
}
