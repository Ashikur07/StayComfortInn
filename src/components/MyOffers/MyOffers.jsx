import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const MyOffers = () => {

    const data = useLoaderData();
    
    useEffect(() => {
        document.title = 'My Offers';
      }, []);


    return (
        <div className='pt-10 lg:pt-14 pb-32 lg:pb-40'>

            <div className='animate__animated animate__zoomIn text-center space-y-2 mb-8 px-4'>
                <h1 className='text-4xl font-bold'>Your Best Offers</h1>
                <p className='text-[17px]'>Explore our latest promotions and discover unbeatable deals on our top products, tailored just for you, <br /> ensuring you get the best value possible.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 lg:mx-40'>

                <div className='relative w-full'>
                    {
                        <Card
                            key={data[1].id}
                            data={data[1]}
                        ></Card>
                    }
                    <div className='animate__animated animate__bounceInDown text-white -rotate-[15deg] text-center flex flex-col justify-center bg-[#FF5400] rounded-full h-32 lg:h-36 w-32 lg:w-36 absolute right-0 top-36'>
                        <h1 className='text-4xl lg:text-[40px] font-bold'>60 %</h1>
                        <p className='text-2xl lg:text-3xl font-semibold'>OFF</p>
                    </div>
                </div>

                <div className='relative w-full'>
                    {
                        <Card
                            key={data[3].id}
                            data={data[3]}
                        ></Card>
                    }
                    <div className='animate__animated animate__bounceInDown text-white -rotate-[15deg] text-center flex flex-col justify-center bg-[#FF5400] rounded-full h-32 lg:h-36 w-32 lg:w-36 absolute right-0 top-36'>
                        <h1 className='text-4xl lg:text-[40px] font-bold'>40 %</h1>
                        <p className='text-2xl lg:text-3xl font-semibold'>OFF</p>
                    </div>
                </div>

                <div className='relative w-full'>
                    {
                        <Card
                            key={data[6].id}
                            data={data[6]}
                        ></Card>
                    }
                    <div className='animate__animated animate__bounceInDown text-white -rotate-[15deg] text-center flex flex-col justify-center bg-[#FF5400] rounded-full h-32 lg:h-36 w-32 lg:w-36 absolute right-0 top-36'>
                        <h1 className='text-4xl lg:text-[40px] font-bold'>70 %</h1>
                        <p className='text-2xl lg:text-3xl font-semibold'>OFF</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyOffers;