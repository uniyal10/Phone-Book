import React, { useEffect } from "react"

function EditForm(props) {
  function handleClick() {
    props.setEdit(prev => !prev)
  }
  return (
    <div className="addFormStyleModel">
      <div className="addFormStyle">
        <span onClick={handleClick} style={cross}>
          <i class="fas fa-times"></i>
        </span>
        <form action="#">
          <div className="addFormInput">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" />
          </div>

          <div className="addFormInput">
            <label htmlFor="date">Date</label>
            <br />
            <input type="date" />
          </div>

          <div className="addFormInput">
            <label htmlFor="number">Number</label>
            <br />
            <input type="number" />
          </div>
          <div className="addFormInput">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" />
          </div>
          <button className="btnStyle">Save</button>
        </form>
      </div>
    </div>
  )
}
const cross = {
  position: "relative",
  left: "95%",
  color: "red",
  fontSize: "20px"
}
export default EditForm
