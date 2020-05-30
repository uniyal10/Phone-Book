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
import Pagination from "./components/Pagination"

function ExampleComponent() {
  const [isSearch, setSearch] = useState(false)
  const [isAdd, setAdd] = useState(false)
  const [loading, setLoading] = useState(false)

  //pagination

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)

  // const [state, setState] = useImmer({
  //   list: []
  // })
  const initialState = {
    isEdit: false,
    list: [],
    search: [],
    editState: {
      id: "",
      name: "",
      date: "",
      number: "",
      email: ""
    }
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "editClose":
        draft.isEdit = action.value
        return
      case "edit":
        draft.isEdit = action.value
        return
      case "filterData":
        draft.search = draft.list.filter(contact => {
          return contact.name.toLowerCase().indexOf(action.value.toLowerCase()) !== -1
        })
        return
      case "editState":
        console.log(action.value)
        draft.editState = action.value
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
    setLoading(true)
    async function getInitData() {
      try {
        let response = await Axios.get("http://localhost:8080/")
        State.list = response.data
        State.search = response.data
        setLoading(false)
      } catch (e) {
        console.log("something wrong")
      }
    }
    getInitData()
  }, [])

  useEffect(() => {
    async function getInitData() {
      try {
        let response = await Axios.get("http://localhost:8080/")
        State.list = response.data
        State.search = response.data
        setLoading(false)
      } catch (e) {
        console.log("something wrong")
      }
    }
    getInitData()
  }, [isAdd])

  useEffect(() => {
    async function getInitData() {
      try {
        let response = await Axios.get("http://localhost:8080/")
        State.list = response.data
        State.search = response.data
        setLoading(false)
      } catch (e) {
        console.log("something wrong")
      }
    }
    getInitData()
  }, [State.isEdit])

  useEffect(() => {}, [State.list])

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = State.search.slice(indexOfFirstPost, indexOfLastPost).sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    return 0
  })

  //paginate

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <StateContext.Provider value={State}>
      <DispatchContext.Provider value={dispatch}>
        <>
          <Header setSearch={setSearch} />
          {isSearch && <Search />}

          {currentPosts.map(listItem => {
            return (
              <>
                <Contact key={listItem} listItem={listItem} />
                {/* <Details setEdit={setEdit} /> */}
              </>
            )
          })}

          <Add setAdd={setAdd} />
          {isAdd && <AddForm setAdd={setAdd} setLoading={setLoading} />}
          {State.isEdit && <EditForm />}
          {loading && <div className="loader"></div>}
          {!State.isEdit && !isAdd && <Pagination postsPerPage={postPerPage} totalPosts={State.search.length} paginate={paginate} />}
        </>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
