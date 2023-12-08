import React, {useEffect} from 'react'
import search_btn from '../../assets/search_btn.png'
import filter_icon from '../../assets/filter_icon.png'
import fifa_img from '../../assets/fifa_Img.png'
// import profile_pic2 from '../../assets/profile_pic2.png'
import AllPolls from './AllPolls'
import {FaBars} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import SuggestedVote from '../SuggestedVote'

const MainCol1 = (props) => {
  // const CardDetails = [
  //       {
  //           id: 1,
  //           img: profile_pic2,
  //           name: "Kayode Wills",
  //       },
  //       {
  //           id: 2,
  //           img: profile_pic2,
  //           name: "Kayode Wills",
  //       },
  //       {
  //           id: 3,
  //           img: profile_pic2,
  //           name: "Kayode Wills",
  //       }
  //   ]
  const {openBurger, setOpenBurger, openRequestModal, setOpenRequestModal} = props
   useEffect(() => {
        AOS.init();
      }, [])

  return (
    <React.Fragment>
      <main className='main_col_1_container'>

      <div className='flex items-center justify-between'>
      <h1 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-duration="600" className='font-bold'>Voting</h1>
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
<div className='fifa_img_div' data-aos="fade-in" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
  <img src={fifa_img} alt="fifa_img" />
</div>
{/* SUGGESTED VOTE SECTION BEGINS */}

{/* SUGGESTED VOTE SECTION ENDS */}
{/* Buttons div */}
<div className='polls_btn_div'>
  <button style={{backgroundColor: "#4f0da3", color: "white"}}>All</button>
  <button>Public</button>
  <button>Private</button>
</div>

<AllPolls openRequestModal={openRequestModal} setOpenRequestModal={setOpenRequestModal}/>
      </main>
    </React.Fragment>
  )
}

export default MainCol1