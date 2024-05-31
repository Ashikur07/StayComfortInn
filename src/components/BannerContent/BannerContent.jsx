import { MdKeyboardArrowDown } from "react-icons/md";

const BannerContent = () => {
    return (

        <div className='top-1/3  md:lg:top-1/3 left-[6%]  md:left-[5%] lg:left-[20%] absolute'>
            <h1 className='animate__animated animate__zoomIn text-2xl md:text-4xl lg:text-4xl font-bold text-white'><span className="">Discover Your</span> <span className='text-[#FFB901]'>Dream Accommodations</span> Today!</h1>
            <p className='text-white text-base font-medium pt-2 pb-5 hidden lg:block'>Explore Envision , and Make it Yours! Start Your Journey Now.</p>

            <div className='space-y-1 hidden lg:block'>
                <div className='bg-white gap-7 py-2 rounded-t-2xl px-5 font-bold text-base flex w-36'>
                    <h1>Buy</h1>
                    <p className='text-red-700'>Rent</p>
                </div>


                <div className='bg-[#ede5e5] rounded-xl flex justify-between p-6 lg:w-[950px]'>

                    <div className='border-r border-[#977e7e] pr-12'>
                        <h1 className='font-bold'>Location</h1>
                        <p className='text-base flex items-center gap-2'><span>Select your location</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <div className='border-r border-[#977e7e] pr-12'>
                        <h1 className='font-bold'>Type</h1>
                        <p className='text-base flex items-center gap-2'><span>Please Select Type</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <div className='border-r border-[#977e7e] pr-12'>
                        <h1 className='font-bold'>Budget</h1>
                        <p className='text-base flex items-center gap-2'><span>Choose Your budget</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <button className='px-6 btn bg-green-700 text-white hover:bg-green-900'>Search</button>

                </div>
            </div>

        </div>
    );
};

export default BannerContent;