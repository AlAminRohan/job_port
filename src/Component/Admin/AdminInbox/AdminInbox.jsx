import { IoIosArrowBack } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { FaPenSquare } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

const AdminInbox = () => {
    return (
        <div className="bg-[#00AEEF] h-[100vh]">
            <div className="flex justify-end">
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-52" alt="" />
            </div>

            <div className=" bg-white  h-[100vh] rounded-t-3xl ">

                <div className="  container mx-auto grid lg:grid-cols-2 gap-x-2 ">
                    {/* company name */}
                    <div className=" px-2 lg:px-0 lg:pl-32 flex flex-col align-bottom items-end justify-between">
                        <div className="container ">
                            <div className="flex justify-around items-center py-5 border-b-2">
                                <div className="flex items-center ">
                                    <div className=" rounded-full">
                                        <img src="https://i.ibb.co.com/mJ7xjw0/Rectangle.png" />
                                    </div>
                                    <h1 className="text-[#00AEEF] font-bold ml-2">Chapel Street Pharmacy</h1>
                                </div>
                                <p>What do you think?</p>
                                <div>
                                    <p>4:30 PM</p>
                                    <span><TbCircleNumber2Filled className="text-2xl text-[#2B416A]" /></span>
                                </div>
                            </div>



                            <div className="flex justify-around items-center py-5 border-b-2">
                                <div className="flex items-center ">
                                    <div className=" rounded-full">
                                        <img src="https://i.ibb.co.com/mJ7xjw0/Rectangle.png" />
                                    </div>
                                    <h1 className="text-[#00AEEF] font-bold ml-2">Chapel Street Pharmacy</h1>
                                </div>
                                <p>What do you think?</p>
                                <div>
                                    <p>4:30 PM</p>
                                    <span><TbCircleNumber2Filled className="text-2xl text-[#2B416A]" /></span>
                                </div>
                            </div>
                            <div className="flex justify-around items-center py-5 border-b-2">
                                <div className="flex items-center ">
                                    <div className=" rounded-full">
                                        <img src="https://i.ibb.co.com/mJ7xjw0/Rectangle.png" />
                                    </div>
                                    <h1 className="text-[#00AEEF] font-bold ml-2">Chapel Street Pharmacy</h1>
                                </div>
                                <p>What do you think?</p>
                                <div>
                                    <p>4:30 PM</p>
                                    <span><TbCircleNumber2Filled className="text-2xl text-[#2B416A]" /></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <FaPen className="text-5xl p-3 rounded-full text-white bg-[#00AEEF]" />
                        </div>
                    </div>

                    {/* message option */}
                    <div className="border-l-2 hidden lg:block">
                        <div className="flex justify-between py-7">
                            <IoIosArrowBack className="text-2xl" />
                            <h1 className="text-xl text-[#00AEEF] font-bold">Ben</h1>
                            <div className="flex mr-5 gap-x-4">
                                <IoCallOutline className="text-2xl" />
                                <IoVideocamOutline className="text-2xl" />

                            </div>

                        </div>


                        {/* message write */}
                        <div>
                            {/* chat bubble  */}
                            <div className="h-full bg-[#EFF1F3]">
                                <div className="chat chat-end pt-[370px]">
                                    <div className="chat-bubble bg-[#00AEEF] text-white">
                                        That's never been done in the history of the Jedi. It's insulting!
                                    </div>
                                </div>
                            </div>



                            <div className="flex items-center">
                                <GrAttachment className="text-3xl ml-2" />
                                <label className="input input-bordered flex items-center gap-2 bg-[#EFF1F3] w-full mx-3 my-3">
                                    <input type="text" className="grow" />
                                </label>
                                <IoSend className="text-3xl text-white rounded-full p-1 mr-4 bg-[#00AEEF]" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AdminInbox;