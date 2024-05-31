// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerContent from '../BannerContent/BannerContent';

const Banner = () => {
    return (
        <div className=' w-[100%] lg:h-[600px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative'>
                        <img className=' banner-img' src="https://i.ibb.co/SxRBWD9/marc-babin-9-Izr-XQakxk0-unsplash.jpg" alt="" />
                        {
                            <BannerContent></BannerContent>
                        }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/dkpKBNC/photo-1520250497591-112f2f40a3f4-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                        {
                            <BannerContent></BannerContent>
                        }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/pKYNbdG/photo-1584132967334-10e028bd69f7-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                        {
                            <BannerContent></BannerContent>
                        }

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;