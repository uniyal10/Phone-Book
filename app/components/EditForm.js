import React, { useEffect, useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Axios from "axios"

function EditForm(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const [name, setName] = useState(appState.editState.name)
  const [date, setDate] = useState(appState.editState.date)
  const [number, setNumber] = useState(appState.editState.number)
  const [email, setEmail] = useState(appState.editState.email)

  function handleClick() {
    appDispatch({ type: "editClose", value: false })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let response = await Axios.post("http://localhost:8080/edit", { id: appState.editState.id, name: name, date: date, number: number, email: email })
      if (response.data) {
        appDispatch({ type: "editClose", value: false })
        appDispatch.editState("editState", { id: appState.editState.id, name: name, date: date, number: number, email: email })
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
            <input onChange={e => setName(e.target.value)} defaultValue={appState.editState.name} type="text" required />
          </div>

          <div className="addFormInput">
            <label htmlFor="date">Date</label>
            <br />
            <input onChange={e => setDate(e.target.value)} defaultValue={appState.editState.date} type="date" />
          </div>

          <div className="addFormInput">
            <label htmlFor="number">Number</label>
            <br />
            <input onChange={e => setNumber(e.target.value)} defaultValue={appState.editState.number} type="number" required />
          </div>
          <div className="addFormInput">
            <label htmlFor="email">Email</label>
            <br />
            <input onChange={e => setEmail(e.target.value)} defaultValue={appState.editState.email} type="email" required />
          </div>
          <button className="btnStyle">Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
