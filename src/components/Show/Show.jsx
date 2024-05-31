import React from 'react';

const Show = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 my-24 mx-2 lg:mx-40'>

            <div className='space-y-4'>
                <div className='relative' data-aos="zoom-in" data-aos-duration="1000">
                    <img className='h-[300px] md:h-[600px] lg:h-[350px] rounded-2xl w-full' src="https://i.ibb.co/j5q5yBn/photo-1578683010236-d716f9a3f461-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className='text-white absolute left-20 bottom-10 text-4xl font-bold'>Hotel</p>
                </div>

                <div className='relative' data-aos="zoom-in-down" data-aos-duration="1000">
                    <img className='h-[300px] md:h-[600px] lg:h-[350px] rounded-2xl w-full' src="https://i.ibb.co/qLHMjP6/premium-photo-1683917068755-c2890e4824e1-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className='text-white absolute left-20 bottom-10 text-4xl font-bold'>vacation rentals</p>
                </div>
            </div>

            <div className='relative' data-aos="zoom-in-up" data-aos-duration="1000">
                <img className='h-[300px] md:h-[600px] lg:h-[716px] w-full rounded-2xl' src="https://i.ibb.co/30q23jk/photo-1571003123894-1f0594d2b5d9-q-80-w-1949-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                <p className='text-white absolute left-32 lg:left-60 bottom-20 text-4xl font-bold'>Resort</p>
            </div>

        </div>
    );
};

export default Show;