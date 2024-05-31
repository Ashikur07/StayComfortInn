import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";


const Contract = () => {

    useEffect(() => {
        document.title = 'Contract';
      }, []);

    return (
        <div  className="animate__animated animate__zoomIn flex justify-center py-16 lg:h-[60vh] mx-4 lg:mx-0">

            <div className="px-5 py-14 lg:py-0 lg:px-0 pt-2 text-center lg:w-[800px] bg-cyan-300 rounded-2xl">

                <h1 className="text-3xl font-semibold py-6"> Office Address</h1>
                <p className="text-lg leading-7">
                    Level-4, 34, Awal Centre, Banani, Dhaka <br />
                    Support: web@staycomfortlnn.com <br />
                    Helpline: 01322901105 <br />
                    (Available : Sat - Thu, 10:00 AM to 7:00 PM)
                </p>

                <div className="mt-6  flex text-3xl gap-6 justify-center">
                    <FaFacebookF /> <BsTwitter /><FaTelegramPlane />
                </div>

            </div>
        </div>
    );
};

export default Contract;