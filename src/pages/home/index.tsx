import { useEffect, useState } from 'react'
import reactLogo from '@/assets/react.svg'
import './index.css'
import { Button } from 'antd'
import '@/service/index'
import { getDogApi } from '@/api'
export const HomePage = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    getDogApi({ a: 1, b: 2 }).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <>
      <div className="flex justify-center">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {Array.from({ length: 1000 }).map((item, index) => (
        <p key={index} className="read-the-docs">
          Click on the Vite and React logos to learn
        </p>
      ))}
    </>
  )
}
