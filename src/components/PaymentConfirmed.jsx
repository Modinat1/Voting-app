import React from 'react'
import paymentConfImg from '../assets/paymentConfImg.png'
import { Link } from 'react-router-dom'

const PaymentConfirmed = () => {
  return (
    <section className='request_access_overlay'>
    <article className='pay_confirm_section'>
        <img className='block mx-auto my-10' src={paymentConfImg} alt="" />
        <h5 className='mb-8'>Your payment has been confirmed</h5>
        <Link to="/"><button className='continue_btn block mx-auto'>Continue to poll</button></Link>
    </article>
    </section>
  )
}

export default PaymentConfirmed