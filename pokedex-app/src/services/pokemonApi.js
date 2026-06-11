// For api calling at one place
import axios from "axios";
const api= axios.create({
    baseURL:"https://pokeapi.co/api/v2",
});
export const getPokemonList = async(
    limit =20,
    offset= 0
)=>{
    const responses= await api.get(
          `/pokemon?limit=${limit}&offset=${offset}`
    );
    return responses.data;
};
//details of pokemon
export const getPokemonDetails= async(name)=>{
    const responses= await api.get(
    `/pokemon/${name}`
    );
    return responses.data;
};