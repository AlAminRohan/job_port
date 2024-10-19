import { CiCircleRemove } from "react-icons/ci";

const AdminNotification = () => {
    return (
        <div className="bg-[#00AEEF] h-[100vh]">
            <div className="flex justify-end">

                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-[200px]" alt="" />
            </div>

            <div className="bg-white h-[100vh] rounded-t-3xl">
                <div className=" px-6 lg:px-28 pt-9 container mx-auto ">
                    <h1 className="text-[#2B416A] font-bold">Notification</h1>
                    <div>
                        <div className="lg:flex justify-between items-center border-b-2 py-6">
                            <h1 className="text-[#00AEEF] font-bold">New Message</h1>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                            <CiCircleRemove className=" hidden lg:block "/>
                        </div>
                        <div className=" lg:flex justify-between items-center border-b-2 py-6">
                            <h1 className="text-[#00AEEF] font-bold">New Message</h1>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                            <CiCircleRemove className=" hidden lg:block "/>
                        </div>
                        <div className="lg:flex justify-between items-center border-b-2 py-6">
                            <h1 className="text-[#00AEEF] font-bold">New Message</h1>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                            <CiCircleRemove className=" hidden lg:block "/>
                        </div>
                        <div className=" lg:flex justify-between items-center border-b-2 py-6">
                            <h1 className="text-[#00AEEF] font-bold">New Message</h1>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                            <CiCircleRemove className=" hidden lg:block " />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNotification;