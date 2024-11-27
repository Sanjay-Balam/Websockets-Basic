import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function sendMessage() {
    socket?.send(inputRef.current?.value ?? '')
    inputRef.current!.value = ''
  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws)
    ws.onmessage = (e) => {
      alert(e.data)
    }

  }, [] )

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Type Message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
