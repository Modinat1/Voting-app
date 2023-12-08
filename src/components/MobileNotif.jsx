import React from 'react'
import poll from '../assets/poll.png'
import user_1 from '../assets/user_1.png'
import user_2 from '../assets/user_2.png'
import sharp_poll from '../assets/sharp_poll.png'
import fluent_payment from '../assets/fluent_payment.png'
import { Link } from 'react-router-dom'


const MobileNotif = () => {

  return (
    <section className='mobile_notif_section'>
      <Link to="/mypolls">  <div className='main_col_2_section_input_div'>
            <img src={poll} alt="" />
            <button>My polls</button>
            {/* <input type="text" placeholder='My polls' /> */}
        </div></Link>
      

        <div className="notification_card">
            <h3 className='font-bold text-lg'>Notifications</h3>

        {/* FIRST NOTIF */}
        <article className='notif'>
           <div className='flex items-center my-3'>
            <div>
            <img src={user_1} alt="user_image" />

            </div>

            <div className='ml-3'>
            <small><span className='font-bold'>Akin Collins</span> requested access to your poll</small>
            <small className='block'>10 min</small>

            
            <button className='mt-2 mr-3 text-sm' style={{color: "#4f0da3"}}>Accept</button>
            <button className='mt-2 text-sm'>Decline</button>
            
          </div>
            </div>    
          </article>
            {/* SECOND NOTIF */}
               <article className='notif'>
        <div className='flex items-center my-3'>
            <img src={user_2} alt="user_image" />

            <div className='ml-3'>
            <small><span className='font-bold'>Kolade Favour</span> requested access to your poll</small>
            <small className='block'>10 min</small>
            <button className='mt-2 text-sm' style={{color: "#4f0da3"}}>View poll</button>
          </div>
            </div>
</article>
                          
{/* THIRD NOTIF */}
              <article className='notif'> 
        <div className='flex items-center my-3'>
          <div className='sharp_poll_div'>
            <img src={sharp_poll} alt="" />

          </div>

            <div className='ml-3'>
            <small>Your <span className='font-bold'>poll</span> has ended</small>
            <small className='block'>10 min</small>
            <button className='mt-2 text-sm' style={{color: "#4f0da3"}}>View result</button>
          </div>
            </div>
</article>
            {/* FOURTH NOTIF */}
    
        <div className='flex items-center my-3'>
          <div className='sharp_poll_div'>
            <img src={fluent_payment} alt="" />
          </div>

            <div className='ml-3'>
            <small><span className='font-bold'>Kayode Shanks</span> made payment for 20votes</small>
            <small className='block'>10 min</small>
            <button className='mt-2 text-sm' style={{color: "#4f0da3"}}>View result</button>
          </div>
            </div>
        </div>


        
    </section>
  )
}

export default MobileNotif