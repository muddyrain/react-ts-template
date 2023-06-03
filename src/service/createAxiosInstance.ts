import axios, { AxiosInstance } from 'axios'
import { dealBusinessError, dealNetworkError } from './handle'
import { IAxiosInstanceProps } from './types'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

export class CreateAxiosInstance {
  private whiteList: IAxiosInstanceProps['whiteList'] = []
  private codeList: IAxiosInstanceProps['codeList'] = {}
  private maps: IAxiosInstanceProps['maps']
  public fetch: AxiosInstance
  constructor({
    baseURL,
    whiteList = [],
    codeList = {},
    maps,
    Alert = () => null,
  }: IAxiosInstanceProps) {
    this.whiteList = whiteList
    this.codeList = codeList
    this.maps = maps
    this.fetch = axios.create({
      baseURL,
      timeout: 10000,
    })
    this.fetch.interceptors.request.use(
      config => {
        NProgress.start()
        const accountJSON = window.sessionStorage.getItem('accountInfo')
        const accountInfo = JSON.parse(accountJSON || '{}')
        if (accountInfo?.token) {
          config.headers['Authorization'] = accountInfo.token
        }
        const type = Object.prototype.toString.call(config.data)
        const UPMethod = config.method?.toUpperCase()
        if (type === '[object Object]' && UPMethod === 'FORMDATA') {
          const formData = new FormData()
          for (const key in config.data) {
            formData.append(key, config.data[key])
          }
          config.method = 'POST'
          config.data = formData
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    this.fetch.interceptors.response.use(
      response => {
        NProgress.done()
        const requestUrl = response.config.url || ''
        // 白名单
        const isWhite = this.whiteList?.some(item => item.includes(requestUrl))
        const result = response.data
        if (isWhite) {
          return result
        } else if (result?.[maps?.code] === 200) {
          return result?.[maps?.data] ?? {}
        } else {
          dealBusinessError(result || {}, { codeList, maps, Alert })
          Promise.reject(result)
          return false
        }
      },
      error => {
        NProgress.done()
        dealNetworkError(error?.response || {}, { codeList, maps, Alert })
        return Promise.reject(error)
      }
    )
  }
}
