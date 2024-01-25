//Finish Up
import React from 'react';
import './Step4.css'

const Step4 = ({ step, setStep, tabPicked, tabPlanChoice, checked, totalPrice, setTotalPrice}) => {

    setTotalPrice(tabPicked.reduce((acc, current) => acc + current.price, tabPlanChoice.price))
    return (
        <div className='finish-container'>
            <div>
                <h1>Finishing up</h1>
                <p className='color-grey'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='price-box'>
                    <di className='abonnement'  >
                        <div >
                            <p className='color-blue' >{tabPlanChoice.title} {checked ? "(Monthly)" : "(Yearly)"} </p>
                            <p  className='change-btn'onClick={() => setStep(step - 2)}>Change</p>
                        </div>
                        <div className='color-blue'>
                            <p> ${checked ? tabPlanChoice.price : tabPlanChoice.price *10} {checked ? tabPlanChoice.monthly : tabPlanChoice.yearly}</p>
                            
                        </div>
                        
                    </di>
                {
                    tabPicked.map((item, index) =>
                        <div key={index}>
                            <div className='finish-pick'>
                                <p className='color-grey'>{item.title}</p>
                                <p className='color-blue'>$ {checked ? item.price : item.price*10} {checked ? item.monthly : item.yearly}</p>
                            </div>
                        </div>
                    )
                }
                <div className='total-div'>
                <p className='color-grey'> Total {checked ? "(per month)" : "(per year)"}</p>
                <h2 className='color-purple'>${checked ? totalPrice: totalPrice*10} {checked ? tabPlanChoice.monthly : tabPlanChoice.yearly} </h2>
                </div>
            </div >
            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => setStep(step + 1)}>Confirm</button>
            </div>


        </div>
    );
};

export default Step4;