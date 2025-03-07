import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='bg-black text-white flex mx-[3%] lg:justify-center relative lg:mx-[5%] '>
        <Section1/>
        <Section2/>
        <Section3/>
      </body>
    </>
  )
}

export default App
