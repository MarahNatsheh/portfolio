import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";
import "../App.css";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isSidebarVisible ? "header-show" : ""
      }`}
    >
      <i
        className="header-toggle d-xl-none bi bi-list"
        onClick={toggleSidebar}
      ></i>

      <div className="profile-img">
        <img src={profile2} alt="" className="img-fluid rounded-circle" />
      </div>

      <div
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Marah Natsheh</h1>
      </div>

      <div className="social-links text-center">
        <a
          href="https://github.com/MarahNatsheh"
          className="github"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marah-n-0a807230b"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=marah.z.natsheh%40gmail.com"
          className="gmail"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/marah_natsheh"
          className="insta"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#home" className="active">
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="bi bi-code navicon"></i> Skills
            </a>
          </li>
          <li className={`dropdown ${dropdownOpen ? "show" : ""}`}>
            <a
              href="#resume"
              className="dropdown-link"
            >
              <i className="bi bi-file-earmark-text navicon"></i> <span>Resume</span> <i class="bi bi-chevron-down toggle-dropdown"  onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}></i>
            </a>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <a href="#projects">Projects</a>
              </li>
           
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
