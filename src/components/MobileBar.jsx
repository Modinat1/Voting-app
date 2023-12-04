import React from 'react'
import house from '../assets/House.png'
import UsersThree from '../assets/UsersThree.png'
import Storefront from '../assets/Storefront.png'
import biz_dir from '../assets/biz_dir.png'
import chat from '../assets/chat.png'
import UserCircle from '../assets/UserCircle.png'
import tickets from '../assets/tickets.png'
import live from '../assets/live.png'
import stereo from '../assets/stereo.png'
import tv from '../assets/tv.png'
import vote from '../assets/vote.png'
import book from '../assets/book.png'
import SignOut from '../assets/SignOut.png'
import './SideBar/SideBar.css'
import { Link } from 'react-router-dom'

const MobileBar = () => {
  return (
    <aside className='mobile_bar_section'>
        <ul>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={house} alt="home" /></span><Link to='/'><li style={{color: "white"}}>Home</li></Link>            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={UsersThree} alt="connect" /></span><li style={{color: "white"}}>Connect</li>
            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={Storefront} alt="coomerce" /></span><li style={{color: "white"}}>Commerce</li>
            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={biz_dir} alt="business" /></span><li style={{color: "white"}}>Business Directory</li>
            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={chat} alt="chat" /></span><li style={{color: "white"}}>Chats</li>
            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={UserCircle} alt="profile" /></span><li style={{color: "white"}}>Profile</li>
            </div>

           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={tickets} alt="tickets" /></span><li style={{color: "white"}}>Tickets</li>
            </div>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={live} alt="live" /></span><li style={{color: "white"}}>Live</li>
            </div>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={stereo} alt="stereo" /></span><li style={{color: "white"}}>Stereo</li>
            </div>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={tv} alt="tv" /></span><li style={{color: "white"}}>Tv</li>
            </div>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={vote} alt="vote" /></span><li style={{color: "white"}}>Voting</li>
            </div>
           <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={book} alt="education" /></span><li style={{color: "white"}}>Education</li>
            </div>
         

 <div className='flex items-center mt-5 py-1 px-2'>
            <span className='mr-2'><img src={SignOut} alt="education" /></span><li style={{color: "white"}}>Sign Out</li>
            </div>
        </ul>
    </aside>
  )
}

export default MobileBar