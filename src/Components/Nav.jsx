import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ resetPage, onClick, handleSubmit, handleChange, value }) {
  return (
    <nav>
      <h1 className="logo">NETFLIX</h1>
      <ul>
        <div className="links">
          <li>
            <NavLink to="/" onClick={resetPage}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
        <div className="formdiv">
          <li>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={value}
                placeholder="Search"
                onChange={handleChange}
              />
              <button id="search" onClick={onClick}>
                Search
              </button>
            </form>
          </li>
        </div>
      </ul>
    </nav>
  );
}
