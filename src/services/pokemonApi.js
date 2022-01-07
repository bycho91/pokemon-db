import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://pokeapi.co/api/v2";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => `/pokemon?limit=30`,
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi;
