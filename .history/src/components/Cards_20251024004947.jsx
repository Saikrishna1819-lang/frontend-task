
// // import React, { useRef, useEffect, useState } from "react";

// // const Cards = () => {
// //   const cards = [
// //     {
// //       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
// //       text: "Feel Foggy or Unfocused?",
// //       des: "Designed to support mental clarity with B12 and adaptogens.",
// //       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
// //     },
// //     {
// //       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
// //       text: "Bloating or Indigestion?",
// //       des: "Aids digestion with probiotics and digestive enzymes.",
// //       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
// //     },
// //     {
// //       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
// //       text: "Constant Energy Crashes?",
// //       des: "Supports sustained energy with clean, plant-based nutrients.",
// //       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
// //     },
// //     {
// //       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
// //       text: "Busy Routines messing up nutrition?",
// //       des: "One simple scoop a day keeps your essentials covered.",
// //       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
// //     },
// //     {
// //       icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
// //       text: "Too many supplements to choose from?",
// //       des: "NeoGreens simplifies it all. Just one powder, once a day.",
// //       image: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
// //     },
// //   ];

// //   const cardsRef = useRef([]);
// //   const containerRef = useRef(null);
// //   const [cardStyles, setCardStyles] = useState({});

// //   const valueAtPercentage = ({ from, to, percentage }) =>
// //     from + (to - from) * percentage;

// //   useEffect(() => {
// //     const updateCardStyles = () => {
// //       const newStyles = {};
// //       const windowHeight = window.innerHeight;
// //       const containerRect = containerRef.current?.getBoundingClientRect();
// //       const navbarHeight = 80;
// //       const startPoint = navbarHeight;

// //       if (!containerRect) return;

// //       const startAnimation = containerRect.top <= startPoint;

// //       if (!startAnimation) {
// //         cards.forEach((_, i) => {
// //           newStyles[i] = { transform: "scale(1)", filter: "brightness(1)" };
// //         });
// //         setCardStyles(newStyles);
// //         return;
// //       }

// //       cards.forEach((_, index) => {
// //         if (index === cards.length - 1) return;
// //         const nextCard = cardsRef.current[index + 1];
// //         if (!nextCard) return;

// //         const nextCardRect = nextCard.getBoundingClientRect();
// //         const scrollRange = windowHeight * 0.8;
// //         const percentageY = Math.min(
// //           1,
// //           Math.max(0, (windowHeight - nextCardRect.top) / scrollRange)
// //         );

// //         const toScale = 1 - (cards.length - 1 - index) * 0.1;
// //         const scale = valueAtPercentage({ from: 1, to: toScale, percentage: percentageY });
// //         const brightness = valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY });

// //         newStyles[index] = {
// //           transform: `scale(${scale})`,
// //           filter: `brightness(${brightness})`,
// //           transition: "transform 0.3s ease-out, filter 0.3s ease-out",
// //         };
// //       });

// //       setCardStyles(newStyles);
// //     };

// //     const handleScroll = () => updateCardStyles();
// //     const handleResize = () => updateCardStyles();

// //     updateCardStyles();
// //     window.addEventListener("scroll", handleScroll);
// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [cards.length]);

// //   return (
// //     <div className="bg-[#fdfcf9] min-h-screen border-t border-gray-200">
// //       <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-[12%] py-10">
// //         {/* Left Section */}
// //         <div className="lg:w-1/2 lg:sticky lg:top-[140px]  lg:h-[calc(100vh-80px)] flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0">
// //           <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium leading-tight text-[#16263a]">
// //             Backed by Nature. Built for Your Routine.
// //           </h1>
// //           <p className="mb-5 text-[16px] lg:text-[18px] text-[#16263a]/80 leading-relaxed">
// //             NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
// //           </p>
// //           <button className="px-8 py-4 mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all hover:scale-105 w-fit">
// //             Coming Soon
// //           </button>
// //           <img
// //             src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
// //             alt="Nature"
// //             className="w-full lg:w-[80%] mt-8"
// //           />
// //         </div>

// //         {/* Cards Section */}
// //         <div className="lg:w-1/2" ref={containerRef}>
// //           <div className="w-full max-w-4xl mx-auto grid gap-10">
// //             {cards.map((card, index) => (
// //               <div
// //                 key={index}
// //                 ref={(el) => (cardsRef.current[index] = el)}
// //                 className="sticky top-[100px]"
// //               >
// //                 <div
// //                   className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
// //                   style={cardStyles[index] || {}}
// //                 >
// //                   {/* Card Inner */}
// //                   <div className="flex flex-col p-6">
// //                     {/* Icon + Title */}
// //                     <div className="flex items-start gap-3 mb-3">
// //                       <img
// //                         src={card.icon}
// //                         alt="icon"
// //                         className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
// //                       />
// //                       <h3 className="text-xl sm:text-2xl font-semibold text-[#16263a] leading-snug">
// //                         {card.text}
// //                       </h3>
// //                     </div>

// //                     {/* Description */}
// //                     <p className="text-[#16263a]/80 text-base sm:text-lg mb-4 leading-relaxed">
// //                       {card.des}
// //                     </p>

// //                     {/* Image */}
// //                     <div className="overflow-hidden rounded-xl mt-2">
// //                       <img
// //                         src={card.image}
// //                         alt={card.text}
// //                         className="w-full h-44 sm:h-36 object-cover"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;


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

//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);
//   const [cardStyles, setCardStyles] = useState({});

//   const valueAtPercentage = ({ from, to, percentage }) =>
//     from + (to - from) * percentage;

//   useEffect(() => {
//     const updateCardStyles = () => {
//       const newStyles = {};
//       const windowHeight = window.innerHeight;
//       const containerRect = containerRef.current?.getBoundingClientRect();
//       const navbarHeight = 80;
//       const startPoint = navbarHeight;

//       if (!containerRect) return;

//       const startAnimation = containerRect.top <= startPoint;

//       if (!startAnimation) {
//         cards.forEach((_, i) => {
//           newStyles[i] = { transform: "scale(1)", filter: "brightness(1)" };
//         });
//         setCardStyles(newStyles);
//         return;
//       }

//       cards.forEach((_, index) => {
//         if (index === cards.length - 1) return;
//         const nextCard = cardsRef.current[index + 1];
//         if (!nextCard) return;

//         const nextCardRect = nextCard.getBoundingClientRect();
//         const scrollRange = windowHeight * 0.8;
//         const percentageY = Math.min(
//           1,
//           Math.max(0, (windowHeight - nextCardRect.top) / scrollRange)
//         );

//         const toScale = 1 - (cards.length - 1 - index) * 0.1;
//         const scale = valueAtPercentage({ from: 1, to: toScale, percentage: percentageY });
//         const brightness = valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY });

//         newStyles[index] = {
//           transform: `scale(${scale})`,
//           filter: `brightness(${brightness})`,
//           transition: "transform 0.3s ease-out, filter 0.3s ease-out",
//         };
//       });

//       setCardStyles(newStyles);
//     };

//     const handleScroll = () => updateCardStyles();
//     const handleResize = () => updateCardStyles();

//     updateCardStyles();
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [cards.length]);

//   return (
//     <div className="bg-[#fdfcf9] min-h-screen border-t border-gray-200">
//       <div className="flex flex-col lg:flex-row px-4 sm:px-32 lg:px-[12%] py-10 lg:py-18">
//         {/* Left Section */}
//         <div className="lg:w-1/2 lg:sticky lg:top-[140px] lg:h-[calc(100vh-80px)] flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0 text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium leading-tight text-[#16263a]">
//             Backed by Nature. Built for Your Routine.
//           </h1>
//           <p className="mb-5 text-[16px] lg:text-[18px] text-[#16263a]/80 leading-relaxed">
//             NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <button className="px-8 py-4 mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all hover:scale-105 w-fit">
//               Coming Soon
//             </button>
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <img
//               src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
//               alt="Nature"
//               className="w-full lg:w-[80%] mt-8"
//             />
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div className="lg:w-1/2" ref={containerRef}>
//           <div className="w-full max-w-4xl mx-auto grid gap-10">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 className="sticky top-[100px]"
//               >
//                 <div
//                   className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
//                   style={cardStyles[index] || {}}
//                 >
//                   {/* Card Inner */}
//                   <div className="flex flex-col p-6">
//                     {/* Icon + Title */}
//                     <div className="flex items-start gap-3 mb-3">
//                       <img
//                         src={card.icon}
//                         alt="icon"
//                         className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
//                       />
//                       <h3 className="text-xl sm:text-2xl font-semibold text-[#16263a] leading-snug">
//                         {card.text}
//                       </h3>
//                     </div>

//                     {/* Description */}
//                     <p className="text-[#16263a]/80 text-base sm:text-lg mb-4 leading-relaxed">
//                       {card.des}
//                     </p>

//                     {/* Image */}
//                     <div className="overflow-hidden rounded-xl mt-2">
//                       <img
//                         src={card.image}
//                         alt={card.text}
//                         className="w-full h-44 sm:h-36 object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React, { useRef, useEffect, useState } from "react";

const Cards = () => {
  const cards = [
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

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [cardStyles, setCardStyles] = useState({});

  const valueAtPercentage = ({ from, to, percentage }) =>
    from + (to - from) * percentage;

  useEffect(() => {
    const updateCardStyles = () => {
      const newStyles = {};
      const windowHeight = window.innerHeight;
      const containerRect = containerRef.current?.getBoundingClientRect();
      const navbarHeight = 80;
      const startPoint = navbarHeight;

      if (!containerRect) return;

      const startAnimation = containerRect.top <= startPoint;

      if (!startAnimation) {
        cards.forEach((_, i) => {
          newStyles[i] = { transform: "scale(1)", filter: "brightness(1)" };
        });
        setCardStyles(newStyles);
        return;
      }

      cards.forEach((_, index) => {
        if (index === cards.length - 1) return;
        const nextCard = cardsRef.current[index + 1];
        if (!nextCard) return;

        const nextCardRect = nextCard.getBoundingClientRect();
        const scrollRange = windowHeight * 0.8;
        const percentageY = Math.min(
          1,
          Math.max(0, (windowHeight - nextCardRect.top) / scrollRange)
        );

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const scale = valueAtPercentage({ from: 1, to: toScale, percentage: percentageY });
        const brightness = valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY });

        newStyles[index] = {
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
          transition: "transform 0.3s ease-out, filter 0.3s ease-out",
        };
      });

      setCardStyles(newStyles);
    };

    const handleScroll = () => updateCardStyles();
    const handleResize = () => updateCardStyles();

    updateCardStyles();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [cards.length]);

  return (
    <div className="bg-[#fdfcf9] min-h-screen border-t border-gray-200">
      <div className="flex flex-col lg:flex-row px-4 sm:px-32 lg:px-[12%] py-10 lg:py-18">
        {/* Left Section - Sticky on mobile/tablet, sticky on desktop */}
        <div className="lg:w-1/2 sticky top-[80px] lg:sticky lg:top-[140px] lg:h-[calc(100vh-80px)] flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0 text-center lg:text-left bg-[#fdfcf9] z-10 py-6 lg:py-0">
          <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium leading-tight text-[#16263a]">
            Backed by Nature. Built for Your Routine.
          </h1>
          <p className="mb-5 text-[16px] lg:text-[18px] text-[#16263a]/80 leading-relaxed">
            NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-8 py-4 mb-6 lg:mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all hover:scale-105 w-fit">
              Coming Soon
            </button>
          </div>
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
              alt="Nature"
              className="w-full lg:w-[80%] mt-4 lg:mt-8"
            />
          </div>
        </div>

        {/* Cards Section - Scrollable on mobile/tablet */}
        <div className="lg:w-1/2 lg:mt-0 mt-8" ref={containerRef}>
          <div className="w-full max-w-4xl mx-auto grid gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="sticky top-[100px]"
              >
                <div
                  className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
                  style={cardStyles[index] || {}}
                >
                  {/* Card Inner */}
                  <div className="flex flex-col p-6">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={card.icon}
                        alt="icon"
                        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                      />
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#16263a] leading-snug">
                        {card.text}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#16263a]/80 text-base sm:text-lg mb-4 leading-relaxed">
                      {card.des}
                    </p>

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl mt-2">
                      <img
                        src={card.image}
                        alt={card.text}
                        className="w-full h-44 sm:h-36 object-cover"
                      />
                    </div>
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