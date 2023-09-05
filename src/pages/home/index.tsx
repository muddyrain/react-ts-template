import { getDogApi } from '@/api'
import './index.css'
import { useEffect } from 'react'
export const HomePage = () => {
  useEffect(() => {
    getDogApi()
  }, [])
  return (
    <>
      <span>欢迎回来</span>
    </>
  )
}
