

const Benefits=()=> {
  const benefits = [
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/increase.svg",
      title: 'Increased energy levels',
    
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/improved.svg",
      title: 'Improved gut health',
      
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/boosted.svg",
      title: 'Boosted Immunity',
     
    },
    {
      icon:"https://neogreens.com/wp-content/uploads/2025/06/natural-1.svg",
      title: 'Natural Detox',
    
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/daily.svg",
      title: 'Daily nourishment',
      
    }
  ];

  return (
    <section className="py-[40px] bg-[#f9f7f0]">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-[92px] h-[78] mx-auto mb-4 rounded-full">
                <img src={benefit.icon}></img>
              </div>
              <h4 className="font-bold text-[#0a0a0a] mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
