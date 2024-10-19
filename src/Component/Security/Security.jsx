import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Security = () => {
    return (
        <div className="bg-white h-[100vh]">
            <div className="pt-10 ml-6 lg:pt-24 lg:ml-12">
                <NavLink to="/profile" >
                    <IoIosArrowBack className="text-3xl text-[#2B416A]" />
                </NavLink>
            </div>

            <div className="bg-white   ">
                <div className=" px-8 mt-2 lg:px-28 container mx-auto">
                    <h1 className="text-[#00AEEF] text-xl font-bold">Security</h1>
                    <div className="mt-3 lg:mt-7">
                        <h2 className="text-[#2B416A] font-bold">Email</h2>
                        <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />
                    </div>
                    <div className="mt-3">
                        <h2 className="text-[#2B416A] font-bold">Password</h2>
                        <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />
                    </div>

                    {/* change pass */}
                    <div className="mt-6">
                        <h1 className="text-[#00AEEF] text-xl font-bold">Change Password</h1>
                        <div className="mt-3">
                            <h2 className="text-[#2B416A] font-bold">New Password</h2>
                            <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />
                        </div>
                        <div className="mt-3">
                            <h2 className="text-[#2B416A] font-bold">Retype New Password</h2>
                            <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />

                        </div>
                        <button className="btn w-full  mt-9 rounded-[50px] bg-[#00AEEF] border-none text-white">Save</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Security;