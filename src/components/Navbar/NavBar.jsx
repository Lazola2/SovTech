import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="logo px-2 px-md-3 ms-3">
            S<span class="text-white">.</span>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list toggle-btn"></i>
          {/* <span class="navbar-toggler-icon toggle-btn"></span>  */}
        </button>
        <div class="collapse navbar-collapse navigation" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex justify-content-between">
            <li class="py-2">
              <a href="#home-page">Home</a>
            </li>
            <li class="py-2">
              <a href="#about-section">About</a>
            </li>
            <li class="py-2">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
