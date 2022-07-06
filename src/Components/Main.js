import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineRight, AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';

import '../Styles/Main.css';


const Main = () => {
    const [images, setImages] = useState([]);

    const img1=images[0]?.image_1;
    const img2=images[1]?.image_2;
    const img3=images[2]?.image_3;

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='mt-10 flex justify-center left-content'>
            {/* contents of the left side */}

            <div className='lg:flex-1 pr-10'>
                <p className='font-semibold'>In this 5 days class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate painting using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>

                {/* avatar */}
                <div className='flex justify-start items-center mt-5'>
                    <div className="avatar w-6  ">
                        <img className='rounded-full' src="https://placeimg.com/192/192/people" alt='avatar' />
                    </div>
                    <p className='text text-primary ml-2 font-semibold'>Kimberly R Moseler</p>
                </div>

                {/* ratings and comments*/}
                <div className='flex justify-start items-center'>
                    {/* ratings */}
                    <div className='text-yellow-400 lg:text-xl text-lg flex mt-3'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    {/* comments */}

                    <div>
                        <p className='ml-2 text-sm text-[#848484]  mt-3'>467 total reviews for this teacher</p>
                    </div>
                </div>

                <div className='flex justify-start items-center leading-loose'>
                    {/* ratings */}
                    <div className='text-yellow-400 lg:text-xl text-lg flex mt-3'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    {/* comments */}

                    <div>
                        <p className='ml-2 text-sm text-[#848484]  mt-3'>5 reviews for this class</p>
                    </div>
                </div>

                <p className='font-semibold text-sm mt-2'>Completed by 21 learners</p>


                {/* button area */}

                <div className='py-5 flex items-center'>
                    <div>
                        <button className="btn rounded-full normal-case  btn-sm lg:px-6 bg-primary lg:mr-10 mr-5">See Class Schedule <AiOutlineRight /></button>
                    </div>

                    <div className='text-primary lg:mr-10 mr-5'>
                        <p><AiOutlineHeart className='inline' /> <span className='font-semibold'>Save</span></p>
                    </div>

                    <div className='text-primary '>
                        <p><RiShareForwardLine className='inline' /> <span className='font-semibold'>Share</span></p>
                    </div>


                </div>

            </div>


            {/* contents of the right side */}

            <div className=' flex gap-1 right-content '>

                <div>
                    <img className='w-[250px] h-[300px]' src={img1} alt="" srcSet="" />
                </div>

                <div className='flex flex-col gap-1 '>
                    <img className='w-[250px] h-[148px] rounded-tr-lg' src={img2} alt="" srcSet="" />
                    <img className='w-[250px] h-[148px]' src={img3} alt="" srcSet="" />
                </div>

            </div>

        </div>
    );
};

export default Main;
