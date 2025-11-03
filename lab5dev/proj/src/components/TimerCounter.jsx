import { useEffect, useState } from 'react'

const TimerCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter < 10) {
      const timer = setTimeout(() => {
        setCounter(counter + 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [counter])

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <div className="timer-container">
      <div className="timer-display">{counter}</div>
      <div className="timer-status">
        {counter < 10 ? 'Licznik działa...' : 'Licznik zatrzymany na 10!'}
      </div>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset licznika
      </button>
    </div>
  )
}

export default TimerCounter
