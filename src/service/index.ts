import { REQUEST_URL } from '@/constant'
import { CreateAxiosInstance } from './createAxiosInstance'
import whiteList from './whiteList'
import codeList from './codeList'

const axiosInstance = new CreateAxiosInstance({
  baseURL: REQUEST_URL,
  whiteList,
  codeList,
  maps: { code: 'code', data: 'data', msg: 'message' },
})

export const fetch = axiosInstance.fetch
