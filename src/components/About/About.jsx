import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    useEffect(() => {
        document.title = 'About';
      }, []);

    return (
        <div className='animate__animated animate__zoomIn flex justify-center lg:h-[90vh]'>

            <div className='mx-5 flex flex-col lg:flex-row gap-5 rounded-2xl my-14 lg:my-24 lg:h-[400px] lg:w-[1150px] bg-base-300 shadow-xl'>
                <img className='rounded-r-2xl lg:rounded-r-none rounded-l-2xl lg:h-full' src="https://i.ibb.co/9VXFZJk/photo-1622151834677-70f982c9adef-q-80-w-1986-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />

                <div className='text-center pr-5'>
                    <div className='lg:ml-32 mt-8 mb-8 lg:mb-0'>
                        <h1 className='text-3xl font-bold'>Johnathan Mitchell</h1>
                        <p className='font-bold'>@ mitchell</p>
                    </div>

                    <div className='lg:ml-14 lg:mt-12 flex flex-col lg:flex-row w-full justify-between gap-2 lg:gap-0'>
                        <div className='bg-white p-2 lg:p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>Experience(year)</h1>
                            <p className='text-5xl'>13</p>
                        </div>

                        <div className='bg-white p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>follower</h1>
                            <p className='text-5xl'>1930</p>
                        </div>

                        <div className='bg-white p-5 rounded-lg mx-14 lg:mx-0'>
                            <h1 className='text-lg'>following</h1>
                            <p className='text-5xl'>76</p>
                        </div>
                    </div>

                    <Link to='/contract' className='lg:ml-28 mt-8 border-none btn btn-success bg-cyan-400 mb-10 lg:mb-0'>Contact us</Link>
                </div>
               
            </div>
        </div>
    );
};

export default About;