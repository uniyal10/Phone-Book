import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

//Components

import Header from "./components/Header"
import Contact from "./components/Contact"
import Details from "./components/Details"
import Search from "./components/Search"
function ExampleComponent() {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setToggle(false)
  }, [])
  return (
    <>
      <Header />
      <Search />
      <Contact setToggle={setToggle} />
      {toggle ? <Details /> : " "}
    </>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
