import React from "react";

const PokemonCard = ({pokemonData}) => {
  return (
    <div className="bg-white hover:scale-105 h-[360px] w-72 rounded-lg border flex gap-2 flex-col justify-start items-center overflow-hidden">
      <img src={pokemonData.sprites.other.dream_world.front_default} className="h-40 w-full" />
      <p className="font-bold text-2xl">{pokemonData.name}</p>
      <p className="bg-green-600 text-white px-5 py-[4px] rounded-xl font-semibold">
        {pokemonData.types.map(currType => currType.type.name).join(", ")}
      </p>
      <div className="flex gap-1 w-full items-center justify-between px-4 mt-3">
        <p className="font-semibold text-sm">
          Height:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">{pokemonData.height}</span>
        </p>
        <p className="font-semibold text-sm">
          Weight:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">{pokemonData.weight}</span>
        </p>
        <p className="font-semibold text-sm">
          Speed:{" "}
          <span className="text-gray-700 text-[12px] font-semibold">{pokemonData.stats[5].base_stat}</span>
        </p>
      </div>

      <div className="flex w-full items-center justify-between px-4 mt-4 text-sm">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">{pokemonData.base_experience}</span>
          <p className="font-semibold">Experience</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">{pokemonData.stats[1].base_stat}</span>
          <p className="font-semibold">Attack</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[12px] font-semibold text-gray-700">
            {
              pokemonData.abilities[0].ability.name
            }
          </span>
          <p className="font-semibold">Abilities</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
