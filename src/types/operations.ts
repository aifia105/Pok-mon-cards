import { pokemonStatTypes, pokemonTypes } from "./types";

export const pokemonIconsGetter = (type: string) => {
  const pokemonType = pokemonTypes.find((pokemon) => pokemon.type === type);
  return pokemonType?.icon;
};
export const pokemonStatGetter = (type: string) => {
  const pokemonStatType = pokemonStatTypes.find(
    (pokemon) => pokemon.type === type
  );
  return pokemonStatType?.icon;
};
