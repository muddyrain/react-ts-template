import './index.css'
import '@/service/index'
import { Former } from '@/components'
export const HomePage = () => {
  const [$form] = Former.useForm()
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
