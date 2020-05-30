import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"

//Components

import Header from "./components/Header"
import Contact from "./components/Contact"
import Details from "./components/Details"
import Search from "./components/Search"
import Add from "./components/Add"
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"

function ExampleComponent() {
  const [toggle, setToggle] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [isAdd, setAdd] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    function handleToggle() {
      setToggle(false)
    }
    handleToggle()
  }, [])

  useEffect(() => {
    async function getInitData() {
      let response = await Axios.get("http://localhost:8080/")
      setData(response.data)
    }
    getInitData()
  }, [])

  return (
    <>
      <Header setSearch={setSearch} />
      {isSearch && <Search />}
      <Contact setToggle={setToggle} />
      {toggle ? <Details setEdit={setEdit} /> : " "}
      <Add setAdd={setAdd} />
      {isAdd && <AddForm setAdd={setAdd} setLoading={setLoading} />}
      {isEdit && <EditForm setEdit={setEdit} />}
      {loading && <div className="loader"></div>}
    </>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
