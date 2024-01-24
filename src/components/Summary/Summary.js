//Thank You
import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div className='summary'>
            <img src="./img/thankyou.svg" alt="" />
            <h1>Thank You !</h1>
            <div className=''>
                <p>Thanks for confirming your subscription! We hope you have</p>
                <p>fun using our platform. If you ever need support, please</p>
                <p>feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    );
};

export default Summary;