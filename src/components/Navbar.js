import React,{useState} from "react";
import userIcon from "../assets/user.jpg";
import Hamburger from 'hamburger-react'

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar">
       <button
        className="hamburger"
        
      >
       <Hamburger toggled={isNavExpanded} toggle={setIsNavExpanded} />
      </button>
      <ul className={`nav-links ${isNavExpanded ? "nav-expanded" : ""}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="/transactions" className="nav-link">
            Transactions
          </a>
        </li>
        <li className="nav-item">
          <a href="/journal" className="nav-link">
            Journal
          </a>
        </li>
      </ul>
      <div className="nav-user">
        <img src={userIcon} alt="User" className="user-icon" />
        <span className="user-name">Joseph Lazar</span>
      </div>
    </nav>
  );
}

export default Navbar;
