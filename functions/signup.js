//const fetch ||axios

// MAILCHIMP:
//     - GATSBY_MAILCHIMP_API
//     - MAILCHIMP ID LIST

//     STRIPE: STRIPE_API

//     - event.body
//     - Controle sur les req
//     - fetch sur API MAILCHIMP
//     - En fonction req => callback dans body (renvoie en fonction du code recu)

const axios = require("axios")
const fetch = require("fetch")
const dotenv = require("dotenv")

module.exports.handler = (event, context, callback) => {
  const mailchimpApi = "68f96fa2a81988b7fe0115cfb532b6fe-us8"
  const memberListId = "a88a05506e"

  const formData = JSON.parse(event.body)

  const data = {
    email_address: formData.email,
    status: "subscribed",
  }

  axios
    .post(
      `https://us8.api.mailchimp.com/3.0/lists/${memberListId}/members`,
      data,
      {
        headers: {
          "Content-Type": "application-json",
          Authorization: `apikey ${mailchimpApi}`,
        },
      }
    )
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          status: "Members successfully subscribed",
        }),
      })
    })
    .catch(error => {
      callback(null, {
        statusCode: err.status,
        body: JSON.stringify({
          error: err,
        }),
      })
    })
}
