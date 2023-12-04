import React from 'react'
import '../components/MyPolls/MyPolls.css'

const ClosePoll = (props) => {
    const {setShowClosePoll} = props
  return (
    <>
    <div className="close_poll_container_overlay">
    <article className='close_poll_container'>
        <div className='flex justify-between my-2'>
    <h3 className='text-center font-bold'>Close poll?</h3>
    <button onClick={()=>setShowClosePoll(false)} className='block text-right font-bold'>X</button>
        </div>

    <small>This poll will not be made available anymore and would be marked as ended. Are you sure you want to close this poll?</small>
    <button onClick={()=>setShowClosePoll(false)} style={{backgroundColor: "red",display: "block",color: "white", borderRadius: "30px", padding: "0.5rem 2rem", margin: " 1rem auto 0"}} className='close_poll_btn'>Close poll</button>
    </article>
    </div>
    </>
  )
}

export default ClosePoll