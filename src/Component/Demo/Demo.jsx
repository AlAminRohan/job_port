import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example of fetching user data (could be from Firebase, localStorage, or API)
    const loggedInUser = { displayName: "John Doe" }; // Mock user data
    setUser(loggedInUser);
  }, []);

  return (
    <div className="bg-[#00aeef] h-[100vh]">
      <div className="flex justify-between items-center pt-14 pb-6 container mx-auto">
        <div>
          <h2 className="text-[#fff] font-medium text-sm">Welcome Back</h2>
          <h2 className="text-[#fff] font-bold text-2xl">
            {user ? user.displayName : "Guest"}
          </h2>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-14 rounded-full"
            src="https://i.ibb.co/FVVgLN8/profile-1.png"
            alt="Profile Picture"
          />
        </div>
      </div>

      <div className="bg-[#fff] h-full rounded-t-[36px]">
        <div className="container mx-auto py-8">
          {/* Search Bar */}
          <div className="bg-[#EFF1F3] rounded-2xl py-4 pr-4 pl-16 relative">
            <label className="absolute top-4 left-7" htmlFor="searchWork">
              <img className="w-6" src="/assets/icon/search.png" alt="Search icon" />
            </label>
            <input
              type="text"
              id="searchWork"
              className="bg-transparent w-full outline-none text-[#000]"
              placeholder="Search Work"
            />
          </div>

          {/* Upcoming Jobs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img className="w-6" src="/assets/icon/nottification.png" alt="Notification icon" />
                  <h2 className="text-[#2B416A] font-bold capitalize text-lg">Upcoming Jobs</h2>
                </div>
                <Link to="#" className="text-[#989898] text-sm font-medium">View All</Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="bg-[#00AEEF] rounded-2xl py-5 px-10">
                  <h2 className="text-[#fff] font-bold text-sm">Pharmacy</h2>
                  <div className="flex justify-between items-center mt-5 mb-6">
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">Monday</h2>
                      <h2 className="text-[#fff] font-medium text-sm">19 Jun 2023</h2>
                    </div>
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">123 Sample Street</h2>
                      <h2 className="text-[#fff] font-medium text-sm">Belmore</h2>
                    </div>
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">9 AM - 5 PM</h2>
                    </div>
                  </div>
                </div>

                {/* More Jobs */}
                <div className="bg-[#00AEEF] rounded-2xl py-5 px-10">
                  <h2 className="text-[#fff] font-bold text-sm">Pharmacy</h2>
                  <div className="flex justify-between items-center mt-5 mb-6">
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">Monday</h2>
                      <h2 className="text-[#fff] font-medium text-sm">19 Jun 2023</h2>
                    </div>
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">123 Sample Street</h2>
                      <h2 className="text-[#fff] font-medium text-sm">Belmore</h2>
                    </div>
                    <div>
                      <h2 className="text-[#fff] font-medium text-sm">9 AM - 5 PM</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suitable Positions */}
            <div>
              <h2 className="text-[#2B416A] font-bold capitalize text-lg">Suitable Positions Available</h2>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="py-3">
                  <h2 className="text-[#00AEEF] font-bold text-lg capitalize">Chapel Street Pharmacy</h2>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Suburb:</span> Belmore</h2>
                      <h2 className="text-[#989898] font-medium text-xs">123 Chapel Street, Belmore 2017</h2>
                      <h2 className="text-[#989898] font-medium text-xs truncate">Consectetur tristique adipiscing elit. Sed ...</h2>
                    </div>
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Post Code:</span> 2017</h2>
                    </div>
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Dates Needed:</span> 01/04/2024 - 02/04/2024</h2>
                    </div>
                  </div>
                </div>

                {/* More Positions */}
                <div className="py-3">
                  <h2 className="text-[#00AEEF] font-bold text-lg capitalize">Chapel Street Pharmacy</h2>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Suburb:</span> Belmore</h2>
                      <h2 className="text-[#989898] font-medium text-xs">123 Chapel Street, Belmore 2017</h2>
                      <h2 className="text-[#989898] font-medium text-xs truncate">Consectetur tristique adipiscing elit. Sed ...</h2>
                    </div>
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Post Code:</span> 2017</h2>
                    </div>
                    <div>
                      <h2 className="text-[#989898] font-medium text-xs"><span className="font-bold">Dates Needed:</span> 01/04/2024 - 02/04/2024</h2>
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

export default Demo;
