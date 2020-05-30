import React, { useEffect } from "react"

function Add(props) {
  function handleClick() {
    console.log("clicked")
    props.setAdd(prev => !prev)
  }
  return (
    <>
      <a onClick={handleClick} className="AddComponentStyle">
        <i class="fas fa-plus-circle"></i>
      </a>
    </>
  )
}

export default Add
