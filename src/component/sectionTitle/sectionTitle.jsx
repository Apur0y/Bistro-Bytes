import React from 'react';

const TitleName = ({heading,subHeading}) => {
    return (
        <div className='mx-auto md:w-4/12'>
             <p className='text-yellow-600 text-center'>---{subHeading}---</p>
             <h3 className='text-4xl uppercase text-center '>{heading}</h3>
        </div>
    );
};

export default TitleName;


