

const AdminHome = () => {
    return (
        <div className="bg-[#00AEEF] h-[100vh]">
            <div className="flex justify-between">
                <div className="pt-10 pl-6 lg:pl-32 text-white container mx-auto">
                    <h4 className="text-xs">Welcome Back</h4>
                    <h2 className="text-lg font-bold">Admin</h2>
                </div>
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-[200px]" alt="" />
            </div>

            <div className="bg-white h-[100vh] rounded-t-3xl">
                <div className=" px-6 lg:px-28 pt-9 container mx-auto ">

                    <div className="container mx-auto grid  lg:grid-cols-2 gap-5">
                        <div className="bg-[#00AEEF] flex justify-between py-10 px-8 rounded-2xl">
                            <h1 className="text-white text-3xl">000</h1>
                            <div className="text-white flex flex-col   items-end">
                                <p>Total</p>
                                <p>Businesses</p>
                            </div>
                        </div>
                        <div className="bg-[#00AEEF] flex justify-between py-10 px-8 rounded-2xl">
                            <h1 className="text-white text-3xl">000</h1>
                            <div className="text-white flex flex-col    items-end">
                                <p>Total</p>
                                <p>Businesses</p>
                            </div>
                        </div>
                        <div className="bg-[#00AEEF] flex justify-between py-10 px-8 rounded-2xl">
                            <h1 className="text-white text-3xl">000</h1>
                            <div className="text-white flex flex-col    items-end">
                                <p>Total</p>
                                <p>Businesses</p>
                            </div>
                        </div>
                        <div className="bg-[#00AEEF] flex justify-between py-10 px-8 rounded-2xl">
                            <h1 className="text-white text-3xl">000</h1>
                            <div className="text-white flex flex-col    items-end">
                                <p>Total</p>
                                <p>Businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;