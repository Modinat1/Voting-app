import React from 'react'
import logo from '../assets/2geda_logo.png'
import bell_notif from '../assets/bell_notif.png'
import profile_pics from '../assets/profile_pics.png'
import search_btn from '../assets/search_btn.png'


const MobileHeader = ({setOpenNotif, openNotif}) => {
  return (
    <header className='mobile_header'>
        <div className='header_logo'>
        <img src={logo} alt="logo" />

        </div>

        <div className='header_col_2'>
            <div className='input_div'>
            <input type="text" placeholder='Search Name, Place and Jobs'/>
            <img src={search_btn} alt="search_button" />
            </div>

            <div className='bell_notif_div'>
            <img src={bell_notif} alt="nofication_bell" onClick={()=>setOpenNotif(!openNotif)}/>
            </div>

            <div className='header_profile'>
            <img src={profile_pics} alt="profile_pics" />
            {/* <small>my profile</small> */}
            </div>
        </div>
    </header>
  )
}

export default MobileHeader