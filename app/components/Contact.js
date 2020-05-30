import React, { useEffect, useState } from "react"

function Contact(props) {
  const [downIcon, setDownIcon] = useState(true)
  function handleClick() {
    setDownIcon(prev => !prev)
    props.setToggle(prev => !prev)
  }
  useEffect(() => {}, downIcon)
  return (
    <div onClick={handleClick} className="list-group-item list-group-item-action d-flex justify-content-between">
      <span className="text-muted large contactName">Sudhanshu Uniyal</span>
      <a>
        <i style={Styletoggle} className={"fas fa-sort-" + (downIcon ? "down" : "up")}></i>
      </a>
    </div>
  )
}

const Styletoggle = {
  fontSize: "30px",
  marginTop: "0px"
}

export default Contact
