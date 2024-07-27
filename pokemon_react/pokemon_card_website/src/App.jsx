import { useEffect, useState } from 'react'
import PokemonCard from './Components/PokemonCard';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = 'https://pokeapi.co/api/v2/pokemon?limit=124';

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json(); 
      // console.log(data); 

      const detailedPokemonData = data.results.map(async (currData) =>{
        const res = await fetch(currData.url);
        const data = await res.json();
        // console.log(data);
        setLoading(false);
        return data;
      });

      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Search Functionality
  const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()));

  if(loading) {
    return <div className='w-full h-[100vh] overflow-y-hidden flex items-center justify-center'>
      <h1 className='text-4xl'>Loading...</h1>
    </div>
  }
  
  if(error) {
    return <div className='w-full h-[100vh] overflow-y-hidden flex items-center justify-center'>
      <h1 className='text-4xl'>{error.message}</h1>
    </div>
  }

  return (
    <div className="w-full min-h-screen flex gap-10 flex-col justify-start py-10 px-2 items-center bg-gray-200">
      <h1 className="text-4xl font-semibold">Lets Catch Pokemon</h1>
      <input
        type="text"
        className="border-b-4 border-sky-500 focus:outline-none px-2 py-1 w-64 rounded"
        placeholder="Find Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="flex gap-5 flex-wrap justify-center items-center">
        {
          searchData.map((currPokemon) => {
            return <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
          })
        }
      </ul>
    </div>
  );
}

export default App
