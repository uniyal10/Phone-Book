import React, { useEffect, useState, useContext } from "react"
import DispatchContext from "../DispatchContext"
import Axios from "axios"

function AddForm(props) {
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()

  const appDispatch = useContext(DispatchContext)

  function handleClick() {
    props.setAdd(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    props.setLoading(true)
    try {
      let response = await Axios.post("/add", { name, date, number, email })
      if (response.data) {
        appDispatch({ type: "addUserData", value: { name, date, number, email } })
        props.setAdd(false)
        props.setLoading(false)
      }
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

const cross = {}
export default AddForm
