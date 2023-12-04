import React from 'react'
import Main from '../components/Main/Main'
import SideBar from '../components/SideBar/SideBar'
import MobileBar from '../components/MobileBar'

const Home = (props) => {
 const {openBurger, setOpenBurger, openNotif, setOpenNotif} = props
  return (
    <React.Fragment>
        <div className='flex'>
          <aside className='w-0 md:w-2/12 mx-0'>
            <SideBar/>
            {openBurger ? <MobileBar/> : 'null'}
            </aside>
          <main className='w-full md:w-10/12 mx-0'>
            <Main openBurger={openBurger} setOpenBurger={setOpenBurger} openNotif={openNotif} setOpenNotif={setOpenNotif}/>
            </main>
         
        </div>
    </React.Fragment>
  )
}

export default Home