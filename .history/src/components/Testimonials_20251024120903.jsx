// const Testimonials=()=> {
//   const testimonials = [
//     {
//       icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
//       text: "Finally, mental clarity that sticks with just one scoop.",
//       author: "Krithi Koushal",
//       des: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-45-1.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
//       text: "No more bloating, only a lighter, happier gut.",
//       author: "Midhun Roy",
//       des:"I've tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty — my stomach feels balanced, refreshed, and energized.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
//       text: "Reset my routine inside and out.",
//       author: "Jennifer",
//       des: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-2.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
//       text: "From sluggish to unstoppable.",
//       author: "Rahul Harrison",
//       des: "I was dragged down by sluggish mornings — lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I’m more alert, active, and resilient.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-3.png"
//     },
//     {
//       icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
//       text: "One scoop, so many wins.",
//       author: "Emily Johnson",
//       des: "Travel, gym, work — NeoGreens travels with me. It’s like a reset button for digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
//       image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-4.png"
//     }
//   ];

// return (
//     <section className="py-20 px-4 sm:px-6 lg:px-[12%] bg-white relative overflow-hidden">
//       <div className="px-6 mx-auto max-w-7xl">
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-[32px] font-serif font-semibold text-[#344849] mb-3">
//             What Choosing Better Looks Like
//           </h2>
//           <p className="text-lg text-gray-600">
//             Every Scoop. A Step Towards Better Living.
//           </p>
//         </div>

//         {/* Scrollable Row */}
//         <div className="flex gap-8 pb-4 overflow-x-auto scrollbar-hide">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="flex  flex-col gap-12 justify-between flex-shrink-0 w-[300px] p-6 bg-white rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <img src={testimonial.icon} alt="Quote Icon" className="w-8 " />
//               <div className="flex flex-col gap-5">
//                 <p className="text-lg font-medium text-[#344849]">
//                   “{testimonial.text}”
//                 </p>
//                 <p className="text-gray-800 text-[16px] leading-relaxed">
//                   {testimonial.des}
//                 </p>
//               </div>
//               <div className="flex items-center gap-3 mt-6">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.author}
//                   className="object-cover w-10 h-10 rounded-full"
//                 />
//                 <span className="text-sm font-medium text-gray-800">
//                   {testimonial.author}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;



import { useState, useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      icon: "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "Finally, mental clarity that sticks with just one scoop.",
      author: "Krithi Koushal",
      des: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-45-1.png"
    },
    {
      icon: "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "No more bloating, only a lighter, happier gut.",
      author: "Midhun Roy",
      des: "I've tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty — my stomach feels balanced, refreshed, and energized.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46.png"
    },
    {
      icon: "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "Reset my routine inside and out.",
      author: "Jennifer",
      des: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-2.png"
    },
    {
      icon: "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "From sluggish to unstoppable.",
      author: "Rahul Harrison",
      des: "I was dragged down by sluggish mornings — lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I'm more alert, active, and resilient.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-3.png"
    },
    {
      icon: "https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "One scoop, so many wins.",
      author: "Emily Johnson",
      des: "Travel, gym, work — NeoGreens travels with me. It's like a reset button for digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-4.png"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320; // Width of card + gap
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update arrow visibility after scroll
    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < (container.scrollWidth - container.clientWidth));
    }, 300);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < (container.scrollWidth - container.clientWidth - 10));
  };

  return (
    <section className="py-20  bg-white relative">
      <div className="max-w-full mx-auto ">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2A4B46] mb-4">
            What Choosing Better Looks Like
          </h2>
          <p className="text-lg text-[#6B7280] font-light">
            Every Scoop, A Step Towards Better Living.
          </p>
        </div>

        {/* Testimonials Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 w-[270px] p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-16">
                  <img 
                    src={testimonial.icon} 
                    alt="Quote Icon" 
                    className="w-6 h-6 text-[#2A4B46]" 
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col gap-16 flex-grow">
                  <h3 className="text-lg font-semibold text-[#2A4B46]  leading-tight">
                    "{testimonial.text}"
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed  flex-grow">
                    {testimonial.des}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;