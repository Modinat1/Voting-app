import React from 'react'
import './ProgressBar.css'

const ProgressBar = (props) => {
    const {title, percent} = props
  return (
  <>

    <div className='progress_bar_container'>
    <div style={{width: `${percent}`}} className="progress_bar_fill"> {title} </div>
    <div className="progress_label">{percent}</div>
    </div>
    
    </>
  )
}

export default ProgressBar