import React, { useState } from "react";
import "./App.scss";
import {
  Navbar,
  Footer,
  PokemonList,
  PokemonDetails,
  ErrorPage,
} from "./components";

import { useGetPokemonQuery } from "./services/pokemonApi";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const { data: pokemons, isLoading } = useGetPokemonQuery();

  return (
    <div className="app">
      <Navbar pokemons={pokemons} />
      <Routes>
        <Route
          exact
          path="/"
          element={<PokemonList pokemons={pokemons} isLoading={isLoading} />}
        />

        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />

        {/* figure out how to show error page */}
        <Route element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
