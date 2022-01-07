import React from "react";
import "./App.scss";
import {
  Navbar,
  Footer,
  PokemonList,
  PokemonDetails,
  ErrorPage,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PokemonList />} />

        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />

        {/* figure out how to show error page */}
        <Route element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
