import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';


const PageHeading = () => {
    return (
        <div className='px-6'>
            <h1 className='font-semibold text-5xl font-Trispace mt-3'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <p className='text-[#848484] text-lg font-semibold mt-1'>Multi-Day-Course <AiOutlineQuestionCircle className='inline'/></p>
        </div>
    );
};

export default PageHeading;