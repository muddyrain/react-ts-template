import { fetch } from '@/service'

export const getDogApi = (data: any = {}) => fetch.get('/pet/1', { params: data })
