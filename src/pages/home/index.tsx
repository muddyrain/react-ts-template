import './index.css'
import { Former } from '@/components'
export const HomePage = () => {
  const [$form] = Former.useForm()
  return (
    <>
      <Former
        form={$form}
        onSubmit={(values: any) => {
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
