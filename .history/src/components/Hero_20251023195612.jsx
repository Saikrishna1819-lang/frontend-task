// import React from "react";

// const Hero = () => {
//   return (
//      <section className=" text-[#efecd6] bg-[#2c4143] pt-32 pb-20">
//       <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             Here's to the New You
//           </h1>
//           <p className="text-lg text-[#efecd6] mb-8 leading-relaxed">
//            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.


//           </p>
//           <button className="px-8 py-4   font-semibold rounded-full text-[#2c4143] bg-[#8e968c]  transition-all transform hover:scale-105">
//             Comming Soon
//           </button>
//         </div>
//         <div className="flex justify-center">
//           <div className="relative">
//             <img
//               src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
//               alt="NeoGreens Product"
//               className="w-full max-w-md object-contain drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";

const Hero = () => {
  return (
    <section className="text-[#efecd6] bg-[#2c4143] pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Here's to the{" "}
            <span className="block mt-2">New You</span>
          </h1>
          <p className="text-lg md:text-xl text-[#efecd6]/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>
          <button className="px-8 py-4 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] hover:bg-[#a0a89e] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Coming Soon
          </button>
        </div>

        {/* Image Content */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
              alt="NeoGreens Product"
              className="w-full h-auto object-contain drop-shadow-2xl animate-float"
            />
            
            {/* Optional decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8e968c]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#efecd6]/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for mobile */}
      <div className="lg:hidden flex justify-center mt-12">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-[#8e968c]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;