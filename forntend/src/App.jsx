import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Logos */}
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-20 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Counter Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
        <p className="text-gray-500">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-8 text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
