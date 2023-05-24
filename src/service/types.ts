/**
 * 自定义 axios 创造器类型
 */
export interface IAxiosInstanceProps {
  baseURL: string
  whiteList?: string[]
  codeList?: Record<number | string, () => void>
  maps: { code: string; data: string; msg: string }
  Alert: (options: { content: string; type: string }) => void
}
