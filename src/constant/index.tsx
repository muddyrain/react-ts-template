/**
 * 综合配置项:
 * 期望使用 tree-shaking 方式导出
 */

import { RoutesTypes } from './types'

export const PAGE_TITLE = 'React 项目模板'
export const ROUTE_TYPE: RoutesTypes = RoutesTypes.hash
export const REQUEST_URL = import.meta.env['VITE_BASE_URL']
