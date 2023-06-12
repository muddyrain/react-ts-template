import './index.css'
import '@/service/index'
import { Former } from '@/components'
import { useEffect } from 'react'
import { getDogApi } from '@/api'
export const HomePage = () => {
  const [$form] = Former.useForm()
  useEffect(() => {
    getDogApi()
  }, [])
  return (
    <>
      <Former
        form={$form}
        onSubmit={values => {
          console.log(values)
        }}
        dataSource={[
          {
            label: '姓名',
            key: 'name',
            view: 'Input',
          },
        ]}
      />
    </>
  )
}
