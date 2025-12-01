import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { MdArrowOutward } from "react-icons/md";
import data from "../../data/info.json";

const Features = () => {
  return (
    <div className="w-full flex flex-col gap-10 mt-20 md:mt-0">
      {data.features.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`w-full p-10 bg-black/30 backdrop-blur-sm rounded-xl flex flex-col md:flex-row items-center gap-5 ${
              isReverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="border-2 border-dashed border-white/50 rounded-lg p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-[400px] h-[300px] object-cover rounded-md"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-white text-4xl font-bold font-serif tracking-wide mb-6">
                {item.name}.
                <a href={item.link}>
                  <MdArrowOutward
                    className="inline-flex text-4xl ml-2 text-white hover:scale-110 transition-all duration-300"/>
                </a>
              </h1>

              {/* Quote + Paragraph */}
              <div className="flex items-start gap-1 text-white/90 text-lg p-6">
                <ImQuotesLeft className="text-3xl shrink-0" />

                <p className="text-white/80 text-lg leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
