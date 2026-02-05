import "./Searchbar.css";
import { ChevronDown, Search } from "lucide-react";

export default function HolidaySearchBar() {
  return (
    <div className="holidayBox">
      <div className="holidayTabs">
        <button className="holidayTab activeTab">Indian Holidays</button>
        <button className="holidayTab">International Holidays</button>
      </div>

      <div className="packageTabs">
        <span className="packageTab activePackage">Package with Flights</span>
        <span className="packageTab">Package without Flights</span>
      </div>

      <div className="inputRow">
        <div className="fieldBox wideField">
          <p className="fieldLabel">Destination</p>
          <p className="fieldValue">City</p>
        </div>

        <div className="fieldBox smallField">
          <p className="fieldLabel">Trip start date</p>
          <p className="fieldValue boldText">Tue, Mar 12</p>
        </div>

        <div className="fieldBox mediumField">
          <p className="fieldLabel">No.of Passengers</p>
          <div className="passengerLine">
            <p className="fieldValue boldText">2 Adults, 2 Children</p>
            <ChevronDown size={18} className="downIcon" />
          </div>
        </div>

        <button className="searchBtn">
          <Search size={22} />
        </button>
      </div>

      <div className="optionsRow">
        <div className="hotelRow">
          <p className="hotelText">Hotel Standard</p>

          <button className="starBtn">3☆</button>
          <button className="starBtn">4☆</button>
          <button className="starBtn activeStar">5☆</button>
        </div>

        <div className="mealRow">
          <label className="mealOption">
            <span>Add Lunch</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="mealOption">
            <span>Add Dinner</span>
            <input type="checkbox" />
          </label>

          <span className="infoIcon">ⓘ</span>
        </div>
      </div>
    </div>
  );
}
