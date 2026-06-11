import React from 'react'
import {useState, useEffect} from "react";
import { getPokemonList } from './services/pokemonApi';
function App() {
    const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
  const fetchPokemon = async () => {
    try {
      const data = await getPokemonList();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchPokemon();
}, []);
  if(loading){
    return(
      <h2>Loading......</h2>
    )
  }
  return (
    <div>
      <h1>PokeDex-app</h1>
      {pokemon.map((poke)=>(
        <h3 key={poke.name}>{poke.name}</h3>
      ))}
    </div>
  )
}

export default App
