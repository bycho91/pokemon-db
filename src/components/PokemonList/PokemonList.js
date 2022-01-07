import React, { useEffect, useState } from "react";
import "./PokemonList.scss";

import { PokemonCard } from "..";

const PokemonList = ({ pokemons, isLoading }) => {
  if (isLoading) return "Loading...";
  return (
    <div className="pokemon-list-container">
      {pokemons?.results?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
