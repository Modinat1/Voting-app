import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CreateForm.css'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CreatePollForm = () => {
  const [addOption, setAddOption] = useState(false)

  const registrationSchema = Yup.object().shape({
  question: Yup.string().required('Please enter your question'),
  option_1: Yup.string().required('Please enter an option'),
  option_2: Yup.string().required('Please enter an option'),
  poll_duration: Yup.string().required('Please a poll duration'),
  poll_type: Yup.string().required('Please a poll type')
  
});
 const formik = useFormik({
    initialValues: {
      question: '',
      option_1: '',
      option_2: '',
      more_option: '',
      poll_duration: '',
      poll_type: ''
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  });
  return (
    <>
    <form onSubmit={formik.handleSubmit} className='create_poll_form'>
      <div className='flex items-center'>
        <Link to="/mypolls"> <button className='font-900 my-5'><BsArrowLeft /></button></Link>
        <h2 className='font-bold ml-3 my-5 text-xl'>Create poll</h2>
      </div>

    <div className="form-group">
      <label htmlFor="question">Poll question</label>
      <input type="text" id="question" name="question" value={formik.values.question} onChange={formik.handleChange} placeholder='Enter your question'/>
      {formik.errors.question && <div style={{color: "red"}}>{formik.errors.question}</div>}
        </div>

    <div className="form-group">
      <label htmlFor="option_1">Option 1</label>
      <input type="text" id="option_1" name="option_1" value={formik.values.option_1} onChange={formik.handleChange} placeholder='Type option'/>
      {formik.errors.option_1 && <div style={{color: "red"}}>{formik.errors.option_1}</div>}
    </div>

    <div className="form-group">
      <label htmlFor="option_2">Option 2</label>
      <input type="text" id="option_2" name="option_2" value={formik.values.option_2} onChange={formik.handleChange} placeholder='Type option'/>
      {formik.errors.option_2 && <div style={{color: "red"}}>{formik.errors.option_2}</div>}
    </div>

<div className="add_option">
  <div className="add_option_btn_div">
<button onClick={()=>setAddOption(!addOption)}>{!addOption ? "+" : "-"}</button>
  </div>
<label style={{color: "#4foda3"}} htmlFor="Add option">Add option</label>
</div>

{addOption ?  <div className="form-group">
      <label htmlFor="more_option">More options</label>
      <input type="text" id="more_option" name="more_option" value={formik.values.more_option} onChange={formik.handleChange} placeholder='More option'/>
    </div>
 : null}

    <div className="form-group">
      <label htmlFor="poll_duration">Poll duration</label>
      <select name="poll_duration" id="poll_duration" value={formik.values.poll_duration} onChange={formik.handleChange}>
      <option value="" selected disabled>Select one</option>
      <option value="1 month">1 month</option>
      <option value="2 months">2 months</option>
      {formik.errors.poll_duration && <div style={{color: "red"}}>{formik.errors.poll_duration}</div>}
</select>
    </div>

    <div className="form-group">
      <label htmlFor="poll_type">Poll type</label>
      <select name="poll_type" id="poll_type" value={formik.values.poll_type} onChange={formik.handleChange}>
      <option value="" disabled selected>Select one</option>
      <option value="hourly">Hourly</option>
      <option value="monthly">Monthly</option>
      {formik.errors.poll_type && <div style={{color: "red"}}>{formik.errors.poll_type}</div>}
      </select>
    </div>


    
      <button className="create_poll_form_btn" type="submit">Create poll</button>

      </form>
    </>
  )
}

export default CreatePollForm





  


