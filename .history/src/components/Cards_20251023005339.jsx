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



import React, { useRef, useEffect, useState } from "react";

interface Card {
  icon: string;
  text: string;
  des: string;
  image: string;
}

const Cards = () => {
  const cards: Card[] = [
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
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Scroll progress within container
      const progress = Math.min(
        Math.max((windowHeight - containerTop) / (containerHeight - windowHeight), 0),
        1
      );

      setScrollProgress(progress);

      // Determine active card
      const newIndex = Math.min(Math.floor(progress * cards.length), cards.length - 1);
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className="bg-background flex flex-col lg:flex-row px-[5%] lg:px-[10%] py-20 min-h-[400vh] relative"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium leading-tight text-foreground">
          Backed by Nature. Built for Your Routine.
        </h1>
        <p className="mb-5 text-base lg:text-lg leading-relaxed text-muted-foreground">
          NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help
          you overcome all your wellness roadblocks with ease.
        </p>
        <button className="px-8 py-4 mb-10 font-semibold rounded-full bg-secondary text-secondary-foreground transition-all transform hover:scale-105 hover:shadow-lg w-fit">
          Coming Soon
        </button>
        <img
          src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
          alt="Nature"
          className="w-full lg:w-[80%]"
        />
      </div>

      {/* Right Column - Cards */}
      <div className="w-full lg:w-1/2 h-auto lg:h-screen lg:sticky lg:top-0 overflow-hidden flex flex-col justify-center items-center relative py-20">
        {cards.map((item, index) => {
          // Staggered transition: only move one card at a time
          const segmentProgress = scrollProgress * cards.length - index;
          const cardTransitionProgress = Math.max(0, Math.min(1, segmentProgress));

          // Default transform values
          let opacity = 0;
          let translateY = 0;
          let scale = 1;
          const cardSpacing = 60;

          // Active card moves up and fades
          if (index === activeIndex) {
            opacity = 1 - cardTransitionProgress;
            translateY = -cardSpacing * cardTransitionProgress;
            scale = 1;
          }
          // Next card appears below and slides up
          else if (index === activeIndex + 1) {
            opacity = cardTransitionProgress;
            translateY = cardSpacing * (1 - cardTransitionProgress);
            scale = 0.95 + 0.05 * cardTransitionProgress;
          }
          // All other cards
          else {
            opacity = 0;
            translateY = cardSpacing;
            scale = 0.95;
          }

          return (
            <div
              key={index}
              className={`absolute w-[90%] lg:w-[75%] bg-card rounded-2xl shadow-xl p-6 lg:p-8 transition-all duration-300 ease-out`}
              style={{
                transform: `translateY(${translateY}%) scale(${scale})`,
                opacity,
                zIndex: cards.length - index,
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <img src={item.icon} alt="icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <h2 className="text-base lg:text-lg font-semibold text-card-foreground">{item.text}</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">{item.des}</p>
              <img
                src={item.image}
                alt={item.text}
                className="rounded-lg w-full transition-transform hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
