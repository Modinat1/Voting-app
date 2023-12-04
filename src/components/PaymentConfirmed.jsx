import React from 'react'
import paymentConfImg from '../assets/paymentConfImg.png'

const PaymentConfirmed = () => {
  return (
    <article className='pay_confirm_section'>
        <img className='block mx-auto my-10' src={paymentConfImg} alt="" />
        <h5 className='mb-8'>Your payment has been confirmed</h5>
        <button className='continue_btn block mx-auto'>Continue to poll</button>
    </article>
  )
}

export default PaymentConfirmed