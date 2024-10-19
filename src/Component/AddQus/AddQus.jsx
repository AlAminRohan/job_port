import { NavLink } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

const AddQus = () => {
    return (
        <div className="bg-[#00AEEF] h-[100vh]">
            <div className="flex justify-end">
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-[200px]" alt="" />
            </div>

            <div className="bg-white h-[100vh] rounded-t-3xl">
                <div className=" px-6 lg:px-28 h-[100vh] container mx-auto">

                    <div className="">
                        <h1 className="text-[#2B416A] text-lg font-bold pt-5 ">Specific Questions for Job</h1>
                        <div className="mt-3">
                            <input className="bg-[#EFF1F3]  py-4 pl-12 rounded-3xl w-full border-none" placeholder="Type Your Question Here" />
                            <input className="bg-[#EFF1F3]  py-4 pl-12 mt-4 rounded-3xl w-full border-none" placeholder="Type Your Question Here" />
                            <input className="bg-[#EFF1F3]  py-4 pl-12 mt-4 rounded-3xl w-full border-none" placeholder="Type Your Question Here" />
                        </div>
                        <FaCirclePlus  className="text-[#00AEEF] text-2xl ml-2 mt-4"/>     
                        

                        <div className="">
                            <NavLink to="" className="btn bg-[#00AEEF] w-full mt-4 border-none text-white rounded-[50px] shadow-2xl ">Update & Preview</NavLink>
                            <NavLink to="" className="btn bg-[#00AEEF] w-full mt-3 border-none text-white rounded-[50px] shadow-2xl">Save</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQus;