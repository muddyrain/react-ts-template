import { REQUEST_URL } from '@/constant'
import { CreateAxiosInstance } from './createAxiosInstance'
import whiteList from './whiteList'
import codeList from './codeList'
import { message } from 'antd'

const axiosInstance = new CreateAxiosInstance({
  baseURL: REQUEST_URL,
  whiteList,
  codeList,
  maps: { code: 'code', data: 'data', msg: 'message' },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Alert: ({ content, type }) => (message as any)?.[type](content),
})

export const fetch = axiosInstance.fetch
