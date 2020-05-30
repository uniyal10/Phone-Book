import React, { useEffect, useState } from "react"
import Details from "./Details"
import EditForm from "./EditForm"
import ExampleComponent from "../Main"

function Contact(props) {
  const [downIcon, setDownIcon] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [isEdit, setEdit] = useState(false)
  function handleClick(e) {
    console.log(toggle)
    setDownIcon(prev => !prev)
    setToggle(prev => !prev)
  }
  useEffect(() => {}, downIcon)
  return (
    <>
      <div>
        <div onClick={handleClick} id={props.listItem._id} className="list-group-item list-group-item-action d-flex justify-content-between">
          <span className="text-muted large contactName">Sudhanshu Uniyal</span>
          <a>
            <i style={Styletoggle} className={"fas fa-sort-" + (downIcon ? "down" : "up")}></i>
          </a>
        </div>
      </div>
      {toggle && <Details setEdit={setEdit} />}
      {isEdit && <EditForm setEdit={setEdit} />}
    </>
  )
}

const Styletoggle = {
  fontSize: "30px",
  marginTop: "0px"
}

export default Contact
