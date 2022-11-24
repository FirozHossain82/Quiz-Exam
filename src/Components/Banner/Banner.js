import React from "react";
import banner from "../../Image/banner.png";
const Banner = () => {
  return (
     <div className="bg-green-100">
        <div className="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-2">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl sm:leading-none">
              Welcome To  Our <br />
              <span className="inline-block text-purple-500">
                Online Quiz Exam Website
              </span>
            </h2>
            <p className=" text-base text-gray-700 md:text-lg">
                    Environmentally friendly One of the biggest, yet indirect advantages of online examinations is the impact it has on the environment.Saves you money Online examinations also save you money in so many ways. Saves time Online exams are a big time saver.
            </p>
          </div>
        </div>

        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Banner;
