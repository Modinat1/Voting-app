import React from 'react'
import profile_pic2 from '../assets/profile_pic2.png'
import timeIcon from '../assets/timeIcon.png'
import ProgressBar from './PrgogressBar/ProgressBar'
import UniqueTokenPage from './UniqueTokenPage'
import AccessPoll from './AccessPoll'
import RequestAccess from './RequestAccess'
import ProceedPay from './ProceedPay'
import PaymentConfirmed from './PaymentConfirmed'
import HowManyVotes from './HowManyVotes'
import ClosePoll from './ClosePoll'

const CastVote = () => {
  return (
    <>
    <article >
            
           <div className='cast_vote_container'>
            {/* <div className='flex '> */}
    <h2 className='text-center font-semibold'>Cast vote</h2>
    {/* <p className='justify-items-end'>x</p> */}
            {/* </div> */}
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>
    <small>What is your preferred programming language</small>
             <ProgressBar title="Python" percent="75%"/>
              <ProgressBar title="Javascript" percent="50%"/>

               <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center'>
                <img className='mr-1' src={timeIcon} alt="" />
                <small>2 days remaining</small>
            </div>
        <span>500 votes</span>
        </div>
        </div>
    </article>
    <UniqueTokenPage/>
    <AccessPoll/>
    <RequestAccess/>
    <ProceedPay/>
    <PaymentConfirmed/>
    <HowManyVotes/>
    <ClosePoll/>
    </>
  )
}

export default CastVote


