

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

      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const navbarHeight =120; // adjust if navbar height differs
      const startAnimationPoint = navbarHeight; // animation starts when section touches navbar
      const sectionVisible = containerRect.top <= startAnimationPoint;

      if (!sectionVisible) {
        // Reset all to initial state when above viewport
        cards.forEach((_, i) => {
          newStyles[i] = {
            transform: "scale(1)",
            filter: "brightness(1)",
          };
        });
        setCardStyles(newStyles);
        return;
      }

      cards.forEach((_, index) => {
        if (index === cards.length - 1) return;

        const card = cardsRef.current[index];
        const nextCard = cardsRef.current[index + 1];
        if (!card || !nextCard) return;

        const nextCardRect = nextCard.getBoundingClientRect();

        // Calculate scroll progress (0 to 1)
        const scrollRange = windowHeight * 0.8;
        let percentageY = Math.min(
          1,
          Math.max(
            0,
            (windowHeight - nextCardRect.top) / scrollRange
          )
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
      <div className="flex flex-col lg:flex-row px-[12%] py-20">
        {/* Left Content */}
        <div className="lg:w-1/2 lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] flex flex-col justify-center px-4 lg:px-10 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-serif mb-5 font-medium leading-tight">
            Backed by Nature. Built for Your Routine.
          </h1>
          <p className="mb-5 text-[16px] lg:text-[18px] text-[#16263a]/80 leading-relaxed">
            NeoGreens goes where you go — from home to the office to the gym. One
            scoop a day will help you overcome all your wellness roadblocks with ease.
          </p>
          <button className="px-8 py-4 mb-10 font-semibold rounded-full text-[#2c4143] bg-[#8e968c] mt-5 transition-all hover:scale-105 w-fit">
            Coming Soon
          </button>
          <img
            src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
            alt="Nature"
            className="w-full lg:w-[80%] mt-8"
          />
        </div>

        {/* Cards Section */}
        <div className="lg:w-1/2 " ref={containerRef}>
          <div className="w-full max-w-4xl mx-auto grid pt-10 gap-10 border ">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="card sticky top-[100px]"
              >
                <div
                  className="bg-white rounded-2xl flex overflow-hidden shadow-2xl transform-origin-top transition-all duration-300 ease-out"
                  style={cardStyles[index] || {}}
                >
                  <div className="w-2/5 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover aspect-square"
                      src={card.image}
                      alt={card.text}
                    />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={card.icon}
                        alt="icon"
                        className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
                      />
                      <h1 className="text-2xl lg:text-3xl font-semibold text-[#16263a] flex-1">
                        {card.text}
                      </h1>
                    </div>
                    <p className="leading-relaxed text-base lg:text-lg text-[#16263a]/80">
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
