import React from 'react'

const Cards = () => {


    const cards = [
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
      text: "Finally, mental clarity that sticks with just one scoop.",
      author: "Krithi Koushal",
      des: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
      text: "No more bloating, only a lighter, happier gut.",
      author: "Midhun Roy",
      des:"I've tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty — my stomach feels balanced, refreshed, and energized.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png"
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
      text: "Reset my routine inside and out.",
      author: "Jennifer",
      des: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png"
    },
    {
      icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "From sluggish to unstoppable.",
      author: "Rahul Harrison",
      des: "I was dragged down by sluggish mornings — lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I’m more alert, active, and resilient.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-3.png"
    },
    {
      icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "One scoop, so many wins.",
      author: "Emily Johnson",
      des: "Travel, gym, work — NeoGreens travels with me. It’s like a reset button for digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-4.png"
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
        <div>



        </div>
    </div>
  )
}

export default Cards