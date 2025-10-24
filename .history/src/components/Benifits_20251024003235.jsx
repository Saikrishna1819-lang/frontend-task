

// const Benefits=()=> {
//   const benefits = [
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/increase.svg",
//       title: 'Increased energy levels',
    
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/improved.svg",
//       title: 'Improved gut health',
      
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/boosted.svg",
//       title: 'Boosted Immunity',
     
//     },
//     {
//       icon:"https://neogreens.com/wp-content/uploads/2025/06/natural-1.svg",
//       title: 'Natural Detox',
    
//     },
//     {
//       icon: "https://neogreens.com/wp-content/uploads/2025/06/daily.svg",
//       title: 'Daily nourishment',
      
//     }
//   ];

//   return (
//     <section className="py-[40px] bg-[#efecd6]">
//       <div className="px-6 mx-auto max-w-7xl">
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="text-center">
//               <div className="flex items-center justify-center w-[92px] h-[78] mx-auto mb-4 rounded-full">
//                 <img src={benefit.icon}></img>
//               </div>
//               <h4 className="font-normal  text-[#344849] text-[18px] mb-2">{benefit.title}</h4>
             
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Benefits;


const Benefits = () => {
  const benefits = [
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/increase.svg",
      title: 'Increased energy levels',
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/improved.svg",
      title: 'Improved gut health',
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/boosted.svg",
      title: 'Boosted Immunity',
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/natural-1.svg",
      title: 'Natural Detox',
    },
    {
      icon: "https://neogreens.com/wp-content/uploads/2025/06/daily.svg",
      title: 'Daily nourishment',
    }
  ];

  return (
    <section className="py-4 md:py-8 px-4 sm:px-6 lg:px-[12%] bg-[#efecd6]">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-3  lg:grid-cols-5 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-[92px] h-[78px] mx-auto mb-4">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-normal text-[#344849] text-base sm:text-lg lg:text-[18px] mb-2 leading-tight">
                {benefit.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;