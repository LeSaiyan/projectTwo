import React from "react"
import Header from "../Header"
import Footer from "../Footer"
const index = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default index
