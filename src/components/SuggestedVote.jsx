import React from 'react'
import ProgressBar from './PrgogressBar/ProgressBar'
import timeIcon from '../assets/timeIcon.png'

const SuggestedVote = (props) => {
    const {CardDetails} = props;

  return (
    <>
    {CardDetails.map((card)=>{
        const {id, img, name} = card
        return(
   <div key={id} className='all_poll_row_1_card'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>
          
        
        <h4 className='my-2'>What is yout preferred programming language</h4>
        <ProgressBar title="Python" percent="75%"/>
        <ProgressBar title="Javascript" percent="40%"/>

        <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center'>
                <img className='mr-1' src={timeIcon} alt="" />
                <small>2 days remaining</small>
            </div>
        <span>500 votes</span>
        </div>
       
        </div>
        )
    })}
     
   </> 
  )
}

export default SuggestedVote