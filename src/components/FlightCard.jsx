import "./FlightCard.css";
import { Clock, Briefcase, Luggage, RefreshCcw, FileText } from "lucide-react";

export default function FlightCard({ flight }) {
  return (
    
      <div className="flightBox">
        <div className="topPart">
          <div className="airlineInfo">
            <div className="logoWrap">
              <img
                src={flight.logo}
                alt={flight.airlineName}
                className="airLogo"
              />
            </div>

            <div>
              <div className="airName">{flight.airlineName}</div>
              <div className="flightCode">{flight.flightNo}</div>
            </div>
          </div>

          <div className="timeSection">
            <div className="timeCol">
              <div className="mainTime">{flight.departureTime}</div>
              <div className="place">{flight.departureCity}</div>
            </div>

            <div className="midInfo">
              <div className="durationLine">
                <Clock className="smallIcon" />
                {flight.duration}
              </div>

              <div className="routeLine" />

              <div className="stopText">{flight.stopsInfo}</div>

              {flight.nearbyAirport && (
                <div className="nearAirport">{flight.nearbyAirport}</div>
              )}
            </div>

            <div className="timeCol">
              <div className="mainTime">{flight.arrivalTime}</div>
              <div className="place">{flight.arrivalCity}</div>
            </div>
          </div>
        </div>

        <div className="lineBreak" />

        <div className="priceSection">
          <label className="priceTag active">
            <input type="checkbox" />
            <span className="priceText">{flight.price1}</span>
            <span className="tagLabel yellowTag">{flight.badge1}</span>
          </label>

          <label className="priceTag">
            <input type="checkbox" />
            <span className="priceText">{flight.price2}</span>
            <span className="tagLabel blueTag">{flight.badge2}</span>
          </label>
        </div>

        <div className="lineBreak" />

        <div className="extraInfo">
          <div className="infoItem">
            <Briefcase className="smallIcon" />
            <span>{flight.features.handBaggage}</span>
          </div>

          <div className="infoItem">
            <Luggage className="smallIcon" />
            <span>{flight.features.checkInBaggage}</span>
          </div>

          <div className="infoItem">
            <RefreshCcw className="smallIcon" />
            <span>{flight.features.refund}</span>
          </div>

          <div className="infoItem">
            <FileText className="smallIcon" />
            <span>{flight.features.rules}</span>
          </div>
        </div>
      </div>
  );
}
