import React from 'react'

const RequestAccess = () => {
  return (
    <>
    <article className='request_access_container'>
        <small className='font-bold'>
            This is a private poll, to access this poll, you can request access from the poll owner
        </small>
          <div className='flex items-center justify-center mt-5'>

    <button className='go_back_btn'>Go back</button>
    <button className='continue_btn'>Request access</button>
    </div>
    </article>
    </>
  )
}

export default RequestAccess