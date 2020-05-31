import React, { useEffect, useContext, useRef } from "react"
import Number from "./Number"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Axios from "axios"

function Details(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function handleEdit() {
    appDispatch({ type: "edit", value: true })
    appDispatch({ type: "editState", value: { id: props.contactDetails._id, name: props.contactDetails.name, date: props.contactDetails.date, number: props.contactDetails.number, email: props.contactDetails.email } })
  }
  async function handleDelete(e) {
    try {
      const response = await Axios.post("http://localhost:8080/delete", { id: props.contactDetails._id })
      if (response) {
        props.setDelete(true)
        console.log("sucessfully deleted")
      }
    } catch (e) {
      console.log("something wrong")
    }
  }
  return (
    <div style={contactDiv}>
      <div className="d-flex justify-content-between mt-2">
        <p>{props.contactDetails.date}</p>
        <span className="pt-2">
          <a onClick={handleEdit} href="#" className=" text-primary mr-2">
            <i className="fas fa-edit"></i>
          </a>{" "}
          <a onClick={handleDelete} className="delete-post-button text-danger">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>
      <Number numberDetails={props.contactDetails} />
    </div>
  )
}

const contactDiv = {
  width: "95%",
  margin: "auto"
}
export default Details
