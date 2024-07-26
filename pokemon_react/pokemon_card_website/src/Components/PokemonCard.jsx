import React from "react";

const PokemonCard = () => {
  return (
    <div className="bg-white hover:scale-105 h-[360px] w-72 rounded-lg border flex gap-2 flex-col justify-start items-center overflow-hidden">
      <img src="./images.png" className="h-40 w-full" />
      <p className="font-bold text-2xl">Pikachu</p>
      <p className="bg-green-600 text-white px-5 py-[4px] rounded-xl font-semibold">
        Free
      </p>
      <div className="flex gap-1 w-full items-center justify-between px-4 mt-3">
        <p className="font-semibold text-sm">
          Height:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">5</span>
        </p>
        <p className="font-semibold text-sm">
          Weight:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">5000</span>
        </p>
        <p className="font-semibold text-sm">
          Speed:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">1000</span>
        </p>
      </div>

      <div className="flex w-full items-center justify-between px-4 mt-4 text-sm">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">65</span>
          <p className="font-semibold">Experience</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">65</span>
          <p className="font-semibold">Attack</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">
            Lightning
          </span>
          <p className="font-semibold">Abilities</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
