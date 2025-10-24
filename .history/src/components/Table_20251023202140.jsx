// const Table=()=> {
//   const features = [
//     { name: 'Probiotic content', neogreens: true, plant: true, liquid: true, whey: false },
//     { name: 'Organic nutrients', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Scientific backing transparency', neogreens: true, plant: true, liquid: false, whey: false },
//     { name: 'Taste profile', neogreens: true, plant: true, liquid: false, whey: true },
//     { name: 'Ingredient sourcing transparency', neogreens: true, plant: true, liquid: false, whey: false },
//     { name: 'Cognitive-enhancing ingredients', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Gut–Brain Axis support', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Avoids questionable fillers (e.g., gums, stevia)', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Sustainability', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Protein quality', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Allergen-free', neogreens: true, plant: false, liquid: false, whey: false },
//     { name: 'Digestibility', neogreens: true, plant: false, liquid: false, whey: false }
//   ];

//   return (
//     <section className="py-[120px] px-[80px] bg-[#fdfdfa]">
//       <div className="max-w-5xl px-8 mx-auto">
//         <div className="mb-12 text-center px-28">
//           <h2 className="text-4xl md:text-[40px] font-medium text-[#0a0a0a] mb-4">
//             One Scoop. 60+ Nutrients. It's That Easy.
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600">
//             NeoGreens is built to take the confusion out of wellness. you get the essentials – no synthetic ingredients, harsh formulas, or hidden additives. just smart, science-backed nutrition that respects your time and your trust.
//           </p>
//         </div>

//         <div className="p-8 overflow-x-auto bg-white shadow-lg rounded-3xl">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b-2 border-gray-300">
//                 <th className="text-left text-[22px] py-4 px-4 font-bold text-[#0a0a0a]">Information</th>
//                 <th className="px-4 bg-[#2c4143] py-4">
//                   <div className="px-4 py-2 font-bold text-white rounded-full ">
//                     NeoGreens
//                   </div>
//                 </th>
//                 <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Plant-Based</th>
//                 <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Liquid-Blend</th>
//                 <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Whey</th>
//               </tr>
//             </thead>
//             <tbody>
//               {features.map((feature, index) => (
//                 <tr key={index} className="border-b border-gray-200">
//                   <td className="py-4 px-4 font-medium text-lg w-[300px] text-[#344849]">{feature.name}</td>
//                   <td className="px-4 py-4 bg-[#f9f4e8] text-center">
//                     {feature.neogreens ? (
//                       <div className="flex justify-center">
//                         <div className="w-6 h-6 rounded-full bg-[#f9d65c] flex items-center justify-center">
//                           <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex justify-center">
//                         <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-4 py-4 text-center">
//                     {feature.plant ? (
//                       <div className="flex justify-center">
//                        <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
//                       </div>
//                     ) : (
//                       <div className="flex justify-center">
//                        <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-4 py-4 text-center">
//                     {feature.liquid ? (
//                       <div className="flex justify-center">
//                       <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
//                       </div>
//                     ) : (
//                       <div className="flex justify-center">
//                          <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-4 py-4 text-center">
//                     {feature.whey ? (
//                       <div className="flex justify-center">
//                         <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
//                       </div>
//                     ) : (
//                       <div className="flex justify-center">
//                       <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Table;



const Table = () => {
  const features = [
    { name: 'Probiotic content', neogreens: true, plant: true, liquid: true, whey: false },
    { name: 'Organic nutrients', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Scientific backing transparency', neogreens: true, plant: true, liquid: false, whey: false },
    { name: 'Taste profile', neogreens: true, plant: true, liquid: false, whey: true },
    { name: 'Ingredient sourcing transparency', neogreens: true, plant: true, liquid: false, whey: false },
    { name: 'Cognitive-enhancing ingredients', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Gut–Brain Axis support', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Avoids questionable fillers (e.g., gums, stevia)', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Sustainability', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Protein quality', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Allergen-free', neogreens: true, plant: false, liquid: false, whey: false },
    { name: 'Digestibility', neogreens: true, plant: false, liquid: false, whey: false }
  ];

  return (
    <section className="py-16 md:py-[120px] px-4 sm:px-6 lg:px-8 bg-[#fdfdfa]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0a0a0a] mb-4 leading-tight">
            One Scoop. 60+ Nutrients. It's That Easy.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            NeoGreens is built to take the confusion out of wellness. You get the essentials – no synthetic ingredients, harsh formulas, or hidden additives. Just smart, science-backed nutrition that respects your time and your trust.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-4 md:space-x-8 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#f9d65c]"></div>
              <span className="text-[#344849]">Plant-based</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#f9d65c]"></div>
              <span className="text-[#344849]">Animal-based</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#f9d65c]"></div>
              <span className="text-[#344849]">Whey</span>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-[300px_120px_1fr_1fr_1fr] border-b-2 border-gray-300">
                <div className="p-6 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a]">Information</h3>
                </div>
                <div className="p-4 bg-[#2c4143] flex items-center justify-center">
                  <div className="px-4 py-2 font-bold text-white rounded-full text-sm md:text-base">
                    NeoGreens
                  </div>
                </div>
                <div className="p-6 text-center">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700">Plant-Based</span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700">Liquid-Blend</span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-xl md:text-2xl font-semibold text-gray-700">Whey</span>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-[300px_120px_1fr_1fr_1fr]">
                    {/* Feature Name - Fixed Column */}
                    <div className="p-6 flex items-center">
                      <span className="text-lg font-medium text-[#344849]">{feature.name}</span>
                    </div>
                    
                    {/* NeoGreens Column */}
                    <div className="p-4 bg-[#f9f4e8] flex items-center justify-center">
                      {feature.neogreens ? (
                        <div className="w-8 h-8 rounded-full bg-[#f9d65c] flex items-center justify-center">
                          <img 
                            src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg" 
                            alt="Yes" 
                            className="w-4 h-4"
                          />
                        </div>
                      ) : (
                        <img 
                          src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg" 
                          alt="No" 
                          className="w-6 h-6 text-gray-300"
                        />
                      )}
                    </div>
                    
                    {/* Plant-Based Column */}
                    <div className="p-6 flex items-center justify-center">
                      {feature.plant ? (
                        <div className="w-8 h-8 rounded-full bg-[#f9d65c] flex items-center justify-center">
                          <img 
                            src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg" 
                            alt="Yes" 
                            className="w-4 h-4"
                          />
                        </div>
                      ) : (
                        <img 
                          src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg" 
                          alt="No" 
                          className="w-6 h-6 text-gray-300"
                        />
                      )}
                    </div>
                    
                    {/* Liquid-Blend Column */}
                    <div className="p-6 flex items-center justify-center">
                      {feature.liquid ? (
                        <div className="w-8 h-8 rounded-full bg-[#f9d65c] flex items-center justify-center">
                          <img 
                            src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg" 
                            alt="Yes" 
                            className="w-4 h-4"
                          />
                        </div>
                      ) : (
                        <img 
                          src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg" 
                          alt="No" 
                          className="w-6 h-6 text-gray-300"
                        />
                      )}
                    </div>
                    
                    {/* Whey Column */}
                    <div className="p-6 flex items-center justify-center">
                      {feature.whey ? (
                        <div className="w-8 h-8 rounded-full bg-[#f9d65c] flex items-center justify-center">
                          <img 
                            src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg" 
                            alt="Yes" 
                            className="w-4 h-4"
                          />
                        </div>
                      ) : (
                        <img 
                          src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg" 
                          alt="No" 
                          className="w-6 h-6 text-gray-300"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;