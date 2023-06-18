import React from 'react';
import image from '../../assets/drammer.png'

const AboutPage = () => {
    return (
        <div className='max-w-screen-xl px-10 mx-auto py-10'>
            <div>
                <div className='md:flex items-center gap-20' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div className='md:w-1/2'>
                        <img src={image} alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-[#F65209]'>About Us</p>
                        <h1 className='text-3xl font-bold py-3'>Hello, this is <span className='text-[#F65209]'>Music Universe</span>. Our course helps to become successful in life</h1>
                        <p className='font-semibold py-2'>For a century, the Music Universe School of Music has been one of the professional schools of the University of Rochester. Our faculty and students are devoted to the pursuit of the highest level of musical artistry.</p>

                        <div className='flex justify-between'>
                            <div className='bg-[#f65209] px-5 py-2 text-white rounded'>
                                <h1 className='text-2xl font-bold'>850+</h1>
                                <p>Students</p>
                            </div>
                            <div className='bg-[#f65209] px-5 py-2 text-white rounded'>
                                <h1 className='text-2xl font-bold'>30+</h1>
                                <p>Courses</p>
                            </div>
                            <div className='bg-[#f65209] px-5 py-2 text-white rounded'>
                                <h1 className='text-2xl font-bold'>20+</h1>
                                <p>Instructor</p>
                            </div>
                        </div>
                        <div className='my-5'>
                            <button className='bg-[#f65209] text-white px-5 py-3 rounded w-full'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;