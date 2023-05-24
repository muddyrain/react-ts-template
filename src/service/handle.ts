import { IAxiosInstanceProps } from './types'

type Options = Required<Pick<IAxiosInstanceProps, 'Alert' | 'codeList' | 'maps'>>

/* ### 业务请求错误处理 ### */
export const dealBusinessError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any = {},
  { Alert, codeList, maps }: Options
) => {
  if (!response[maps.code]) return
  const type = Object.prototype.toString.call(codeList?.[response?.[maps?.code]])
  if (type === '[object Function]') {
    codeList[response[maps.code]]()
  } else {
    dealAlert(Alert, {
      type: 'error',
      content: response?.[maps?.msg] || 'server error',
    })
  }
}

/* ### 网络请求错误处理 ### */
export const dealNetworkError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any = {},
  { codeList = {}, maps, Alert }: Options
) => {
  const type = Object.prototype.toString.call(codeList?.[response?.status])
  if (type === '[object Function]') {
    codeList[response.status]()
  } else {
    dealAlert(Alert, {
      type: 'error',
      content: response?.data?.[maps?.msg] || 'network error',
    })
  }
}

// 警告提示
const dealAlert = (
  Alert: IAxiosInstanceProps['Alert'],
  ctx: Parameters<Required<IAxiosInstanceProps>['Alert']>[0]
) => {
  const type = Object.prototype.toString.call(Alert)
  if (type === '[object Function]') {
    Alert?.(ctx)
  } else {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(ctx))
  }
}
