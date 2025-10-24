// import React from 'react'

// const Cards = () => {


//     const cards = [
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
//       text: "Feel Foggy or Unfocused?",
      
//       des:"Designed to support mental clarity with B12 and adaptogens.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
//       text: "Bloating or Indigestion?",
    
//       des:"Aids digestion with probiotics and digestive enzymes.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
//       text: "Constant Energy Crashes?",
//       des:"Supports sustained energy with clean, plant-based nutrients.",

//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
//       text: "Busy Routines messing up nutrition?",
//       des:"One simple scoop a day keeps your essentials covered.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
//       text: "Too many supplements to choose from?",
//       des:"NeoGreens simplifies it all. Just one powder, once a day.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png"
//     },
//      {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
//       text: "Frequent body pains and aches?",
      
//       des:"akes care of essential vitamin deficiencies to",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png"
//     }
//   ];
//   return (
//     <div className='bg-[#fdfcf9] flex  px-[12%] py-20'>
//         <div className='w-min-1/2  px-10'>
//         <h1 className='text-5xl font-serif mb-5 font-medium'>Backed by Nature. Built for Your Routine.</h1>
//         <p className='mb-5 text-[18px]'>NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.</p>
//          <button className="px-8 py-4 mb-16   font-semibold rounded-full text-[#2c4143] bg-[#8e968c]  mt-5 transition-all transform hover:scale-105">
//             Comming Soon
//           </button>
//           <div>
//             <img src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"></img>
//           </div>

//         </div>
//         <div className='flex w-min-[1/2] flex-col gap-10'>
//             {
//                 cards.map((item)=>(
//                     <div className='flex flex-col shadow-2xl p-8 rounded-xl gap-4' >
//                         <div className='flex gap-4'>
//                             <img src={item.icon}></img>
//                             <h1 className='flex-1'>{item.text}</h1>
//                         </div>
//                         <p>{item.des}</p>
//                         <img className='' src={item.image}></img>
//                     </div>
//                 ))
//             }

//         </div>
//     </div>
//   )
// }

// export default Cards




import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardsData = [
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
    text: "Feel Foggy or Unfocused?",
    des: "Designed to support mental clarity with B12 and adaptogens.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
    text: "Bloating or Indigestion?",
    des: "Aids digestion with probiotics and digestive enzymes.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
    text: "Constant Energy Crashes?",
    des: "Supports sustained energy with clean, plant-based nutrients.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
    text: "Busy Routines messing up nutrition?",
    des: "One simple scoop a day keeps your essentials covered.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
    text: "Too many supplements to choose from?",
    des: "NeoGreens simplifies it all. Just one powder, once a day.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
    text: "Frequent body pains and aches?",
    des: "Takes care of essential vitamin deficiencies to reduce fatigue.",
    image: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png",
  },
];

export default function Cards() {
  const cards = cardsData;
  const total = cards.length;

  // container that drives the scroll (tall)
  const containerRef = React.useRef(null);

  // scroll progress across the entire container (0..1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offsets chosen so progress moves from start -> end of that container
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-[#fdfcf9] px-[8%] py-20">
      <div className="flex gap-10 items-start">
        {/* LEFT: sticky pinned content */}
        <div className="w-1/2 pr-10">
          <div className="sticky top-24">
            <h1 className="text-5xl font-serif mb-5 font-medium">
              Backed by Nature. Built for Your Routine.
            </h1>
            <p className="mb-5 text-[18px]">
              NeoGreens goes where you go - from home to the office to the gym.
              One scoop a day will help you overcome all your wellness
              roadblocks with ease.
            </p>
            <button className="px-8 py-4 mb-16 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all transform hover:scale-105">
              Coming Soon
            </button>
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
              alt="nature"
              className="max-w-full"
            />
          </div>
        </div>

        {/* RIGHT: tall scroll area that contains a sticky viewport where cards overlap */}
        <div
          ref={containerRef}
          className="w-1/2 relative"
          style={{
            // make the scroll region large so scrolling across the sequence is possible
            height: `${total * 100}vh`,
          }}
        >
          {/* This sticky frame stays fixed in viewport while container scrolls */}
          <div className="sticky top-24 h-screen">
            {/* stacked cards (absolute so they overlap in the same frame) */}
            <div className="relative w-full h-full">
              {cards.map((item, i) => {
                // compute input range for this card: when scrollYProgress is between [i/total, (i+1)/total]
                const start = i / total;
                const mid = (i + 0.5) / total;
                const end = (i + 1) / total;

                // vertical movement: appear from +30vh -> 0 -> -30vh
                const y = useTransform(
                  scrollYProgress,
                  [start, mid, end],
                  ["30vh", "0vh", "-30vh"]
                );

                // fade in then fade out
                const opacity = useTransform(
                  scrollYProgress,
                  [start, mid - 0.05, end - 0.01],
                  [0, 1, 0]
                );

                // slight scale for nicer feel
                const scale = useTransform(scrollYProgress, [start, mid, end], [0.95, 1, 0.95]);

                return (
                  <motion.div
                    key={i}
                    style={{ y, opacity, scale }}
                    className="absolute inset-0 flex items-start justify-start p-8"
                  >
                    <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8">
                      <div className="flex gap-4 items-center">
                        <img src={item.icon} alt="" className="w-10 h-10" />
                        <h2 className="text-xl font-semibold">{item.text}</h2>
                      </div>
                      <p className="mt-4">{item.des}</p>
                      <img
                        src={item.image}
                        alt=""
                        className="mt-6 w-full rounded-lg object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
