import React from 'react';
import "./CommonStyle/Heading.css";

function Heading({ subTitle, title }) {

    return (
        <>
            <div className='heading-text'>
                <div className='container'>
                    <div className='text-center'>
                        <h6>{subTitle}</h6>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading