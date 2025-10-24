// const Banner=()=> {
//   return (
  
//       <section className="min-h-[calc(100vh-80px)] flex items-center text-[#efecd6]  justify-center   px-4">
//       <div className="container mx-auto  ">
//         <div className="grid max-w-6xl gap-0 mx-auto overflow-hidden shadow-2xl lg:grid-cols-2 rounded-3xl">
//           {/* Left Content */}
//           <div className="flex flex-col justify-center p-16 bg-[#2c4143]   md:pr-0  lg:py-28">
//             <h1 className="mb-6 text-3xl font-serif leading-tight md:text-4xl lg:text-5xl">
//               The Simple Solution to Modern Lifestyle Health Issues
//             </h1>
//             <p className="mb-8 text-base leading-relaxed md:text-lg opacity-90">
//               From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is 
//               our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
//             </p>
//             <div>
//              <button className="px-6 py-3 border rounded-full">Story</button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative h-[400px] bg-[#2c4143]  lg:h-auto">
//             <img
//               src='https://neogreens.com/wp-content/uploads/2025/06/simple.png'
//               alt="Woman enjoying a healthy green smoothie"
//               className="w-full h-full "
//             />
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// }

// export default Banner;





const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center text-[#efecd6] justify-center px-4 sm:px-6 py-8 md:py-0">
      <div className="container mx-auto">
        <div className="grid max-w-6xl mx-auto overflow-hidden shadow-2xl lg:grid-cols-2 rounded-3xl">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-[#2c4143] lg:pr-0 lg:py-28 order-2 lg:order-1">
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-serif leading-tight lg:text-5xl">
              The Simple Solution to Modern Lifestyle Health Issues
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
              From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is 
              our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
            </p>
            <div>
              <button className="px-6 py-3 border border-[#efecd6] rounded-full text-[#efecd6] hover:bg-[#efecd6] hover:text-[#2c4143] transition-colors duration-300">
                Our Story
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto order-1 lg:order-2">
            <img
              src='https://neogreens.com/wp-content/uploads/2025/06/simple.png'
              alt="Woman enjoying a healthy green smoothie"
              className="w-full h-full object-cover lg:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;