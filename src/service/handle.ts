import { message as AntMessage } from 'antd'
import { IAxiosInstanceProps } from './types'

type Options = Required<Pick<IAxiosInstanceProps, 'codeList' | 'maps'>>

/* ### 业务请求错误处理 ### */
export const dealBusinessError = (response: any = {}, { codeList, maps }: Options) => {
  if (!response[maps.code]) return
  const type = Object.prototype.toString.call(codeList?.[response?.[maps?.code]])
  if (type === '[object Function]') {
    codeList[response[maps.code]]()
  } else {
    AntMessage.error(response?.[maps?.msg] || 'server error')
  }
}

/* ### 网络请求错误处理 ### */
export const dealNetworkError = (response: any = {}, { codeList = {}, maps }: Options) => {
  const type = Object.prototype.toString.call(codeList?.[response?.status])
  if (type === '[object Function]') {
    codeList[response.status]()
  } else {
    AntMessage.error(response?.data?.[maps?.msg] || 'network error')
  }
}
