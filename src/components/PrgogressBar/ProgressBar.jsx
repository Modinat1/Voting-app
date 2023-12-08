import React from 'react'
import './ProgressBar.css'
// import { Link } from 'react-router-dom'

const ProgressBar = (props) => {
    const {title, percent, openRequestModal, setOpenRequestModal} = props
  return (
  <>

    <div className='progress_bar_container' onClick={()=>setOpenRequestModal(!openRequestModal)}>
    {/* <div className='progress_bar_container'> */}
    <div style={{width: `${percent}`}} className="progress_bar_fill"> {title} </div>
    <div className="progress_label">{percent}</div>
    {/* <Link to="/request/acess"><div style={{width: `${percent}`}} className="progress_bar_fill"> {title} </div></Link> */}
    {/* <Link to="/request/acess"><div className="progress_label">{percent}</div></Link> */}
    </div>
    
    </>
  )
}

export default ProgressBar