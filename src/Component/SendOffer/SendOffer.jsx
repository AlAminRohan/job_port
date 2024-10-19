import { IoIosArrowBack } from "react-icons/io";
const SendOffer = () => {
    return (
        <div className="bg-white h-[100vh]">
            <div className="pt-4">
                <div className="flex justify-between  mx-8 mt-8 text-2xl text-[#2B416A]">
                    <IoIosArrowBack />
                </div>
                <div className="bg-white">
                    <div className="container mx-auto ">
                        <div className=" mx-10 ">
                            <h1 className="text-xl font-bold text-[#00AEEF] mt-2 ">Send Offer</h1>
                            <div>
                                <div>
                                    <div className="mt-3 lg:mt-7">
                                        <h2 className="text-[#2B416A] font-bold">Date</h2>
                                        <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Date" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-3 lg:mt-3">
                                        <h2 className="text-[#2B416A] font-bold">Time</h2>
                                        <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Date" />
                                    </div>
                                </div>
                                <button className="btn mt-4 w-full rounded-3xl bg-[#00AEEF] text-white border-none">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendOffer;