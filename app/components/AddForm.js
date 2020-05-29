import React, { useEffect, useState } from "react"

function AddForm(props) {
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()

  function handleClick() {
    props.setAdd(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(date)
    console.log(number)
  }

  return (
    <div className="addFormStyleModel">
      <div className="addFormStyle">
        <span onClick={handleClick} style={cross}>
          <i class="fas fa-times"></i>
        </span>
        <form onSubmit={handleSubmit} action="#">
          <div className="addFormInput">
            <label htmlFor="name">Name</label>
            <br />
            <input onChange={e => setName(e.target.value)} type="text" />
          </div>

          <div className="addFormInput">
            <label htmlFor="date">Date</label>
            <br />
            <input onChange={e => setDate(e.target.value)} type="date" />
          </div>

          <div className="addFormInput">
            <label htmlFor="number">Number</label>
            <br />
            <input onChange={e => setNumber(e.target.value)} type="number" />
          </div>
          <div className="addFormInput">
            <label htmlFor="email">Email</label>
            <br />
            <input onChange={e => setEmail(e.target.value)} type="email" />
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
export default AddForm
