import React from 'react'
import FlightCard from './components/FlightCard.jsx'
import { flightsData } from './utlis/flightData.jsx'
import './App.css'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="flights-container">
      {flightsData.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  
    
    </div>
  )
}

export default App
