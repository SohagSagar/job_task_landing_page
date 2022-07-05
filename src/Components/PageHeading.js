import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import '../Styles/PageHeading.css';


const PageHeading = () => {
    return (
        <div className='pageHeading'>
            <h1 className='font-bold text-5xl font-Trispace mt-3'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <p className='text-[#848484] lg:text-lg sm:text-sm font-semibold mt-1'>Multi-Day-Course <AiOutlineQuestionCircle className='inline'/></p>
        </div>
    );
};

export default PageHeading;