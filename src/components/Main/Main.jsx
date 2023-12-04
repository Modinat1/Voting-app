import React from 'react'
import MainCol1 from './MainCol1'
import './Main.css'
import Header from '../Header'
import MainCol2 from './MainCol2'
import MobileHeader from '../MobileHeader'
import MobileNotif from '../MobileNotif'


const Main = (props) => {
  const {openBurger, setOpenBurger, openNotif, setOpenNotif, openRequestModal, setOpenRequestModal} = props
  return (
    <React.Fragment>
      <section>
        <Header/>
        <MobileHeader openNotif={openNotif} setOpenNotif={setOpenNotif}/>
        <div className='main_grid'>
        <MainCol1 openBurger={openBurger} setOpenBurger={setOpenBurger} openRequestModal={openRequestModal} setOpenRequestModal={setOpenRequestModal}/>
        <MainCol2/>
        
        {openNotif ? <MobileNotif/> : null}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Main