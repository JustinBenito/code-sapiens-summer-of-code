import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border-b-2 border-gray-400 border-opacity-30 flex mx-auto justify-center w-full border-dashed m-0 p-0'>
    <Nav />
    </div>
  )
}

export default App
