import React, { useEffect, useState } from "react"
import Axios from "axios"

function AddForm(props) {
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()

  function handleClick() {
    props.setAdd(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let response = await Axios.post("http://localhost:8080/add", { name, date, number, email })
      if (response) props.setAdd(false)
    } catch (e) {
      console.log("there is some problem")
    }
  }

  return (
    <div className="addFormStyleModel">
      <div className="addFormStyle">
        <span onClick={handleClick} className="cross">
          <i class="fas fa-times"></i>
        </span>
        <form onSubmit={handleSubmit} action="#">
          <div className="addFormInput">
            <label htmlFor="name">Name</label>
            <br />
            <input name="name" onChange={e => setName(e.target.value)} type="text" required />
          </div>

          <div className="addFormInput">
            <label htmlFor="date">Date</label>
            <br />
            <input onChange={e => setDate(e.target.value)} type="date" />
          </div>

          <div className="addFormInput">
            <label htmlFor="number">Number</label>
            <br />
            <input onChange={e => setNumber(e.target.value)} type="number" required />
          </div>
          <div className="addFormInput">
            <label htmlFor="email">Email</label>
            <br />
            <input onChange={e => setEmail(e.target.value)} type="email" required />
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
