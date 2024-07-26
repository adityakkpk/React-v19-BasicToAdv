import React from "react";
import PokemonCard from "./Components/PokemonCard";

const Pokemon = () => {
  return (
    <div className="w-full flex gap-10 flex-col justify-start py-10 px-2 items-center bg-gray-200">
      <h1 className="text-4xl font-semibold">Lets Catch Pokemon</h1>
      <input
        type="text"
        className="border-b-4 border-sky-500 focus:outline-none px-2 py-1 w-64 rounded"
        placeholder="Find Pokemon"
      />

      <div className="flex gap-5 flex-wrap justify-center items-center">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
};

export default Pokemon;
