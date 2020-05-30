import React, { useEffect, useState } from "react"

function Contact(props) {
  const [downIcon, setDownIcon] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setToggle(prev => !prev)
  }, count)

  function handleClick() {
    console.log(count)
    setCount(prev => prev + 1)
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
