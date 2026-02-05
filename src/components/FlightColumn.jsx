import "./FlightColumn.css";
import FlightCard from "./FlightCard";

export default function FlightColumn({ flights }) {
  return (
    <div className="flightColumnBox">

    <div className="nakul" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <div className="flightColumnHeader">
        <div className="columnLeftText">Outbound: Hyderabad(HYD)</div>

        <div className="columnRightLabels">
          <span className="labelText">Departure</span>
          <span className="labelText">Duration</span>
          <span className="labelText">Arrival</span>
        </div>
      </div>
      <div className="flightColumnHeader">
        <div className="columnLeftText">Outbound: Hyderabad(HYD)</div>

        <div className="columnRightLabels">
          <span className="labelText">Departure</span>
          <span className="labelText">Duration</span>
          <span className="labelText">Arrival</span>
        </div>
      </div>
      </div>

      <div className="flightListWrap">
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </div>
  );
}
