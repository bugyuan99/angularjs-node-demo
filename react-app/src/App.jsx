import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Error calling API'))
  }, [])

  return (
    <div className="App">
      <h1>React + Node.js Demo</h1>
      <p>API message: {message}</p>
    </div>
  )
}

export default App
