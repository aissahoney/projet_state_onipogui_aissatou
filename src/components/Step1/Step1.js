//Persona Info
import React, {useState } from 'react';
import './Step1.css'

const Step1 = ({step, setStep}) => {
    // const[name, setName]= useState('')
    // const[email, setEmail]= useState('')
    // const[phone, setPhone]= useState('')
    const [info, setInfo] = useState({
        name : '',
        email : '',
        phone :''
    })
    const handleChange = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("info created", info)
    }
    return (
        <div className='infoContainer'>
            <div>
                <h1>Personal info</h1>
                <p className='color-grey'>Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <label className='formDiv'>
                    Your name is: {info.name}
                    <input type="name" name="name" placeholder='bikette bulte' onChange={handleChange} />
                </label>
                <label className='formDiv'>
                    Your email is: {info.email}
                    <input type="email" name="email" placeholder='bikette@bulte.com' onChange={handleChange} />
                </label>
                <label className='formDiv'>
                    Your phone number is: {info.phone}
                    <input type="phone" name="phone" placeholder='04568865' onChange={handleChange}/>
                </label>
                <div  className='btn-step1'>
                    <button className='next-btn' onClick={()=>setStep(step + 1)}>Next Step</button>
                </div>
                
            </form>
        </div>
    );
};

export default Step1