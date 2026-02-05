import "./Sidebar.css";
import {
  LayoutDashboard,
  User,
  MapPinned,
  Star,
  Ticket,
  Wallet,
  BarChart2,
  Headphones,
  Settings,
  SlidersHorizontal,
  Users,
  Briefcase,
  Boxes,
  UserCheck,
  Handshake,
  Truck,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sideNav">
      <div className="menuGroup">
        <p className="menuTitle">MENU</p>

        <div id="menuLink0" className="menuItem">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </div>

        <div id="menuLink1" className="menuItem hasDropdown">
          <User size={18} />
          <span>Leads</span>
          <ChevronDown size={15} className="dropdownArrow" />
        </div>

        <div id="menuLink2" className="subMenuItem">
          <User size={16} />
          <span>Leads</span>
          <span className="countTag">30434</span>
        </div>

        <div className="menuItem">
          <MapPinned size={18} />
          <span>Itineraries</span>
          <ChevronDown size={15} className="dropdownArrow" />
        </div>

        <div className="menuItem">
          <Star size={18} />
          <span>Google Reviews</span>
        </div>

        <div className="menuItem">
          <Ticket size={18} />
          <span>Vouchers</span>
          <ChevronDown size={15} className="dropdownArrow" />
        </div>

        <div className="menuItem">
          <Wallet size={18} />
          <span>Accounts</span>
          <ChevronDown size={15} className="dropdownArrow" />
        </div>

        <div className="menuItem">
          <BarChart2 size={18} />
          <span>Reports</span>
        </div>

        <div className="menuItem">
          <Headphones size={18} />
          <span>Customer Support</span>
        </div>
      </div>

      <div className="menuGroup">
        <p className="menuTitle">USER CONTROL</p>

        <div className="menuItem">
          <Settings size={18} />
          <span>User Settings</span>
        </div>

        <div className="menuItem">
          <SlidersHorizontal size={18} />
          <span>Masters Settings</span>
        </div>

        <div className="menuItem">
          <Briefcase size={18} />
          <span>HRM</span>
        </div>

        <div className="menuItem">
          <Boxes size={18} />
          <span>Assets Management</span>
        </div>
      </div>

      <div className="menuGroup">
        <p className="menuTitle">PARTICIPANTS</p>

        <div className="menuItem">
          <UserCheck size={18} />
          <span>Itinerary Customers</span>
        </div>

        <div className="menuItem">
          <Handshake size={18} />
          <span>Partners</span>
        </div>

        <div className="menuItem">
          <Truck size={18} />
          <span>Suppliers</span>
        </div>
      </div>
    </div>
  );
}
