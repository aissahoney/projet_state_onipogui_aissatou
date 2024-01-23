//Pick Add-Ons
import React from 'react';
import './Step3.css'

const Step3 = ({ step, setStep, data , pick, setPick, handlePick}) => {
    return (
        <div className='pick-container'>
            <div>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>

            {
                data.map((item, index) =>
                    <div key={index}  className='pick-div'>
                        <div >
                            <input type="checkbox" onClick={handlePick(item)}  />
                            <p>{item.title}</p>
                            <p>{item.text}</p>
                        </div >
                        <div>
                            {`+$${item.price}/mo`}
                        </div>

                    </div>
                )
            }



            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => setStep(step + 1)}>Next Step</button>
            </div>

        </div>
    );
};

export default Step3;


// pick={pick} onChange={() => {
//     setPick(!pick)}}