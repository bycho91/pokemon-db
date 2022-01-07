import axios from "axios";

export const getPokemonDetails = async (url) => {
  const pokemonData = await axios.get(url).then((res) => res.data);

  console.log(pokemonData);

  return pokemonData;
};
