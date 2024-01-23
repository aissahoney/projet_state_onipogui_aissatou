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
    // useEffect(()=>{
    //     console.log("info created", info)
    // },[info])
    return (
        <div className='infoContainer'>
            <div>
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <label className='formDiv'>
                    Your name is: {info.name}
                    <input type="name" name="name" onChange={handleChange} />
                </label>
                {/* <input type="submit" value="Envoyer" /> */}
                <label className='formDiv'>
                    Your email is: {info.email}
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                {/* <input type="submit" value="Envoyer" /> */}
                <label className='formDiv'>
                    Your phone number is: {info.phone}
                    <input type="phone" name="phone"  onChange={handleChange}/>
                </label>
                {/* <input type="submit" value="Envoyer" /> */}
                <button className='next-btn' onClick={()=>setStep(step + 1)}>Next Step</button>
            </form>
        </div>
    );
};

export default Step1