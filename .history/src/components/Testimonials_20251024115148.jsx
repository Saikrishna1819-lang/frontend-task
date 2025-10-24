const Testimonials=()=> {
  const testimonials = [
    {
      icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "Finally, mental clarity that sticks with just one scoop.",
      author: "Krithi Koushal",
      des: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-45-1.png"
    },
    {
      icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "No more bloating, only a lighter, happier gut.",
      author: "Midhun Roy",
      des:"I've tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty — my stomach feels balanced, refreshed, and energized.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46.png"
    },
    {
      icon:"https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg",
      text: "Reset my routine inside and out.",
      author: "Jennifer",
      des: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
      image: "https://neogreens.com/wp-content/uploads/2025/09/Rectangle-46-2.png"
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
    <section className="py-20 px-4 sm:px-6 lg:px-[12%] bg-white relative overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-[32px] font-serif font-semibold text-[#344849] mb-3">
            What Choosing Better Looks Like
          </h2>
          <p className="text-lg text-gray-600">
            Every Scoop. A Step Towards Better Living.
          </p>
        </div>

        {/* Scrollable Row */}
        <div className="flex gap-8 pb-4 overflow-x-auto scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-12 justify-between flex-shrink-0 w-[300px] p-6 bg-white rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img src={testimonial.icon} alt="Quote Icon" className="w-8 " />
              <div className="flex flex-col gap-5">
                <p className="text-lg font-medium text-[#344849]">
                  “{testimonial.text}”
                </p>
                <p className="text-gray-800 text-[16px] leading-relaxed">
                  {testimonial.des}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="object-cover w-10 h-10 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;