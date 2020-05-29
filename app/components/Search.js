import React, { useEffect, useState } from "react"
import Axios from "axios"

function Search() {
  return (
    <div style={InputStyle}>
      <input style={InputField} placeholder="Search.." type="text" autoFocus />
    </div>
  )
}

const InputStyle = {
  textAlign: "center"
}

const InputField = {
  margin: "10px",
  padding: "10px"
}
export default Search
