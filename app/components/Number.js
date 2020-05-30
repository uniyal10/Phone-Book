import React, { useEffect } from "react"

function Number(props) {
  return (
    <>
      <div>
        <span className="pt-2 d-flex ml-2">
          <a href="#" className="d-flex text-primary mr-2">
            <i style={Styletoggle} className="fas fa-phone-square"></i> <p className="ml-1">{props.numberDetails.number}</p>
          </a>
          <a href="#" className="d-flex text-primary mr-2">
            <i style={Styletoggle} className="fas fa-envelope-square"></i> <p className="ml-1">{props.numberDetails.email}</p>
          </a>
        </span>
      </div>
    </>
  )
}

const Styletoggle = {
  fontSize: "30px",
  marginTop: "0px"
}

export default Number
