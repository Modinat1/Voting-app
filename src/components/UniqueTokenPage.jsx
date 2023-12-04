import React from 'react'
import copyIcon from '../assets/copyIcon.png'

const UniqueTokenPage = () => {
  return (
    <article className='unique_token_section'>
    <h3 className='font-bold mb-3'>Important: Copy Your Unique Token</h3>
    <small>Thank you for participating in our poll! To ensure the integrity of the voting process and to verify your identity, we've generated a unique token for you. Please take a moment to copy this token as you'll need it to submit your vote.</small>
    <div className='flex justify-center items-center my-3' style={{backgroundColor: "4foda3"}}>
        <h3 className='font-bold'>908AD23M</h3>
        <img src={copyIcon} alt="" />
    </div>
    <small className='my-3'>Please note: This token can be used only once</small>

    <div className='flex items-center justify-center mt-5'>

    <button className='go_back_btn'>Go back</button>
    <button className='continue_btn'>Continue</button>
    </div>
    </article>
  )
}

export default UniqueTokenPage