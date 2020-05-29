import React, { useEffect } from "react"

function Number() {
  return (
    <>
      <div>
        <span className="pt-2 d-flex ml-2">
          <a href="#" className="d-flex text-primary mr-2">
            <i style={Styletoggle} className="fas fa-phone-square"></i> <p className="ml-1">9729866770</p>
          </a>
          <a href="#" className="d-flex text-primary mr-2">
            <i style={Styletoggle} className="fas fa-envelope-square"></i> <p className="ml-1">uniyal10@gmail.com</p>
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
