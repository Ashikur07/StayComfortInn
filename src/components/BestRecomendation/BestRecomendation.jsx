import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const BestRecomendation = () => {

    const data = useLoaderData();
    return (
        <div>

            <div className='text-center space-y-3 mb-8'>
                <h1 className='text-4xl font-bold'>Best Recommendation</h1>
                <p className='text-[17px]'>Explore our top recommendations on the website, offering expert  insights and tailored <br /> solutions for your needs.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 mx-2 lg:mx-40'>

                <div data-aos="zoom-in-right" data-aos-duration="1000">
                    {
                        <Card
                            key={data[1].id}
                            data={data[1]}
                        ></Card>

                    }
                </div>

                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    {
                        <Card
                            key={data[5].id}
                            data={data[5]}
                        ></Card>

                    }
                </div>

                <div data-aos="zoom-in-left" data-aos-duration="1000">
                    {
                        <Card
                            key={data[2].id}
                            data={data[2]}
                        ></Card>

                    }
                </div>

            </div>
        </div>
    );
};

export default BestRecomendation;