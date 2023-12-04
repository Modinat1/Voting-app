import React, {useState} from 'react'
import Main from '../components/Main/Main'
import SideBar from '../components/SideBar/SideBar'
import MobileBar from '../components/MobileBar'
import RequestAccess from '../components/RequestAccess'

const Home = (props) => {
 const {openBurger, setOpenBurger, openNotif, setOpenNotif} = props
 const [openRequestModal, setOpenRequestModal] = useState(false)
  return (
    <React.Fragment>
      <section className='home_section'>
        {openRequestModal ? <RequestAccess/> : null}
        
        <div className='flex'>
          <aside className='w-0 md:w-2/12 mx-0'>
            <SideBar/>
            {openBurger ? <MobileBar/> : 'null'}
            </aside>
          <main className='w-full md:w-10/12 mx-0'>
            <Main openBurger={openBurger} setOpenBurger={setOpenBurger} openNotif={openNotif}
             setOpenNotif={setOpenNotif}openRequestModal={openRequestModal} setOpenRequestModal={setOpenRequestModal}/>
            </main>
         
        </div>
        </section>
    </React.Fragment>
  )
}

export default Home