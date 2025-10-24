import React from "react";

const Hero = () => {
  return (
     <section className=" text-[#efecd6] bg-[#2c4143] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Here's to the New You
          </h1>
          <p className="text-lg text-[#efecd6] mb-8 leading-relaxed">
           One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.


          </p>
          <button className="px-8 py-4  text-[#0a0a0a] font-semibold rounded-full bg-[#8e968c]  transition-all transform hover:scale-105">
            Creating Soon
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
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
