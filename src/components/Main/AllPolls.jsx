import React from 'react'
import profile_pic2 from '../../assets/profile_pic2.png'
import ProgressBar from '../PrgogressBar/ProgressBar'
import timeIcon from '../../assets/timeIcon.png'
import fifa_img from '../../assets/fifa_Img.png'
import fourth_card_img from '../../assets/fourth_card_img.png'


const AllPolls = (props) => {
  const {openRequestModal, setOpenRequestModal} = props
  return (
    <section className='all_polls_section'>
        {/* FIRST CARD */}
        <div className='all_poll_row_1_card'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>
          
        
        <h4 className='my-2'>What is yout preferred programming language</h4>
        <ProgressBar title="Python" percent="75%" openRequestModal={openRequestModal} setOpenRequestModal={setOpenRequestModal}/>
        <ProgressBar title="Javascript" percent="40%"/>

        <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center'>
                <img className='mr-1' src={timeIcon} alt="" />
                <small>2 days remaining</small>
            </div>
        <span>500 votes</span>
        </div>
       
        </div>
        {/* SECOND CARD */}
        <div className='all_poll_row_1_card mt-3'>
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>

             <ProgressBar title="Python" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>
              <ProgressBar title="Javascript" percent="50%"/>

               <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center'>
                <img className='mr-1' src={timeIcon} alt="" />
                <small>2 days remaining</small>
            </div>
        <span>500 votes</span>
        </div>
              </div>
              {/* Third CARD */}
           <div className='all_poll_row_1_card mt-3'>
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>

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
{/* FIFA IMAGE DIV */}
    <div className='fifa_img_div'>
  <img src={fifa_img} alt="fifa_img" />
</div>

{/* FOURTH CARD */}
 <div className='all_poll_row_1_card mt-3'>
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>
            {/* FOURTH CARD IMAGE DIV */}
    <div className='fifa_img_div'>
  <img src={fourth_card_img} alt="fifa_img" />
</div>
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
                    {/* FIFTH CARD */}
           <div className='all_poll_row_1_card mt-3'>
          <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
            </div>

            <small>Today @ 12:00PM</small>
            </div>

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
    </section>
  )
}

export default AllPolls