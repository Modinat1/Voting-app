import React from 'react'
import paymentConfImg from '../assets/paymentConfImg.png'
import { Link } from 'react-router-dom'

const ApprovedWithdrawal = () => {
  return (
    <section className='withdrawal_request_overlay'>
        <article className='withdrawal_request_container'>
        <img src={paymentConfImg} alt="" />
        <small className='block font-semibold my-3'>Your withdrawal request has been recieved and is being processed</small>
        <Link to="/"><button className='withdrawal_request_btn'>Back to home</button></Link>
        </article>
    
    </section>
  )
}

export default ApprovedWithdrawal