import React, { useEffect } from "react"
import Number from "./Number"
function Details() {
  return (
    <div style={contactDiv}>
      <div className="d-flex justify-content-between mt-2">
        <p>23/01/1990</p>
        <span className="pt-2">
          <a href="#" className=" text-primary mr-2">
            <i className="fas fa-edit"></i>
          </a>{" "}
          <a className="delete-post-button text-danger">
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
