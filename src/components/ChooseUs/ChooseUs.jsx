
const ChooseUs = () => {
    return (
        <div className="my-24 flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-12 mx-2 lg:mx-32 p-3 lg:p-8 shadow-2xl border border-[#cbbcbc] lg:my-32">

            <div data-aos="fade-right" data-aos-duration="1000">
                <img className="lg:h-[630px] lg:w-[650px] rounded-2xl" src="https://i.ibb.co/DbJn8RQ/photo-1606046604972-77cc76aee944-q-80-w-1935-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="px-5 mb-10 lg:mb-0">
                <h1 className="ml-5 lg:ml-0 text-2xl lg:text-3xl mt-5 font-bold lg:leading-[45px]"> Why choose us <br /> to buy or rent your  dream <br /> Accommodations? </h1>

                <div className="flex gap-6 mt-12">  
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/18hvwtL/111.png" alt="" />
                    <div>
                        <h1 className=" text-xl font-semibold">Exceptional Craftsmanship</h1>
                        <p>Our homes are more than structures -they're crafted with unparalleled attention to detail</p>
                    </div>
                </div>

                <div className="flex gap-6 mt-6">
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/1GmgWgc/smart.png" alt="" />
                    <div>
                        <h1 className=" text-xl font-semibold">Smart Investment</h1>
                        <p>Our Properties not only offer a dream living space but also promise a sound investment for your future</p>
                    </div>
                </div>

                <div className="flex gap-6 mt-6">
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/VVSKc5g/effort.png" alt="" />
                    <div>
                        <h1 className=" text-xl font-semibold">Effortless Ownership</h1>
                        <p>Enjoy a hassle-free buy or rent our service with our dedicated team guiding you every step of the way</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ChooseUs;