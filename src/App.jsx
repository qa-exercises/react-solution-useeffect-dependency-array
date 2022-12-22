import './style.css'
import React, { useState, useEffect } from 'react'
import addConfetti from './addConfetti.js'

/*

💪 Exercise: useEffect dependency array

Here we have a counter app with a little more pizazz. 

Every time the counter goes up, confetti should spray on the screen displaying the new counter value. Except it's not working quite right at the moment...

🎯 Your task:
- Notice the useEffect call in the body of the App component.
- Update the dependency array so that the effect runs every time the value of "count" changes.

*/

export default function App() {
  const [count, setCount] = useState(0)
  const [isConfettiEnabled, setIsConfettiEnabled] = useState(true)

  useEffect(() => {
    // This should run whenever "count" changes.
    if (isConfettiEnabled) {
      addConfetti({ text: count.toString() })
    }
  }, [count])

  return (
    <main>
      <h1>🎊 Confetti Counter</h1>

      <button onClick={() => setIsConfettiEnabled((prev) => !prev)}>
        Confetti: {isConfettiEnabled ? 'on' : 'off'}
      </button>

      <h2>{count}</h2>

      <button onClick={() => setCount((previous) => previous + 1)}>+1</button>
    </main>
  )
}
