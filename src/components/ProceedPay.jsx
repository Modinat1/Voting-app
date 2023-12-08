import React from 'react'
import { Link } from 'react-router-dom'

const ProceedPay = () => {
  return (
    <>
    <section className='request_access_overlay'>
    <article className='proceed_pay_container'>
        <small>
            This is a paid poll, your contribution ensures meaningful insights. Participate now to support quality content and exclusive results
        </small>
<div className="flex items-center justify-center mt-5">
<input className='mr-3 px-1 py-2.5 md:px-11 focus:outline-none rounded-lg' style={{border: "1px solid #bfbfbf"}} type='text' placeholder='Number of votes'/>
<select className='px-1 py-2.5 md:px-11 rounded-lg focus:outline-none' style={{border: "1px solid #bfbfbf"}} name="" id="" placeholder='Amount'>
<option value="USD">USD</option>
<option value="NGN">NGN</option>
</select>
</div>
    <div className='flex items-center justify-center mt-5'>
    <Link to="/request/acess"><button className='go_back_btn'>Go back</button></Link>
    
    <Link to="/payment/confirmed"><button className='continue_btn'>Proceed to pay</button></Link>
    </div>
    </article>
    </section>
    </>
  )
}

export default ProceedPay