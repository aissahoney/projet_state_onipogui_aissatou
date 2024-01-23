//Finish Up
import React from 'react';
import './Step4.css'

const Step4 = ({step, setStep}) => {
    return (
        <div>

            <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
            <button className='next-btn' onClick={()=>setStep(step + 1)}>Confirm</button>

        </div>
    );
};

export default Step4;