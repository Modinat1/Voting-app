import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Header from '../Header'
import MobileBar from '../MobileBar'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import sharp_poll from '../../assets/sharp_poll.png'
import fluent_payment from '../../assets/fluent_payment.png'
import search_btn from '../../assets/search_btn.png'
import filter_icon from '../../assets/filter_icon.png'
import fifa_img from '../../assets/fifa_Img.png'
import {FaBars} from 'react-icons/fa'
import MobileHeader from '../MobileHeader'
import { Link } from 'react-router-dom'
import MainCol2Mobile from '../MainCol2Mobile'
import profile_pic2 from '../../assets/profile_pic2.png'
import timeIcon from '../../assets/timeIcon.png'
import ProgressBar from '../PrgogressBar/ProgressBar'
import { BsArrowLeft } from "react-icons/bs";
import eyeIcon from '../../assets/eyeIcon.png'
import laVote from '../../assets/la_vote-yea.png'
import './MyPolls.css'
import ClosePoll from '../ClosePoll'
 


const MyPolls = (props) => {
  const {openBurger, setOpenBurger, openNotif, setOpenNotif} = props
  const [showClosePoll, setShowClosePoll] = useState(false)
  return (
    <React.Fragment>
      <div className='my_poll_section'>
        {showClosePoll ? <ClosePoll showClosePoll={showClosePoll} setShowClosePoll={setShowClosePoll}/> : null}
       <div className='flex'>
          <aside className='w-0 md:w-2/12 mx-0'>
            <SideBar/>
            {openBurger ? <MobileBar/> : 'null'}
            </aside>
          <main className='w-full md:w-10/12 mx-0'>
            {/* <section> */}
        <Header/>
        <MobileHeader openNotif={openNotif} setOpenNotif={setOpenNotif}/>
        <div className='main_grid'>
           {/* MAIN COL 1 BEGINS */}

       <main className='main_col_1_container'>

      <div className='flex items-center justify-between'>
       <div className='flex items-center'>
        <Link className='font-900 mt-1' to="/"> <button><BsArrowLeft /></button></Link>
        <h2 className='font-bold ml-3 text-xl'>My polls</h2>
      </div>
      <button className='burger' onClick ={()=> setOpenBurger(!openBurger)}><FaBars/></button>
        </div>
     

    <div className='maincol_1_row_1'>
    <div className='input_container'>
      <img src={search_btn} alt="" />
      <input type="text" placeholder='Find polls' />
    </div>
      <button><img src={filter_icon} alt="filter_icon" /></button>
    </div>
{/* FIFA IMAGE DIV */}
<div className='fifa_img_div'>
  <img src={fifa_img} alt="fifa_img" />
</div>
{/* Buttons div */}
<div className='polls_btn_div'>
  <button style={{backgroundColor: "#4f0da3", color: "white"}}>All</button>
  <button>Active</button>
  <button>Ended</button>
</div>

{/* --------------PROGRESS BAR BEGINS 1---------------- */}
        <div className='my-5'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
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
{/* --------------PROGRESS BAR ENDS 1---------------- */}
{/* VIEWS AND VOTES BEGINS */}
<div className="flex items-center">
<div className='flex '>
  <div>

<img src={eyeIcon} alt="" />
  </div>
<div className=''>
  <h2 className='font-bold text-xl ml-2 mb-0'>24.5K</h2>
  <small className='ml-2 mx-0'>views</small>
</div>
</div>

<div className='flex ml-60'>
  <div>
<img src={laVote} alt="" />

  </div>
<div>
  <h2 className='font-bold text-xl ml-2 mb-0'>2.5K</h2>
  <small className='ml-2 mx-0'>votes</small>
</div>
</div>
</div>

{/* VIEWS AND VOTES ENDS */}
{/* view result button close poll buttons div */}
<div className='view_close_poll_btn'>
<Link to="/poll_result"><button className='view_result_btn' >View result</button></Link>
<button className='close_result_btn' onClick={()=> setShowClosePoll(!showClosePoll)}>Close poll</button>
</div>

      {/* --------------PROGRESS BAR BEGINS 2---------------- */}
      {/* FIFA IMAGE DIV */}
<div className='fifa_img_div'>
  <img src={fifa_img} alt="fifa_img" />
</div>
        <div className='my-5'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
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
{/* --------------PROGRESS BAR ENDS 2---------------- */}
{/* VIEWS AND VOTES BEGINS */}
<div className="flex items-center">
<div className='flex '>
  <div>

<img src={eyeIcon} alt="" />
  </div>
<div className=''>
  <h2 className='font-bold text-xl ml-2 mb-0'>24.5K</h2>
  <small className='ml-2 mx-0'>views</small>
</div>
</div>

<div className='flex ml-60'>
  <div>
<img src={laVote} alt="" />

  </div>
<div>
  <h2 className='font-bold text-xl ml-2 mb-0'>2.5K</h2>
  <small className='ml-2 mx-0'>votes</small>
</div>
</div>
</div>

{/* VIEWS AND VOTES ENDS */}
{/* view result button close poll buttons div */}
<div className='view_close_poll_btn'>
<button className='view_result_btn' >View result</button>
<button className='close_result_btn' onClick={()=> setShowClosePoll(!showClosePoll)}>Close poll</button>
</div>
      {/* ---------------------SECOND ROW ENDS------------------------ */}
      {/* ---------------------THIRD ROW BEGINS------------------------ */}
      <div className='my-5'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
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
{/* --------------PROGRESS BAR ENDS 2---------------- */}
{/* VIEWS AND VOTES BEGINS */}
<div className="flex items-center">
<div className='flex '>
  <div>

<img src={eyeIcon} alt="" />
  </div>
<div className=''>
  <h2 className='font-bold text-xl ml-2 mb-0'>24.5K</h2>
  <small className='ml-2 mx-0'>views</small>
</div>
</div>

<div className='flex ml-60'>
  <div>
<img src={laVote} alt="" />

  </div>
<div>
  <h2 className='font-bold text-xl ml-2 mb-0'>2.5K</h2>
  <small className='ml-2 mx-0'>votes</small>
</div>
</div>
</div>

{/* VIEWS AND VOTES ENDS */}
{/* view result button close poll buttons div */}
<div className='view_close_poll_btn'>
<button className='view_result_btn' >View result</button>
<button className='close_result_btn' onClick={()=> setShowClosePoll(!showClosePoll)}>Close poll</button>
</div>
      {/* ---------------------THIRD ROW ENDS------------------------ */}
      {/* ---------------------FOURTH ROW BEGINS------------------------ */}
      <div className='my-5'>

            <div className='all_poll_row_1_card_row_1'>
            <div className='all_poll_row_1_card_profile_details'>
            <img src={profile_pic2} alt="" />
            <h5>Kayode Wills</h5>
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
{/* --------------PROGRESS BAR ENDS 2---------------- */}
{/* VIEWS AND VOTES BEGINS */}
<div className="flex items-center">
<div className='flex '>
  <div>

<img src={eyeIcon} alt="" />
  </div>
<div className=''>
  <h2 className='font-bold text-xl ml-2 mb-0'>24.5K</h2>
  <small className='ml-2 mx-0'>views</small>
</div>
</div>

<div className='flex ml-60'>
  <div>
<img src={laVote} alt="" />

  </div>
<div>
  <h2 className='font-bold text-xl ml-2 mb-0'>2.5K</h2>
  <small className='ml-2 mx-0'>votes</small>
</div>
</div>
</div>

{/* VIEWS AND VOTES ENDS */}
{/* view result button close poll buttons div */}
<div className='view_close_poll_btn'>
<button className='view_result_btn' >View result</button>
<button className='close_result_btn' onClick={()=> setShowClosePoll(!showClosePoll)}>Close poll</button>
</div>
      {/* ---------------------FOURTH ROW ENDS------------------------ */}


      </main>
        
        {/* MAIN COL 1 ENDS */}

{/* ----------------------------------------------------------- */}
        {/* MAIN COL 2 BEGINS */}
            <section className='main_col_2_section'>
        <div style={{backgroundColor: "#ff8a15"}} className='main_col_2_section_input_div'>
           <Link to="/create_poll" className='py-2 text-white'><button >Create poll</button></Link>
        </div>

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
        <div className=' flex items-center my-3'>
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

        {/* MAIN COL 2 ENDS */}
        {/* <MainCol2/> */}
        
        {openNotif ? <MainCol2Mobile/> : null}
        </div>
      {/* </section> */}
    
            </main>
            </div>

      </div>
    </React.Fragment>
  )
}

export default MyPolls

        