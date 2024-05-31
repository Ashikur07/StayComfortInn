import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ data }) => {
    
    const { id } = data;
    
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className=" h-[500px] card lg:w-96 bg-base-100 shadow-xl border border-[#d8c7c7]">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body mr-4 lg:mr-0">
                <h2 className="card-title">{data.estate_title}</h2>
                <p>{data.description}</p>

                <div className='flex justify-between py-3'>
                    <p className='flex'><GrLocation className='text-xl' /> &nbsp; <span>{data.location}</span></p>
                    <h1 className='font-bold'>Bill: {data.price}</h1>
                </div>

                <div className="flex items-center justify-between">
                    <p className='text-base font-semibold'>Type : {data.segment_name}</p>
                    <Link to={`/details/${id}`} className="btn bg-green-600 text-white hover:bg-green-800">View Property</Link>
                </div>
            </div>
        </div>
    );
};

Card.prototype = {
    data: PropTypes.object,
}

export default Card;
