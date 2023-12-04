import React from 'react'
import copyIcon from '../assets/copyIcon.png'

const AccessPoll = () => {
  return (
    <>
    <article className='access_poll_container'> 
    <div className='access_poll_upper'>
    <h3 className='font-bold'>Access Poll</h3>
    <small>To continue voting please input the Unique ID provided for you.</small>

     <div className='flex justify-center items-center my-3'>
        <h3>908AD23M</h3>
        <img src={copyIcon} alt="" />
    </div>
</div>


     <div className='flex items-center justify-center mt-5'>

    <button className='go_back_btn'>Go back</button>
    <button className='continue_btn'>Continue</button>
    </div>
    </article>
    </>
  )
}

export default AccessPoll