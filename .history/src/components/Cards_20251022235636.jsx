import React from 'react'

const Cards = () => {


    const cards = [
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
      text: "Feel Foggy or Unfocused?",
      
      des:"Designed to support mental clarity with B12 and adaptogens.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
      text: "Bloating or Indigestion?",
    
      des:"Aids digestion with probiotics and digestive enzymes.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
      text: "Constant Energy Crashes?",
      des:"Supports sustained energy with clean, plant-based nutrients.",

      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
      text: "Busy Routines messing up nutrition?",
      des:"One simple scoop a day keeps your essentials covered.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
      text: "Too many supplements to choose from?",
      des:"NeoGreens simplifies it all. Just one powder, once a day.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png"
    },
     {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
      text: "Frequent body pains and aches?",
      
      des:"akes care of essential vitamin deficiencies to",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png"
    }
  ];
  return (
    <div className='bg-[#fdfcf9] px-[12%] py-20'>
        <div className='w-1/2 px-10'>
        <h1 className='text-5xl font-serif mb-5 font-medium'>Backed by Nature. Built for Your Routine.</h1>
        <p className='mb-5 text-[18px]'>NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.</p>
         <button className="px-8 py-4 mb-16   font-semibold rounded-full text-[#2c4143] bg-[#8e968c]  mt-5 transition-all transform hover:scale-105">
            Comming Soon
          </button>
          <div>
            <img src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"></img>
          </div>

        </div>
        <div className='flex flex-col gap-10'>
            {
                cards.map((item)=>(
                    <div className='flex flex-col gap-4' >
                        <div className='flex gap-4'>
                            <img src={item.icon}></img>
                            <h1 className='flex-1'>{item.text}</h1>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Cards