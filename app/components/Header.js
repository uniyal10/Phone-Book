import React, { useState, useContext } from "react"

function Header(props) {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h1 className="my-0 mr-md-auto font-weight-normal text-white">Phone Book</h1>
        <a href="#" className="text-white mr-5 header-search-icon">
          <i className="fas fa-search icon-large"></i>
        </a>
      </div>
    </header>
  )
}

export default Header
