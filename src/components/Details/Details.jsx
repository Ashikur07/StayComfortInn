import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    useEffect(() => {
        document.title = 'Details';
      }, []);

    const data = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const Data = data.find(data => data.id === idInt);


    return (
        <div className="bg-[#e0d5d5] px-5 lg:p-16 pt-10 pb-20 lg:pb-32">

            <div className="text-lg rounded-2xl p-4 lg:p-8 bg-white flex flex-col lg:flex-row gap-4 lg:gap-8  border-black">

                <img data-aos="zoom-in-right" data-aos-duration="1000" className="lg:w-[700px] lg:h-[630px] rounded-xl lg:rounded-2xl" src={Data.image} alt="" />

                <div data-aos="zoom-in-left" data-aos-duration="1000" className="bg-[#f6f2f2] shadow rounded-xl p-8">
                    <h1 className="text-3xl lg:text-4xl font-bold">{Data.estate_title}</h1>
                    <p className="pr-8 py-3">{Data.description}</p>
                    <h3 className="text-xl pb-4 font-bold border-b-2 border-dashed border-[#957b7b]">Type : {Data.segment_name}</h3>

                    <div className="py-4 text-base font-semibold border-b-2 border-dashed border-[#957b7b]">
                        <h1 className="text-xl font-bold">Facilities : </h1>
                        <div className="pt-2 space-y-1">
                            <li>{Data.facilities[0]}</li>
                            <li>{Data.facilities[1]}</li>
                            <li>{Data.facilities[2]}</li>
                            <li>{Data.facilities[3]}</li>
                        </div>
                    </div>

                    <div className="space-y-1 pt-4">
                        <div className="flex gap-10">
                            <h1>Price : <span className="font-bold">{Data.price}</span></h1>
                            <p>Status : <span className="font-bold">{Data.status}</span></p>
                        </div>
                        <p className="font-semibold">
                            Location : {Data.location}
                        </p>
                        <p className="font-bold">
                            Area : {Data.area}
                        </p>
                    </div>

                    <Link to='/' className="mt-6 ml-16 lg:ml-[190px] btn btn-success">Back to Home</Link>

                </div>
            </div>
        </div>
    );
};

export default Details;