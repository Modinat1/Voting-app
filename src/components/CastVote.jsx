import React from 'react'
import profile_pic2 from '../assets/profile_pic2.png'
import timeIcon from '../assets/timeIcon.png'
import ProgressBar from './PrgogressBar/ProgressBar'
import { Link } from 'react-router-dom'
// import UniqueTokenPage from './UniqueTokenPage'
// import AccessPoll from './AccessPoll'
// import RequestAccess from './RequestAccess'
// import ProceedPay from './ProceedPay'
// import PaymentConfirmed from './PaymentConfirmed'
// import HowManyVotes from './HowManyVotes'

const CastVote = (props) => {
  const {setOpenRequestModal} = props
  return (
    <>
    <article className='request_access_overlay'>
           <div className='cast_vote_container'>
            <div className='flex justify-between my-3'>
    <h2 className='text-center font-semibold'>Cast vote</h2>
    <button onClick={()=>setOpenRequestModal(false)} style={{color: "red", fontSize: "1.5rem", fontWeight: "bold"}}>x</button>

            </div>
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details my-2'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>
    <small>What is your preferred programming language</small>
    <Link to="/request/acess"><ProgressBar title="Python" percent="75%" setOpenRequestModal={setOpenRequestModal}/></Link>
    <Link to="/request/acess"><ProgressBar title="Javascript" percent="50%" setOpenRequestModal={setOpenRequestModal}/></Link>

               <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center'>
                <img className='mr-1' src={timeIcon} alt="" />
                <small>2 days remaining</small>
            </div>
        <span>500 votes</span>
        </div>
        </div>
    </article>
    {/* <UniqueTokenPage/> */}
    {/* <AccessPoll/> */}
    {/* <HowManyVotes/> */}
    </>
  )
}

export default CastVote


