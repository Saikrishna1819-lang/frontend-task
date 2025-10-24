


import React from "react";

const Hero = () => {
  return (
    <section className="text-[#efecd6] bg-[#2c4143] pt-20 md:pt-32 pb-6 lg:pb-12 md:pb-6 px-4 sm:px-28 lg:px-[12%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
        {/* Text Content - Always comes first on mobile */}
        <div className="text-center md:text-left  border lg:px-0">
          <h1 className="text-[40px] leading-[48px] text-center md:text-4xl lg:text-6xl lg:leading-[70px] font-serif font-semibold mb-6">
  Here's to the New You
</h1>
          <p className="text-lg md:text-[18px] font-medium text-[#efecd6]/90 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>
          <button className="px-12 py-4 text-[18px] font-medium rounded-full text-[#2c4143] bg-[#8e968c] hover:bg-[#a0a89e] transition-colors duration-300 shadow-lg">
            Coming Soon
          </button> 
        </div>

        {/* Image Content - Always comes after text on mobile */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
              alt="NeoGreens Product"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;