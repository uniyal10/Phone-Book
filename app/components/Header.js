import React, { useState, useContext } from "react"

function Header(props) {
  function handleClick() {
    props.setSearch(prev => !prev)
  }

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <p className="my-0 mr-md-auto font-weight-normal text-white header-heading">Phone Book</p>
        <a href="#" onClick={handleClick} className="text-white mr-5 header-search-icon">
          <i className="fas fa-search icon-large"></i>
        </a>
      </div>
    </header>
  )
}

export default Header
