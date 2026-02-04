import React from 'react'
import FlightCard from './components/FlightCard.jsx'
import { flightsData } from './utlis/flightData.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="flights-container">
      {flightsData.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
    
    </div>
  )
}

export default App
