import React from 'react'
import { Link } from 'react-router-dom'

const RequestAccess = () => {
  return (
    <>
    <section className='request_access_overlay'>
    <article className='request_access_container'>
        <small className='font-bold'>
            This is a private poll, to access this poll, you can request access from the poll owner
        </small>
          <div className='flex items-center justify-center mt-5'>

    <button className='go_back_btn'>Go back</button>
    <Link to="/proceed/pay"><button className='continue_btn'>Request access</button></Link>
    </div>
    </article>
    </section>
    </>
  )
}

export default RequestAccess