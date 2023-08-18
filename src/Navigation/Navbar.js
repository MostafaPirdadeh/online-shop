import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import React from "react";
import "./Nav.css";
function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile-continer">
        <a href="#" className="nav-icons">
          <FiHeart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineShoppingCart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
