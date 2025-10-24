import React from "react";

const Hero = () => {
  return (
     <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Here's to the New You
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Get a month of Recovery support this summer—phyto-nutrients, adaptogens, and daily support—all in one
          </p>
          <button className="px-8 py-4 bg-[#f9d65c] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#f5d04a] transition-all transform hover:scale-105">
            Creating Soon
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6207792/pexels-photo-6207792.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="NeoGreens Product"
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
