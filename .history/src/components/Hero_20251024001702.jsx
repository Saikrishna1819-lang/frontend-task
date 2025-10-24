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
    <section className="text-[#efecd6] bg-[#2c4143] pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6  md:px-[12%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content - Always comes first on mobile */}
        <div className="text-center md:text-left pl-4 lg:px-0 border">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Here's to the New You
          </h1>
          <p className="text-lg md:text-xl text-[#efecd6]/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>
          <button className="px-8 py-4 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] hover:bg-[#a0a89e] transition-colors duration-300 shadow-lg">
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