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

const mailchimpApi = process.env.GATSBY_API_ENDPOINT

exports.handler = (event, context, callback) => {
  axios
    .post(
      "https://us8.api.mailchimp.com/3.0/lists/a88a05506e/members",
      {
        email_address: event.queryStringParameters.mail,
        status: "subscribed",
      },
      {
        auth: {
          username: "LeSaiyan",
          password: process.env.API_KEY,
        },
      }
    )
    .then(
      callback(null, {
        statusCode: 200,
        body: JSON.stringify("Add may be"),
      }).catch(error => {
        console.log(error)
        callback(null, {
          statusCode: 400,
          body: "erreur" + error.message,
        })
      })
    )
}
