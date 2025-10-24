


// import React from "react";
// import image from "../assets/image.png"

// const Hero = () => {
 
//   return (
//     <section   className="text-[#efecd6] bg-[url(`${image}`)] border border-red-500 mt-20 bg-[#2c4143] pt-30 md:pt-32 pb-6 lg:pb-12 md:pb-6 px-4 sm:px-28 lg:px-[12%]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-12 items-center" >
//         {/* Text Content - Always comes first on mobile */}
//         <div className="text-center md:text-left  lg:px-0">
//           <h1 className="text-[40px] leading-[48px]  text-center md:text-left md:text-4xl lg:text-6xl lg:leading-[70px] font-serif font-semibold mb-6">
//   Here's to the New You
// </h1>
//           <p className="text-lg md:text-[18px] font-medium text-[#efecd6]/90 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
//             One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
//           </p>
//           <button className="px-12 py-4 text-[18px] font-medium rounded-full text-[#2c4143] bg-[#8e968c] hover:bg-[#a0a89e] transition-colors duration-300 shadow-lg">
//             Coming Soon
//           </button> 
//         </div>

//         {/* Image Content - Always comes after text on mobile */}
//         <div className="flex justify-center">
//           <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
//             <img
//               src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
//               alt="NeoGreens Product"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import image from "../assets/image.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",         // ensures full coverage
        backgroundPosition: "center",    // centers image
        backgroundRepeat: "no-repeat",   // avoids repeating pattern
      }}
      className="text-[#efecd6] mt-20 bg-[#2c4143] 
                 pt-20 md:pt-32 pb-12 px-4 sm:px-12 lg:px-[12%] 
                 flex items-center border border-red-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-[40px] leading-[48px] text-center md:text-left md:text-4xl lg:text-6xl lg:leading-[70px] font-serif font-semibold mb-6">
            Here's to the New You
          </h1>
          <p className="text-lg md:text-[18px] font-medium text-[#efecd6]/90 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
          </p>
          <button className="px-12 py-4 text-[18px] font-medium rounded-full text-[#2c4143] bg-[#8e968c] hover:bg-[#a0a89e] transition-colors duration-300 shadow-lg">
            Coming Soon
          </button>
        </div>

        {/* Image Content */}
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
