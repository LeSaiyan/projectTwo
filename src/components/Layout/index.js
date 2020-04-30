import React from "react"
import Header from "../header"
import Footer from "../Footer"
const index = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default index
