import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg c_navbar sticky-top main_navbar">
        <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0 navbar_links">
          <div className="nav_logo">
            <li className="nav-item">Logo</li>
          </div>
          <div className="nav_link_items">
            <li className="nav-item">Home</li>
            <li className="nav-item">Feature</li>
            <li className="nav-item">About</li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
