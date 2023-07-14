import { IAxiosInstanceProps } from './types'

export default {
  401: () => {
    window.sessionStorage.removeItem('accountInfo')
    window.location.href = '/login'
  },
  403: () => {
    window.sessionStorage.removeItem('accountInfo')
    window.location.href = '/login'
  },
  500: () => {
    console.log('报 500了')
  },
} as IAxiosInstanceProps['codeList']
