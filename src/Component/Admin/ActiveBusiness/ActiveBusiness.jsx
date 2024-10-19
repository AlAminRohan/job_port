import { IoIosArrowBack } from "react-icons/io";

import { FaCircle } from "react-icons/fa";


const ActiveBusiness = () => {
    return (
        <div className="bg-white h-[100vh]">
            <div className="pt-4">
                <div className="flex justify-between  mx-8 mt-8 text-2xl text-[#2B416A]">
                    <IoIosArrowBack />
                </div>

                <div className="container mx-auto">
                    <div className="mx-10">

                        <h1 className="text-xl font-bold text-[#00AEEF] mt-2 ">Business Name</h1>
                        <div className="mt-3">
                            <div className="flex justify-between items-center">
                                <p className="text-xs">Pharmacy</p>
                                <div>
                                    <div className="rating ">
                                        <input type="radio" name="rating-1" className="mask mask-star  " />
                                        <input type="radio" name="rating-1" className="mask mask-star " defaultChecked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#989898] flex items-center    lg:mt-5  ">
                                <FaCircle />
                                <p className="ml-2 text-sm">inactive</p>
                            </div>
                            <div className="flex justify-between mt-5 text-xs text-[#2B416A] font-bold">
                                <div>
                                    <p>123 Sample Street</p>
                                    <p>Belmore</p>
                                </div>
                                <div>
                                    <p>business@email.com</p>
                                    <p>123 456 7890</p>
                                </div>

                            </div>


                            <div className="mt-8">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Insurance</h1>
                                    <button className="btn w-full bg-[#EFF1F3] border-none rounded-3xl mt-1">View</button>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-[#00AEEF] font-bold">ABN</h1>
                                    <button className="btn w-full bg-[#EFF1F3] border-none rounded-3xl mt-1">View</button>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-[#00AEEF] font-bold">ACN</h1>
                                    <button className="btn w-full bg-[#EFF1F3] border-none rounded-3xl mt-1">View</button>
                                </div>

                                <button className="btn w-full bg-[#00AEEF] text-white border-none rounded-3xl mt-10">Send Message</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ActiveBusiness;