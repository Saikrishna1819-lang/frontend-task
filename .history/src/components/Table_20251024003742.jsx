const Table=()=> {
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
    <section className="py-[40px] sm:py-[50px] md:py-[120px] px-4 sm:px-6 lg:px-[12%] bg-[#fdfdfa]">
      <div className="max-w-5xl mx-auto">
        {/* Header - Same as your original */}
        <div className="mb-12 text-center px-0 md:px-28">
          <h2 className="text-3xl md:text-4xl font-medium text-[#0a0a0a] mb-4">
            One Scoop. 60+ Nutrients. It's That Easy.
          </h2>
          <p className="mx-auto text-base md:text-lg text-gray-600 max-w-2xl">
            NeoGreens is built to take the confusion out of wellness. you get the essentials – no synthetic ingredients, harsh formulas, or hidden additives. just smart, science-backed nutrition that respects your time and your trust.
          </p>
        </div>

        <div className="p-8 overflow-x-auto bg-white shadow-lg rounded-3xl">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left text-[22px] py-4 px-4 font-bold text-[#0a0a0a]">Information</th>
                <th className="px-4 bg-[#2c4143] py-4">
                  <div className="px-4 py-2 font-bold text-white rounded-full ">
                    NeoGreens
                  </div>
                </th>
                <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Plant-Based</th>
                <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Liquid-Blend</th>
                <th className="px-4 py-4 text-[22px] font-semibold text-gray-700">Whey</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium text-lg w-[300px] text-[#344849]">{feature.name}</td>
                  <td className="px-4 py-4 bg-[#f9f4e8] text-center">
                    {feature.neogreens ? (
                      <div className="flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#f9d65c] flex items-center justify-center">
                          <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {feature.plant ? (
                      <div className="flex justify-center">
                       <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                       <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {feature.liquid ? (
                      <div className="flex justify-center">
                      <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                         <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {feature.whey ? (
                      <div className="flex justify-center">
                        <img src="https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg"className="text-[#0a0a0a]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                      <img src="https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg"className="text-gray-300" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Table;





