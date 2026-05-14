import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <p className="text-3xl font-semibold text-sky-400 underline">
        Tailwind is working!
      </p>
    </div>
    </>
  )
}

export default App
