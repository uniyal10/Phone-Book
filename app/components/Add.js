import React, { useEffect } from "react"

function Add(props) {
  function handleClick() {
    console.log("clicked")
    props.setAdd(prev => !prev)
  }
  return (
    <>
      <a onClick={handleClick} style={addStyle}>
        <i class="fas fa-plus-circle"></i>
      </a>
    </>
  )
}

const addStyle = {
  fontSize: "60px",
  position: "absolute",
  bottom: "10%",
  right: "20%"
}

export default Add
