import React, { useEffect, useContext } from "react"
import Number from "./Number"
import DispatchContext from "../DispatchContext"

function Details(props) {
  const appDispatch = useContext(DispatchContext)

  function handleEdit() {
    appDispatch({ type: "edit", value: true })
  }
  function handleDelete() {
    //axios
  }
  return (
    <div style={contactDiv}>
      <div className="d-flex justify-content-between mt-2">
        <p>23/01/1990</p>
        <span className="pt-2">
          <a onClick={handleEdit} href="#" className=" text-primary mr-2">
            <i className="fas fa-edit"></i>
          </a>{" "}
          <a onClick={handleDelete} className="delete-post-button text-danger">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>
      <Number />
    </div>
  )
}

const contactDiv = {
  width: "95%",
  margin: "auto"
}
export default Details
