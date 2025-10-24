const Badges=()=>
     {
  const badges = [
    { img:"https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg", text: 'Gluten-Free' },
    { img:"https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg" , text: '100% Vegan' },
    { img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg", text: 'Organic' },
    { img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg", text: 'Zero Synthetic Nutrients' }
  ];

  return (  
    <section className="bg-[#efecd6] py-6">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <img src={badge.img} className="text-[#344849]" />
              </div>
              <span className="font-medium text-sm text-[#344849]">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Badges