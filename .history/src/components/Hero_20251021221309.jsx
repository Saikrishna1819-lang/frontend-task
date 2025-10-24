import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#2c4143] text-[#e8e3cf] pt-5 pb-20 px-6 lg:px-[500px] py-[40px] flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-serif leading-tight">
          Here's to the New You
        </h1>
        <p className="text-lg text-[#c7c7c1] max-w-md mx-auto lg:mx-0">
          One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
        </p>
        <button className="bg-[#8e978d] text-[#2c4143] font-medium px-6 py-3 rounded-full hover:bg-[#7d867c] transition">
          Coming Soon
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <img
          src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
          alt="NeoGreens Product"
          className="w-[280px] md:w-[380px] lg:w-full object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
