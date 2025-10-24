
// import test from "../assets/test.svg"

// const LowerBanner = () => {
//   return (
//     <div className='flex flex-col md:flex-row rounded-lg bg-[#efecd6] mt-20'>
     
//       {/* Left banner */}
//       <div className='w-full md:w-1/2 py-6 text-center md:text-left px-16 sm:px-6 md:px-14 lg:px-[12%] sm:py-10 md:py-16 lg:py-12'>
//         <div>
//           <p className="text-3xl sm:text-4xl font-serif text-[#2c4143] font-semibold leading-snug">
//             When You're Ready, NeoGreens is Here.
//           </p>
//           <p className='mt-4 sm:mt-6 text-[#2c4143] text-[16px] sm:text-[18px] font-normal leading-relaxed'>
//             One clean, simple habit to help you feel better every day.
//           </p>
//         </div>
//         <div className="flex justify-center md:justify-start mt-4 sm:mt-5">
//           <button className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-[18px] rounded-full text-[#8e968c] border border-[#8e968c] transition-all transform hover:scale-105">
//             Coming Soon
//           </button>
//         </div>
//       </div>

//       {/* Right banner */}
//       <div className='hidden md:block md:w-1/2 lg:w-1/2 relative'>
//         <img 
//           className='w-full md:max-w-xs lg:max-w-md md:mx-auto lg:absolute lg:bottom-0 lg:left-0' 
//           src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png" 
//           alt="NeoGreens product"
//         />
//       </div>
//     </div>
//   );
// };

// export default LowerBanner;




import test from "../assets/test.svg";

const LowerBanner = () => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-lg bg-[#efecd6] mt-20 bg-no-repeat bg-center bg-cover min-h-[400px]"
      style={{ backgroundImage: `url(${test})` }}
    >
      {/* Left banner */}
      <div className="w-full md:w-1/2 py-6 text-center md:text-left px-16 sm:px-6 md:px-14 lg:px-[12%] sm:py-10 md:py-16 lg:py-12">
        <div>
          <p className="text-3xl sm:text-4xl font-serif text-[#2c4143] font-semibold leading-snug">
            When You're Ready, NeoGreens is Here.
          </p>
          <p className="mt-4 sm:mt-6 text-[#2c4143] text-[16px] sm:text-[18px] font-normal leading-relaxed">
            One clean, simple habit to help you feel better every day.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-4 sm:mt-5">
          <button className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-[18px] rounded-full text-[#8e968c] border border-[#8e968c] transition-all transform hover:scale-105">
            Coming Soon
          </button>
        </div>
      </div>

      {/* Right banner */}
      <div className="hidden md:block md:w-1/2 lg:w-1/2 relative">
        <img
          className="w-full md:max-w-xs lg:max-w-md md:mx-auto lg:absolute lg:bottom-0 lg:left-0"
          src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
          alt="NeoGreens product"
        />
      </div>
    </div>
  );
};

export default LowerBanner;
