//Select Your Plan 
import React, { useState } from 'react';
// import ReactSwitch from 'react-switch';
import './Step2.css'
// import img1 from '../../img/arcade.svg'
// import img2 from '../../img/advenced.svg'
// import img3 from '../../img/pro.svg'

const Step2 = ({ step, setStep, checked, setChecked, data,
    handlePlan }) => {
    // const [checked, setChecked] = useState(true);
    // const handleChange = val => {
    //     setChecked(val)
    // }
    return (
        <div className='selectContainer'>
            <div>
                <h1>Select Your Plan </h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className='icon-Bigcontainer'>
                <div className='icon-container'>
                    {
                        data.map((item, index) =>
                            <div key={index} className='icon-div' onClick={()=>handlePlan(item)}>
                                <img src={item.src} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p>$ {checked ? item.price : item.price * 10} {checked ? item.monthly : item.yearly}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className='switch-btn'>
                    <span>Monthly</span>
                    <input type="checkbox" checked={!checked} id="switch" onChange={() => {
                        setChecked(!checked);
                    }} />
                    <label for="switch"></label>
                    <span>Yearly</span>
                </div>
            </div>

            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => {setStep(step + 1)} }>Next Step</button>
            </div>

        </div>
    );
};

export default Step2;




