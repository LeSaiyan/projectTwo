import React, { useState } from "react"
import axios from "axios"

const Index = () => {
  const [inputForm, setInputForm] = useState({
    email: "",
  })

  const handleChange = e => {
    setInputForm({
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputForm)
    axios
      .post(
        `https://keen-yonath-4ea4f5.netlify.app/.netlify/functions/signup`,
        {
          headers: {
            "Content-Type": "application-json",
          },
        }
      )
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={inputForm.email}
          name="email"
          onChange={handleChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  )
}

export default Index
