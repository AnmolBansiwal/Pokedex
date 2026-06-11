import { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonDetails,
} from "./services/pokemonApi";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonList();

        const detailedPokemon = await Promise.all(
          data.results.map((poke) =>
            getPokemonDetails(poke.name)
          )
        );

        setPokemon(detailedPokemon);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Pokédex
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemon.map((poke) => (
          <PokemonCard
            key={poke.id}
            pokemon={poke}
          />
        ))}
      </div>
    </div>
  );
}

export default App;