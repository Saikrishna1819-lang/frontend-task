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



// import React, { useRef, useEffect, useState } from "react";

// const Cards = () => {
//   const cards = [
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
//       text: "Feel Foggy or Unfocused?",
//       des: "Designed to support mental clarity with B12 and adaptogens.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
//       text: "Bloating or Indigestion?",
//       des: "Aids digestion with probiotics and digestive enzymes.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
//       text: "Constant Energy Crashes?",
//       des: "Supports sustained energy with clean, plant-based nutrients.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
//       text: "Busy Routines messing up nutrition?",
//       des: "One simple scoop a day keeps your essentials covered.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
//       text: "Too many supplements to choose from?",
//       des: "NeoGreens simplifies it all. Just one powder, once a day.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
//     },
//   ];

//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleScroll = () => {
//       const rect = container.getBoundingClientRect();
//       const scrollProgress = Math.min(
//         Math.max((window.innerHeight - rect.top) / (rect.height * 0.6), 0), // <== reduced divisor makes it more sensitive
//         1
//       );
//       const index = Math.floor(scrollProgress * (cards.length - 1));
//       setActiveIndex(index);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [cards.length]);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#fdfcf9] flex px-[10%] py-20 min-h-[300vh] relative"
//     >
//       {/* LEFT SIDE */}
//       <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center px-10">
//         <h1 className="text-5xl font-serif mb-5 font-medium">
//           Backed by Nature. Built for Your Routine.
//         </h1>
//         <p className="mb-5 text-[18px]">
//           NeoGreens goes where you go - from home to the office to the gym. One
//           scoop a day will help you overcome all your wellness roadblocks with
//           ease.
//         </p>
//         <button className="px-8 py-4 mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all transform hover:scale-105">
//           Coming Soon
//         </button>
//         <img
//           src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
//           alt="Nature"
//           className="w-[80%]"
//         />
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-1/2 h-screen sticky top-0 overflow-hidden flex flex-col justify-center items-center relative">
//         {cards.map((item, index) => {
//           const isVisible = index === activeIndex || index === activeIndex + 1;
//           const position = index - activeIndex;

//           return (
//             <div
//               key={index}
//               className={`absolute w-[80%] bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ease-out ${
//                 isVisible ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 transform: `translateY(${position * 110}%) scale(${
//                   position === 0 ? 1 : 0.97
//                 })`,
//                 zIndex: cards.length - index,
//               }}
//             >
//               <div className="flex items-center gap-4 mb-3">
//                 <img src={item.icon} alt="icon" className="w-10 h-10" />
//                 <h2 className="text-lg font-semibold">{item.text}</h2>
//               </div>
//               <p className="text-gray-600 mb-4">{item.des}</p>
//               <img
//                 src={item.image}
//                 alt={item.text}
//                 className="rounded-lg transition-transform hover:scale-105"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React, { useRef, useEffect, useState } from 'react';

const Cards = () => {
  const cards = [
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
      text: "Feel Foggy or Unfocused?",
      des: "Designed to support mental clarity with B12 and adaptogens.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png"
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
      text: "Bloating or Indigestion?",
      des: "Aids digestion with probiotics and digestive enzymes.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png"
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
      text: "Constant Energy Crashes?",
      des: "Supports sustained energy with clean, plant-based nutrients.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png"
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
      text: "Busy Routines messing up nutrition?",
      des: "One simple scoop a day keeps your essentials covered.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png"
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
      text: "Too many supplements to choose from?",
      des: "NeoGreens simplifies it all. Just one powder, once a day.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png"
    }
  ];

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [cardStyles, setCardStyles] = useState({});

  // Helper function to calculate value at percentage (equivalent to valueAtPercentage from aat.js)
  const valueAtPercentage = ({ from, to, percentage }) => {
    return from + (to - from) * percentage;
  };

  useEffect(() => {
    const updateCardStyles = () => {
      const newStyles = {};
      const windowHeight = window.innerHeight;

      cards.forEach((_, index) => {
        if (index === cards.length - 1) return;

        const card = cardsRef.current[index];
        const nextCard = cardsRef.current[index + 1];
        
        if (!card || !nextCard) return;

        const cardRect = card.getBoundingClientRect();
        const nextCardRect = nextCard.getBoundingClientRect();
        
        const offsetTop = 20 + index * 20;
        const cardHeight = card.clientHeight;

        // Calculate scroll percentage based on next card's position
        const startOffset = offsetTop;
        const endOffset = windowHeight - cardHeight;
        const scrollRange = windowHeight - startOffset - endOffset;
        
        let percentageY = 0;
        if (nextCardRect.top < windowHeight - endOffset) {
          percentageY = Math.min(1, Math.max(0, 
            (windowHeight - endOffset - nextCardRect.top) / scrollRange
          ));
        }

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY
        });

        const brightness = valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY
        });

        newStyles[index] = {
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`
        };
      });

      setCardStyles(newStyles);
    };

    const handleScroll = () => {
      updateCardStyles();
    };

    // Initialize card heights and padding
    const initializeCards = () => {
      if (containerRef.current && cardsRef.current[0]) {
        const cardHeight = cardsRef.current[0].clientHeight;
        containerRef.current.style.setProperty('--cards-count', cards.length);
        containerRef.current.style.setProperty('--card-height', `${cardHeight}px`);
        
        cardsRef.current.forEach((card, index) => {
          const offsetTop = 20 + index * 20;
          card.style.paddingTop = `${offsetTop}px`;
        });
      }
    };

    // Set up observers and initial state
    initializeCards();
    updateCardStyles();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', initializeCards);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', initializeCards);
    };
  }, [cards.length]);

  return (
    <div className="bg-[#fdfcf9] min-h-screen border ">    
      <div className="flex flex-col lg:flex-row px-[5%] py-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium">
            Backed by Nature. Built for Your Routine.
          </h1>
          <p className="mb-5 text-[16px] lg:text-[18px]">
            NeoGreens goes where you go - from home to the office to the gym. One
            scoop a day will help you overcome all your wellness roadblocks with
            ease.
          </p>
          <button className="px-8 py-4 mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all transform hover:scale-105 w-fit">
            Coming Soon
          </button>
          <img
            src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
            alt="Nature"
            className="w-full lg:w-[80%] mt-8"
          />
        </div>

        {/* Cards Section */}
        <div className="lg:w-1/2">
          <div 
            ref={containerRef}
            className="cards w-full max-w-4xl mx-auto grid gap-10"
            style={{
              gridTemplateRows: `repeat(var(--cards-count), var(--card-height))`
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="card sticky top-0"
                data-index={index}
              >
                <div 
                  className="card__inner bg-white rounded-2xl flex overflow-hidden shadow-2xl will-change-transform transform-origin-center-top"
                  style={cardStyles[index] || {}}
                >
                  <div className="card__image-container w-2/5 flex-shrink-0">
                    <img
                      className="card__image w-full h-full object-cover aspect-square"
                      src={card.image}
                      alt={card.text}
                    />
                  </div>
                  <div className="card__content p-8 lg:p-10 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={card.icon} 
                        alt="icon" 
                        className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0" 
                      />
                      <h1 className="card__title text-2xl lg:text-3xl font-semibold text-[#16263a] flex-1">
                        {card.text}
                      </h1>
                    </div>
                    <p className="card__description leading-relaxed text-base lg:text-lg text-[#16263a]">
                      {card.des}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;