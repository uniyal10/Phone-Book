import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

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

  useEffect(() => {
    function handleToggle() {
      setToggle(false)
    }
    handleToggle()
  }, [])

  return (
    <>
      <Header setSearch={setSearch} />
      {isSearch && <Search />}
      <Contact setToggle={setToggle} />
      {toggle ? <Details setEdit={setEdit} /> : " "}
      <Add setAdd={setAdd} />
      {isAdd && <AddForm setAdd={setAdd} />}
      {isEdit && <EditForm setEdit={setEdit} />}
    </>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
