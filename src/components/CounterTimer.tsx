import React from 'react'
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "../_dist/CounterTimer.css"

const CounterTimer = () => {
  return (
    <div className='counter-container'>
       <FlipClockCountdown
      to={new Date(2026, 6, 30, 17, 30, 0)}
      labels={["Jours", "Heures", "Minutes", "Secondes"]}
      
    />
    </div>
  )
}

export default CounterTimer
