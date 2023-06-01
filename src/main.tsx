import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/plugins'
import { App } from './App'
import setupLocatorUI from '@locator/runtime'

// 开发环境 安装加载 locatorUI
if (process.env.NODE_ENV === 'development') {
  setupLocatorUI()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
