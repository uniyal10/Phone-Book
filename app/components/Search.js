import React, { useEffect, useState } from "react"
import Axios from "axios"

function Search() {
  return (
    <>
      <div className="container">
        {}
        <h2>Live Search:ReactApplication</h2>
        {}
        <label className="search-label" htmlFor="search-input">
          <input onChange={handleChange} name="query" type="text" value={query} id="search-input" placeholder="search..." />
          <i className="fa fa-search" arria-hidden="true" />
        </label>
      </div>
    </>
  )
}

export default Search
