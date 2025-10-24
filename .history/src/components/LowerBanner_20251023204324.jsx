// const LowerBanner = () => {
  
//   return (
//     <div className='flex  rounded-lg px-6 sm:px-10 md:px-14 lg:px-[12%] bg-[#efecd6] mt-20 '>
//         {/* left banner */}
//         <div className='w-1/2 py-6  sm:py-10 md:py-16 lg:py-12 lg:px-10'>
//             <div  className="">
//                 <p className="text-4xl text-[#2c4143] font-semibold">When You’re Ready, NeoGreens is Here.</p>
//                 <p className='mt-6 text-[#2c4143] text-[18px] font-normal '>One clean, simple habit to help you feel better every day.</p>
//             </div>
//             <button className="px-8 py-4   font-semibold rounded-full text-[#2c4143] bg-[#8e968c]  mt-5 transition-all transform hover:scale-105">
//             Comming Soon
//           </button>
            
//         </div>

//         {/* Right Banneer */}
//         <div className='hidden md:block md:w-1/2 lg:w-[1/2]  relative'>
//             <img className='w-full absolute bottom-0 left-0 max-w-md' src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"></img>
//         </div>
//     </div>
//   )
// }

// export default LowerBanner;


const LowerBanner = () => {
  return (
    <div className='flex flex-col border border-red-600  md:flex-row rounded-lg px-4 sm:px-6 md:px-10 lg:px-[12%] bg-[#efecd6] mt-10 md:mt-20 mx-4 md:mx-0'>
        {/* left banner */}
        <div className='w-full md:w-1/2 py-6 sm:py-8 md:py-12 lg:py-16 lg:px-10 text-center md:text-left flex flex-col justify-center'>
            <div className="">
                <p className="text-2xl sm:text-3xl md:text-4xl text-[#2c4143] font-semibold leading-tight">
                    When You're Ready, NeoGreens is Here.
                </p>
                <p className='mt-4 sm:mt-6 text-[#2c4143] text-base sm:text-lg md:text-[18px] font-normal'>
                    One clean, simple habit to help you feel better every .
                </p>
            </div>
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-4 sm:mt-5 transition-all transform hover:scale-105 w-fit mx-auto md:mx-0">
                Coming Soon
            </button>
        </div>

        {/* Right Banner */}
        <div className='w-full md:w-1/2  border-red-600 md:border-4 relative mt-6 md:mt-0 flex items-end justify-center md:justify-end'>
            <img 
                className='w-full  h-auto max-w-xs sm:max-w-sm md:max-w-full md:w-full md:h-full object-contain object-bottom' 
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png" 
                alt="NeoGreens Product"
            />
        </div>
    </div>
  )
}

export default LowerBanner;