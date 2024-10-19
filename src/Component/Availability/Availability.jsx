import { IoIosArrowBack } from "react-icons/io";

const Availability = () => {
    return (
        <div className="bg-[#FCFCFC] h-[100vh]">
            <div className="pt-4">
                <div className="flex justify-between  mx-8 mt-8 text-2xl text-[#2B416A]">
                    <IoIosArrowBack />
                </div>
                <div className="bg-[#FCFCFC]">
                    <div className="container mx-auto ">
                        <div className=" mx-10 ">
                            <h1 className="text-xl font-bold text-[#00AEEF] mt-2 ">Availability</h1>
                            <div>
                                <div>
                                    <div className="mt-3 lg:mt-7">
                                        <h2 className="text-[#2B416A] font-bold">Date</h2>
                                        <input className="bg-white mt-3 py-4 pl-12 rounded-2xl w-full border border-[#989898]" placeholder="01 | 04 | 2024" />
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="mt-3 lg:mt-3">
                                        <h2 className="text-[#2B416A] font-bold">Star</h2>
                                        <input className="bg-white mt-3 py-4 pl-12 rounded-2xl w-full border border-[#989898]" placeholder="9:00 AM" />
                                    </div>
                                    <div className="mt-3 lg:mt-3">
                                        <h2 className="text-[#2B416A] font-bold">End</h2>
                                        <input className="bg-white mt-3 py-4 pl-12 rounded-2xl w-full border border-[#989898]" placeholder="9:00 AM" />
                                    </div>
                                </div>
                                <button className="btn mt-4 w-full rounded-3xl bg-[#00AEEF] text-white border-none">Accept Time</button>
                                <button className="btn mt-4 w-full rounded-3xl bg-[#00AEEF] text-white border-none">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Availability;