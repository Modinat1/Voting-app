import React, {useState} from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import salem from '../assets/salem.png'
// import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import ApprovedWithdrawal from './ApprovedWithdrawal';

const PollResult = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <React.Fragment>
        {showModal? <ApprovedWithdrawal/> : null}
        <section className='poll_result_container'>
       <div className='flex items-center'>
        <Link className='font-900 mt-1' to="/mypolls"> <button><BsArrowLeft /></button></Link>
        <h2 className='font-bold ml-3 text-xl'>Poll result</h2>
      </div>

        <div className='my-5'>
      <h2 className='text-xl font-semibold'>What is your preferred programming language</h2>
      <small>252 votes</small>
        </div>

      <article>
        <div className='programming_lang mb-5'>
        <div className='flex justify-between items-center py-2'>
            <div>
            <h2 className='font-semibold'>Python</h2>
            <small>252 votes</small>
            </div>
            
            
            <BsChevronUp/>
        </div>
</div>
        <Result showModal={showModal} setShowModal={setShowModal}/>
        <Result showModal={showModal} setShowModal={setShowModal}/>
        <Result showModal={showModal} setShowModal={setShowModal}/>
        <Result showModal={showModal} setShowModal={setShowModal}/>
        {/* <Result showModal={showModal} setShowModal={setShowModal}/> */}
      </article>
        </section>
         
      
        
    </React.Fragment>
  )
}

export default PollResult


const Result = (props) =>{
    const {showModal, setShowModal} = props
    return(
        <section className='my-3'>
         <div className='flex justify-between items-center'>
            <div className="flex">
            <div className='mr-3'>
            <img src={salem} alt="" />
            </div>

            <div>
                <h4 className='font-bold'>Salem Lawal</h4>
                <h6>Product designer</h6>
                <small>Lagos, Nigeria</small>
            </div>
            </div>

            <button className='stick_btn' onClick={()=>setShowModal(!showModal)}>Stick</button>
        </div>
        </section>

    )
}