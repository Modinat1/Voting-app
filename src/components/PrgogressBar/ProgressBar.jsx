import React from 'react'
import './ProgressBar.css'

const ProgressBar = (props) => {
    const {title, percent, openRequestModal, setOpenRequestModal} = props
  return (
  <>

    <div className='progress_bar_container' onClick={()=>setOpenRequestModal(!openRequestModal)}>
    <div style={{width: `${percent}`}} className="progress_bar_fill"> {title} </div>
    <div className="progress_label">{percent}</div>
    </div>
    
    </>
  )
}

export default ProgressBar