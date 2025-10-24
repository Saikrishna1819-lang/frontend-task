const LowerBanner = () => {
  
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-[12%] bg-[#efecd6] my-20 '>
        {/* left banner */}
        <div className='w-1/2 py-6  flex gap-3 sm:py-10 md:py-16 lg:py-12 lg:pl-5'>
            <div  className="">
                <p className="text-5xl font-bold">When You’re Ready, NeoGreens is Here.</p>
                <p className='mt-4'>One clean, simple habit to help you feel better every day.</p>
            </div>
            <button className="px-8 py-4   font-semibold rounded-full text-[#2c4143] bg-[#8e968c]  transition-all transform hover:scale-105">
            Comming Soon
          </button>
            
        </div>

        {/* Right Banneer */}
        <div className='hidden md:block md:w-1/2 lg:w-[1/2] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"></img>
        </div>
    </div>
  )
}

export default LowerBanner;