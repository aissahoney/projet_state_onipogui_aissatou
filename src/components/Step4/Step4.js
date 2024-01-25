//Finish Up
import React from 'react';
import './Step4.css'

const Step4 = ({ step, setStep, tabPicked, tabPlanChoice, checked }) => {
    return (
        <div className='finish-container'>
            <div>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='price-box'>

                {tabPlanChoice.map((item, index) =>
                    <div key={index} className='abonnement'  >
                        <div>
                            <p>{item.title} </p>
                        </div>


                        <div>
                            <pre> {`$${item.price}`} {checked ? item.monthly : item.yearly}</pre>
                        </div>
                    </div>
                )}
                {
                    tabPicked.map((item, index) =>
                        <div key={index}>
                            <div className='finish-pick'>
                                <p>{item.title}</p>
                                <p>{`$${item.price}`} {checked ? item.monthly : item.yearly}</p>
                            </div>
                        </div>
                    )
                }
                <p>Total (per month)</p>

            </div >
            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => setStep(step + 1)}>Confirm</button>
            </div>


        </div>
    );
};

export default Step4;