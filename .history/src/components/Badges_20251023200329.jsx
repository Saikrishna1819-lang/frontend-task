// const Badges=()=>
//      {
//   const badges = [
//     { img:"https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg", text: 'Gluten-Free' },
//     { img:"https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg" , text: '100% Vegan' },
//     { img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg", text: 'Organic' },
//     { img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg", text: 'Zero Synthetic Nutrients' }
//   ];

//   return (  
//     <section className="bg-[#efecd6] py-4">
//       <div className="px-6 mx-auto max-w-7xl">
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//           {badges.map((badge, index) => (
//             <div key={index} className="flex items-center justify-center space-x-3">
//               <div className="flex items-center justify-center w-10 h-10  rounded-full">
//                 <img src={badge.img} className="text-[#344849]" />
//               </div>
//               <span className="font-normal text-[18px] text-[#344849]">{badge.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Badges



const Badges = () => {
  const badges = [
    { img: "https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg", text: 'Gluten-Free' },
    { img: "https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg", text: '100% Vegan' },
    { img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg", text: 'Organic' },
    { img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg", text: 'Zero Synthetic Nutrients' }
  ];

  return (  
    <section className="bg-[#efecd6] py-8 md:py-12">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 md:p-6 rounded-lg hover:bg-[#e6e2c8] transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-sm">
                <img 
                  src={badge.img} 
                  alt={badge.text}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain" 
                />
              </div>
              <span className="font-medium text-base md:text-lg lg:text-[18px] text-[#344849] whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Badges;