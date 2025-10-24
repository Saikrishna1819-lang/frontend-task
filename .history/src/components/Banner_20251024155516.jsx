const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center text-[#efecd6] justify-center px-4 sm:px-6 py-8 md:py-0">
      <div className="container mx-auto">
        <div className="grid max-w-6xl mx-auto overflow-hidden shadow-2xl lg:grid-cols-2 rounded-3xl">

          {/* Left Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-[#2c4143] lg:pr-0 lg:py-28 order-1">
            <h1 className="mb-4 sm:mb-6 text-[28px] leading-[36px] lg:leading-[48px] font-medium sm:text-3xl md:text-4xl lg:text-5xl font-serif ">
              The Simple Solution to Modern Lifestyle Health Issues
            </h1>
            <p className="mb-6 sm:mb-8 text-[18px]  text-sm sm:text-base md:text-lg lg:leading-relaxed opacity-90">
              From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is 
              our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
            </p>
            <div>
              <button className="px-6 py-3 border text-[16px] border-[#efecd6] rounded-full  font-medium  bg-[#efecd6] text-[#2c4143] transition-colors duration-300">
                Our Story
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:bg-[#2c4143] sm:h-[350px] md:h-[400px] lg:h-auto order-2">
            <img
              src='https://neogreens.com/wp-content/uploads/2025/06/simple-mob.png'
              alt="Woman enjoying a healthy green smoothie"
              className="w-full h-full object-cover lg:object-cover rounded-b-3xl lg:rounded-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;
