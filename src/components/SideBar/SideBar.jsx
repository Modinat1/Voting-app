import React, {useEffect} from 'react'
import house from '../../assets/House.png'
import UsersThree from '../../assets/UsersThree.png'
import Storefront from '../../assets/Storefront.png'
import biz_dir from '../../assets/biz_dir.png'
import chat from '../../assets/chat.png'
import UserCircle from '../../assets/UserCircle.png'
import tickets from '../../assets/tickets.png'
import live from '../../assets/live.png'
import stereo from '../../assets/stereo.png'
import tv from '../../assets/tv.png'
import vote from '../../assets/vote.png'
import book from '../../assets/book.png'
import SignOut from '../../assets/SignOut.png'
import './SideBar.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SideBar = () => {
   useEffect(() => {
        AOS.init();
      }, [])
  return (
    <aside className='side_bar_section' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-duration="600">
        <ul>
           <div className='flex items-center mt-1 px-2'>
            <span className='mr-2'><img src={house} alt="home" /></span><Link to='/'><li style={{color: "white"}}>Home</li></Link>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={UsersThree} alt="connect" /></span><li style={{color: "#c47efb"}}>Connect</li>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={Storefront} alt="coomerce" /></span><li style={{color: "#c47efb"}}>Commerce</li>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={biz_dir} alt="business" /></span><li style={{color: "#c47efb"}}>Business Directory</li>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={chat} alt="chat" /></span><li style={{color: "#c47efb"}}>Chats</li>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={UserCircle} alt="profile" /></span><li style={{color: "#c47efb"}}>Profile</li>
            </div>

           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={tickets} alt="tickets" /></span><li style={{color: "#c47efb"}}>Tickets</li>
            </div>
           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={live} alt="live" /></span><li style={{color: "#c47efb"}}>Live</li>
            </div>
           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={stereo} alt="stereo" /></span><li style={{color: "#c47efb"}}>Stereo</li>
            </div>
           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={tv} alt="tv" /></span><li style={{color: "#c47efb"}}>Tv</li>
            </div>
           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={vote} alt="vote" /></span><li style={{color: "#c47efb"}}>Voting</li>
            </div>
           <div className='flex items-center mt-4 px-2'>
            <span className='mr-2'><img src={book} alt="education" /></span><li style={{color: "#c47efb"}}>Education</li>
            </div>
         

 <div className='flex items-center mt-3 py-1 px-2'>
            <span className='mr-2'><img src={SignOut} alt="education" /></span><li style={{color: "white"}}>Sign Out</li>
            </div>
        </ul>
    </aside>
  )
}

export default SideBar