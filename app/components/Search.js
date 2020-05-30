import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function Search() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function handleChange(e) {
    appDispatch({ type: "filterData", value: e.target.value })
  }
  return (
    <div style={InputStyle}>
      <input onChange={handleChange} style={InputField} placeholder="Search.." type="text" autoFocus />
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
