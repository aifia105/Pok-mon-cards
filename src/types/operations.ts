import { pokemonStatTypes, pokemonTypes } from "./types";

export const pokemonIconsGetter = (
  type: string,
  color: string,
  size: string
) => {
  const pokemonType = pokemonTypes.find(
    (pokemon) => pokemon.type.toLowerCase() === type.toLowerCase()
  );
  return pokemonType?.icon(color, size);
};
export const pokemonStatGetter = (
  type: string,
  color: string,
  size: string
) => {
  const pokemonStatType = pokemonStatTypes.find(
    (pokemon) => pokemon.type.toLowerCase() === type.toLowerCase()
  );
  return pokemonStatType?.icon(color, size);
};
