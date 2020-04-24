import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const Index = () => {
  const stripePromise = loadStripe("pk_test_tT0WmGjmBsEhSCMihpSjmqH400njt8c3xJ")

  const checkoutButton = async e => {
    e.preventDefault()
    const stripe = await stripePromise
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_H9mSvNsxyF6iLS", quantity: 1 }],
        successUrl: "https://your-website.com/success",
        cancelUrl: "https://your-website.com/canceled",
      })
      .then(function (result) {})
  }
  return (
    <div>
      <button onClick={checkoutButton}>Checkout</button>
    </div>
  )
}

export default Index
