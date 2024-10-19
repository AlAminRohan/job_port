import { IoIosArrowBack } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

const JobPostingReview = () => {
    return (
        <div className="bg-white h-[100vh]">
            <div className="pt-4">
                <div className="flex justify-between  mx-8 mt-8 text-2xl text-[#2B416A]">
                    <IoIosArrowBack />
                    <FaRegBookmark />
                </div>

                <div className="container mx-auto">
                    <div className="mx-10">
                        <div className="mt-3">
                            <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2 mr-3" >Badge</span>
                            <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2 mr-3" >New</span>
                            <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2" > Top Employer</span>
                        </div>
                        <h1 className="text-xl font-bold text-[#00AEEF] mt-9 ">Lorem Ipsum</h1>
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


                            <div className="mt-5 lg:grid grid-cols-2 gap-x-5">
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-[#2B416A] text-lg font-bold"> $ 00</p>
                                        <p className="text-[#2B416A] text-xs">per hour</p>
                                    </div>
                                    <div>
                                        <div className="mt-3">
                                            <h3 className="text-[#00AEEF] font-bold">Job Description</h3>
                                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed augue felis, tristique sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="text-[#00AEEF] font-bold">Allowance</h3>
                                            <p className="text-xs">$ 00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex justify-between ">
                                        <div className=" text-xs  font-bold text-[#2B416A]">
                                            <p>Monday</p>
                                            <p>19 Jun 2023</p>
                                            <p>9 AM - 5 PM  </p>
                                        </div>
                                        <div className="text-xs font-bold text-[#2B416A]">
                                            <p>123 Sample Street</p>
                                            <p>Belmore</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="text-[#00AEEF] font-bold">Qualifications</h2>
                                        <div>
                                            <ul className="list-disc lg:flex lg:justify-between ml-5 text-xs">
                                                <div>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                </div>
                                                <div>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                    <li>Sed augue felis, tristique sed.</li>
                                                </div>
                                            </ul>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-xs ">Aliquam quis ornare nisi. Cras blandit volutpat ligula, eget scelerisque turpis lobortis a. Aenean vitae turpis vel urna luctus tempor a et enim</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobPostingReview;