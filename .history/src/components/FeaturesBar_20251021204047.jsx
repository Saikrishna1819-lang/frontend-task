import React from "react";
import { Leaf, CircleDot, Flower, FlaskConical } from "lucide-react";

const features = [
  { icon: <CircleDot className="w-5 h-5" />, text: "Gluten-Free" },
  { icon: <Leaf className="w-5 h-5" />, text: "100% Vegan" },
  { icon: <Flower className="w-5 h-5" />, text: "Organic" },
  { icon: <FlaskConical className="w-5 h-5" />, text: "Zero Synthetic Nutrients" },
];

const FeaturesBar = () => {
  return (
    <div className="bg-[#f2efdc] text-[#2c4143] flex flex-wrap justify-center gap-6 py-6 px-4">
      {features.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-[16px]">
          {item.icon}
          <span>{item.text}</span>
          {index !== features.length - 1 && (
            <span className="mx-2 hidden sm:inline">•</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturesBar;
