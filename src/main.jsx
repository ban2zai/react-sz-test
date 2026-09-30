import React, { useState } from "react"
import { createRoot } from "react-dom/client"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>React работает в 1С</h1>
      <button onClick={() => setCount(count + 1)}>Нажато: {count}</button>
    </main>
  )
}

createRoot(document.getElementById("root")).render(<App />)
