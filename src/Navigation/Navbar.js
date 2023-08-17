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
        <a href="https://www.google.com/">
          <FiHeart />
        </a>
        <a href="https://www.google.com/">
          <AiOutlineShoppingCart />
        </a>
        <a href="https://www.google.com/">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
