import "./FlightFareCard.css";

export default function FlightFareCard() {
  return (
    <div className="fareCard">
      <div className="fareTopInputs">
        <div className="fareInputBox">
          <div className="fareInputLabel">From</div>
          <div className="fareInputValue">
            Rajiv Gandhi International Airport (HYD), Hyderabad, India
          </div>
        </div>

        <div className="fareInputBox fareSmallBox">
          <div className="fareInputLabel">Departure Date</div>
          <div className="fareInputValue">Tue, Mar 12, 2025</div>
        </div>

        <div className="swapBtnBox">
          <div className="swapBtn">⇄</div>
        </div>

        <div className="fareInputBox">
          <div className="fareInputLabel">To</div>
          <div className="fareInputValue">
            Mopa Airport India (GOX), Goa, India
          </div>
        </div>

        <div className="fareInputBox fareSmallBox">
          <div className="fareInputLabel">Return Date</div>
          <div className="fareInputValue">Sun, Mar 17, 2025</div>
        </div>
      </div>

      <div className="fareBlueBox">
        <div className="fareSection">
          <div className="fareTitle">Departure · Air India</div>
          <div className="fareTimeRow">
            <span className="fareTime">11:30</span>
            <span className="fareArrow">→</span>
            <span className="fareTime">18:55</span>
          </div>
        </div>

        <div className="farePrice">₹105,300.00</div>

        <div className="fareDivider"></div>

        <div className="fareSection">
          <div className="fareTitle">Return · Air India</div>
          <div className="fareTimeRow">
            <span className="fareTime">00:50</span>
            <span className="fareArrow">→</span>
            <span className="fareTime">01:55</span>
          </div>
        </div>

        <div className="farePrice">₹105,300.00</div>

        <div className="fareDivider"></div>

        <div className="fareTotalBox">
          <div className="farePassengerText">for 2 adult, 2 children</div>

          <div className="fareTotalRow">
            <span className="fareTotalLabel">Total Round fare</span>
            <span className="fareTotalPrice">₹210,600.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
