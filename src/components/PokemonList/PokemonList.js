import React, { useEffect, useState } from "react";
import "./PokemonList.scss";

import { useGetPokemonQuery } from "../../services/pokemonApi";
import { PokemonCard } from "..";

const PokemonList = () => {
  const { data: pokemons, isLoading } = useGetPokemonQuery();

  console.log(pokemons);
  if (isLoading) return "Loading...";
  return (
    <div className="pokemon-list-container">
      {pokemons?.results?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
