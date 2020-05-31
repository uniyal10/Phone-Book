import React, { useEffect, useState, useContext } from "react"
import Details from "./Details"
import EditForm from "./EditForm"
import ExampleComponent from "../Main"
import StateContext from "../StateContext"

function Contact(props) {
  const [downIcon, setDownIcon] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const appState = useContext(StateContext)
  const [isDelete, setDelete] = useState(false)

  function handleClick(e) {
    console.log(toggle)
    setDownIcon(prev => !prev)
    setToggle(prev => !prev)
  }
  useEffect(() => {}, downIcon)

  return (
    !isDelete && (
      <>
        {appState.editState.id == props.listItem._id ? (
          <>
            <div>
              <div onClick={handleClick} id={props.listItem._id} className="list-group-item list-group-item-action d-flex justify-content-between">
                <span className="text-muted large contactName">{appState.editState.name}</span>
                <a>
                  <i style={Styletoggle} className={"fas fa-sort-" + (downIcon ? "down" : "up")}></i>
                </a>
              </div>
            </div>
            {toggle && <Details setDelete={setDelete} setEdit={setEdit} contactDetails={appState.editState} />}
          </>
        ) : (
          <>
            <div>
              <div onClick={handleClick} id={props.listItem._id} className="list-group-item list-group-item-action d-flex justify-content-between">
                <span className="text-muted large contactName">{props.listItem.name}</span>
                <a>
                  <i style={Styletoggle} className={"fas fa-sort-" + (downIcon ? "down" : "up")}></i>
                </a>
              </div>
            </div>
            {toggle && <Details setDelete={setDelete} setEdit={setEdit} contactDetails={props.listItem} />}
            {/* {isEdit && <EditForm setEdit={setEdit} />} */}
          </>
        )}
      </>
    )
  )
}

const Styletoggle = {
  fontSize: "30px",
  marginTop: "0px"
}

export default Contact
