//Finish Up
import React from 'react';
import './Step4.css'

const Step4 = ({ step, setStep, tabPicked, tabPlanChoice, checked}) => {
    
    const totalPrice = tabPicked.reduce((acc, current) => acc + current.price, tabPlanChoice.price);


    return (
        <div className='finish-container'>
            <div>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='price-box'>
                    <di className='abonnement'  >
                        <div>
                            <p>{tabPlanChoice.title} {checked ? "(Monthly)" : "(Yearly)"} </p>
                            <p>Change</p>
                        </div>
                        <div>
                            <pre> ${checked ? tabPlanChoice.price : tabPlanChoice.price *10} {checked ? tabPlanChoice.monthly : tabPlanChoice.yearly}</pre>
                            
                        </div>
                        
                    </di>
                {
                    tabPicked.map((item, index) =>
                        <div key={index}>
                            <div className='finish-pick'>
                                <p>{item.title}</p>
                                <p>${checked ? item.price : item.price*10} {checked ? item.monthly : item.yearly}</p>
                            </div>
                        </div>
                    )
                }
                <p>{totalPrice }(per month)</p>

            </div >
            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => setStep(step + 1)}>Confirm</button>
            </div>


        </div>
    );
};

export default Step4;