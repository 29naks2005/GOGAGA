import { flightsData } from './utils/FlightData.jsx'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import HolidaySearchBar from './components/Searchbar.jsx'
import FlightFareCard from './components/FlightFareCard.jsx'
import FlightColumn from './components/FlightColumn.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="flights-container">
          <HolidaySearchBar />
          <FlightFareCard />
          <div className="flights">
            <FlightColumn flights={flightsData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
