import React from 'react'

const HowManyVotes = () => {
  return (
    <article className='how_many_votes_container'>
        <p className='block text-right font-bold pb-2'>X</p>
        <small>How many votes do you want to cast for this selection</small>

        <div style={{border: "1px solid #bfbfbf", borderRadius: "4px"}} className="flex items-center justify-between my-7 py-1 px-2">
        <input type="text" placeholder='Enter amount' className='outline-none' />
        <button style={{backgroundColor: "#bfbfbf", padding: "0.1rem 1rem", borderRadius: "4px"}}>All</button>
        </div>

        <button className='continue_btn'>Vote</button>
    </article>
  )
}

export default HowManyVotes