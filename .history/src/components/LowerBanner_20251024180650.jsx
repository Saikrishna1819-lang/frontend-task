const LowerBanner = () => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-lg bg-[#efecd6] mt-20 
                 bg-no-repeat bg-center bg-contain min-h-[500px]"
      style={{
        backgroundImage: "url('/test.svg')", // Direct path from public folder
      }}
    >
      <div className="w-full md:w-1/2 py-10 text-center md:text-left px-10">
        <p className="text-3xl sm:text-4xl font-serif text-[#2c4143] font-semibold leading-snug">
          When You're Ready, NeoGreens is Here.
        </p>
        <p className="mt-4 text-[#2c4143] text-[16px] sm:text-[18px] font-normal leading-relaxed">
          One clean, simple habit to help you feel better every day.
        </p>

        <div className="flex justify-center md:justify-start mt-5">
          <button className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-[18px] rounded-full text-[#8e968c] border border-[#8e968c] transition-all transform hover:scale-105">
            Coming Soon
          </button>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 lg:w-1/2 relative">
        <img
          className="w-full md:max-w-xs lg:max-w-md md:mx-auto lg:absolute lg:bottom-0 lg:left-0"
          src="/test.jpg" // Also using the same image here
          alt="NeoGreens product"
        />
      </div>
    </div>
  );
};  

export default LowerBanner;