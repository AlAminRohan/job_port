
import { NavLink } from "react-router-dom";


const Question = () => {
    return (
        <div className="bg-[#00AEEF] h-[100vh]">
            <div className="flex justify-end">
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-[200px]" alt="" />
            </div>

            <div className="bg-white h-[100vh] rounded-t-3xl">
                <div className=" px-6 lg:px-28  container mx-auto">

                    <div className="">
                        <div>
                            <h2 className="text-[#2B416A] font-bold pt-4 ">What Pharmacy Software Have You Used?</h2>
                            <textarea
                                placeholder="Enter Your Answer"
                                className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-[#2B416A] font-bold ">What Pharmacy Software Have You Used?</h2>
                            <textarea
                                placeholder="Enter Your Answer"
                                className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-[#2B416A] font-bold">What Pharmacy Software Have You Used?</h2>
                            <textarea
                                placeholder="Enter Your Answer"
                                className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                        </div>


                        <div className="pb-3">
                            <NavLink to="" className="btn bg-[#00AEEF] w-full mt-3 border-none text-white rounded-[50px]">Save</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;