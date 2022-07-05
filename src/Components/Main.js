import React from 'react';
import { AiFillStar,AiOutlineRight,AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';


const Main = () => {
    return (
        <div className='mt-10 flex'>

            <div className='flex-1'>
                <p>In this 5 days class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate painting using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>

                {/* avatar */}
                <div className='flex justify-start items-center mt-5'>
                    <div class="avatar w-6  ">
                        <img className='rounded-full' src="https://placeimg.com/192/192/people" alt='avatar' />
                    </div>
                    <p className='text text-primary ml-2 font-semibold'>Kimberly R Moseler</p>
                </div>

                {/* ratings and comments*/}
                <div className='flex justify-start items-center'>
                    {/* ratings */}
                    <div className='text-yellow-400 text-xl flex mt-3'>
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
                    <div className='text-yellow-400 text-xl flex mt-3'>
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
                        <button class="btn rounded-full normal-case  btn-sm px-6 bg-primary mr-10">See Class Schedule <AiOutlineRight/></button>
                    </div>

                    <div className='text-primary mr-10'>
                        <p><AiOutlineHeart className='inline'/> <span className='font-semibold'>Save</span></p>
                    </div>

                    <div className='text-primary'>
                        <p><RiShareForwardLine className='inline'/> <span className='font-semibold'>Share</span></p>
                    </div>

                    
                </div>

            </div>


            <div className='flex-1'>

            </div>

        </div>
    );
};

export default Main;