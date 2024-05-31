import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';

const CardSlider = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            <span>&#8592;</span>
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            <span>&#8594;</span>
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = useLoaderData();
    
    return (
        <div className="card-slider-container lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">

            <Slider {...settings} className='px-1 lg:px-20 lg:py-10 '>

                <div>
                    {
                        <Card
                        key={data[0].id}
                        data={data[0]}
                    ></Card>
                    
                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[1].id}
                        data={data[1]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[2].id}
                        data={data[2]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[3].id}
                        data={data[3]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[4].id}
                        data={data[4]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[5].id}
                        data={data[5]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[6].id}
                        data={data[6]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[7].id}
                        data={data[7]}
                    ></Card>

                    }
                </div>

                <div>
                    {
                        <Card
                        key={data[8].id}
                        data={data[8]}
                    ></Card>

                    }
                </div>

            </Slider>

        </div>
    );
};

export default CardSlider;
