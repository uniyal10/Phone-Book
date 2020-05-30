import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"
import { useImmer } from "use-immer"
import DispatchContext from "./DispatchContext"
import StateContext from "./StateContext"

import { useImmerReducer } from "use-immer"

//Components

import Header from "./components/Header"
import Contact from "./components/Contact"
import Details from "./components/Details"
import Search from "./components/Search"
import Add from "./components/Add"
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"

function ExampleComponent() {
  const [isSearch, setSearch] = useState(false)
  const [isAdd, setAdd] = useState(false)
  // const [isEdit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [state, setState] = useImmer({
    isLoading: true,
    list: []
  })
  const initialState = {
    isEdit: false
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "editClose":
        draft.isEdit = action.value
        return
      case "edit":
        draft.isEdit = action.value
        return
    }
  }
  const [State, dispatch] = useImmerReducer(ourReducer, initialState)

  // useEffect(() => {
  //   function handleToggle() {
  //     setToggle(false)
  //   }
  //   handleToggle()
  // }, [])

  useEffect(() => {
    async function getInitData() {
      try {
        let response = await Axios.get("http://localhost:8080/")
        setState(draft => {
          draft.isLoading = false
          draft.list = response.data
          console.log(draft.list)
        })
      } catch (e) {
        console.log("something wrong")
      }
    }
    getInitData()
  }, [])

  return (
    <StateContext.Provider value={State}>
      <DispatchContext.Provider value={dispatch}>
        <>
          <Header setSearch={setSearch} />
          {isSearch && <Search />}

          {state.list.map(listItem => {
            return (
              <>
                <Contact key={listItem._id} listItem={listItem} />
                {/* <Details setEdit={setEdit} /> */}
              </>
            )
          })}

          <Add setAdd={setAdd} />
          {isAdd && <AddForm setAdd={setAdd} setLoading={setLoading} />}
          {State.isEdit && <EditForm />}
          {loading && <div className="loader"></div>}
        </>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
