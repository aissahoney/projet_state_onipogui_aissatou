//Select Your Plan 
import React from 'react';
import './Step2.css'
// import img1 from '../../img/arcade.svg'
// import img2 from '../../img/advenced.svg'
// import img3 from '../../img/pro.svg'

const Step2 = ({ step, setStep, checked, setChecked, data,
    handlePlan, activeItemIndex, handleItemClick,tabPlanChoice}) => {
  
    return (
        <div className='selectContainer'>
            <div>
                <h1>Select Your Plan </h1>
                <p  className='color-grey'>You have the option of monthly or yearly billing</p>
            </div>
            <div className='icon-Bigcontainer'>
                <div className='icon-container'>
                    {

                        data.map((item, index) =>
                            <div key={index} className={index === activeItemIndex ? 'icon-active' : 'icon-div'}  onClick={()=>{handlePlan(item);handleItemClick(index)}}>
                                <img src={item.src} alt="" />
                                <div>
                                    <p className='color-blue'>{item.title}</p>
                                    <p className='color-grey'>${checked ? item.price : item.price *10} {checked ? item.monthly : item.yearly}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className='switch-btn'>
                    <span className={checked? 'color-blue':'color-grey'}>Monthly</span>
                    <input type="checkbox" checked={!checked} id="switch" onChange={() => {
                        setChecked(!checked);
                    }} />
                   
                    <label for="switch"></label>
                    <span className={!checked? 'color-blue':'color-grey'}>Yearly</span>
                </div>
            </div>

            <div className='btn-div'>
                <button className='back-btn' onClick={() => setStep(step - 1)}>Go Back</button>
                <button className='next-btn' onClick={() => {setStep(step + 1)}}  >Next Step</button>
            </div>

        </div>
    );
};

export default Step2;




