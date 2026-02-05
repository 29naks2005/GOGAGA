import "./navbar.css";
import { Menu, LayoutGrid, Filter, Bell, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <div className="navbar-main">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <span className="logo-go">go</span>
                    <span className="logo-gaga">g</span>
                    <span className="logo-go">a</span>
                    <span className="logo-gaga">g</span>
                    <span className="logo-go">a</span>
                </div>

                <div className="navbar-menu">
                    <Menu size={18} />
                </div>
            </div>

            <div className="navbar-center"></div>

            <div className="navbar-right">
                <div className="navbar-icons">
                    <div className="navbar-icon-box">
                        <LayoutGrid size={18} />
                    </div>

                    <div className="navbar-icon-box icon1 navbar-icon-badge">
                        <Filter size={18} />
                        <span className="navbar-badge green-badge">526</span>
                    </div>

                    <div className="navbar-icon-box icon2 navbar-icon-badge">
                        <Bell size={18} />
                        <span className="navbar-badge blue-badge">1</span>
                    </div>

                    <div className="navbar-icon-box icon3 navbar-icon-badge">
                        <Mail size={18} />
                        <span className="navbar-badge red-badge">15</span>
                    </div>
                </div>

                <div className="navbar-profile">
                    <img
                        src="https://i.pravatar.cc/40?img=3"
                        alt="profile"
                        className="navbar-profile-img"
                    />

                    <div className="navbar-profile-name">
                        Nakul Sharma<span className="navbar-down-arrow">▼</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
