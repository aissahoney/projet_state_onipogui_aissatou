import React from 'react';
import './SideBar.css'


const SideBar = ({step}) => {


    return (
        <div className='sideBar'>
            <div className='step'>
                <button className={step === 1 ? 'step-active' : 'transparent'}> 1 </button>
                <div>
                    <p>step 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>

            <div className='step'>
                <button className={step === 2 ? 'step-active' : 'transparent'}> 2 </button>
                <div>
                    <p>step 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>

            <div className='step'>
                <button className={step === 3 ? "step-active" :"transparent"}> 3 </button>
                <div>
                    <p>step 3</p>
                    <p>ADD-ONS</p>
                </div>
            </div>
            
            <div className='step'>
                <button className={step === 4 ? 'step-active' :'transparent'}> 4 </button>
                <div>
                    <p>step 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>

        </div>
    );
};

export default SideBar;