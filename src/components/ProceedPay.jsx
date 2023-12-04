import React from 'react'

const ProceedPay = () => {
  return (
    <>
    <article className='proceed_pay_container'>
        <small>
            This is a paid poll, your contribution ensures meaningful insights. Participate now to support quality content and exclusive results
        </small>
<div className="flex items-center justify-center mt-5">
<input className='mr-3 py-2 px-3 rounded-lg' style={{border: "1px solid #bfbfbf"}} type='text' placeholder='Number of votes'/>
<select className='py-2 px-10 rounded-lg' style={{border: "1px solid #bfbfbf"}} name="" id="" placeholder='Amount'>
<option value="USD">USD</option>
<option value="NGN">NGN</option>
</select>
</div>
    <div className='flex items-center justify-center mt-5'>
    <button className='go_back_btn'>Go back</button>
    <button className='continue_btn'>Proceed to pay</button>
    </div>
    </article>
    </>
  )
}

export default ProceedPay