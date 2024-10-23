import { pokemonIcons, pokemonStatIcons } from "./icons";

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  color: PokemonColor;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
}

export interface PokemonColor {
  name: string;
}

export interface GetPokemonData {
  pokemon: Pokemon[];
}

export interface GetPokemonVars {
  limit: number;
}

export interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonEvolutionSpecies {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonEvolutionChain {
  evolves_to: {
    species: PokemonEvolutionSpecies;
  }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  color: PokemonColor;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  gender_rate: number;
  capture_rate: number;
  habitat: {
    name: string;
  };
  evolution_chain: PokemonEvolutionChain;
}

export interface GetPokemonDetailsData {
  pokemon_details: PokemonDetails;
}

export interface GetPokemonDetailsVars {
  id: number;
}

// pokemon types
export const pokemonTypes = [
  { type: "All", icon: pokemonIcons.all },
  { type: "Normal", icon: pokemonIcons.Normal },
  { type: "Fire", icon: pokemonIcons.Fire },
  { type: "Water", icon: pokemonIcons.Water },
  { type: "Grass", icon: pokemonIcons.Grass },
  { type: "Electric", icon: pokemonIcons.Electric },
  { type: "Ice", icon: pokemonIcons.Ice },
  { type: "Fighting", icon: pokemonIcons.Fighting },
  { type: "Poison", icon: pokemonIcons.Poison },
  { type: "Ground", icon: pokemonIcons.Ground },
  { type: "Flying", icon: pokemonIcons.Flying },
  { type: "Psychic", icon: pokemonIcons.Psychic },
  { type: "Bug", icon: pokemonIcons.Bug },
  { type: "Rock", icon: pokemonIcons.Rock },
  { type: "Ghost", icon: pokemonIcons.Ghost },
  { type: "Dragon", icon: pokemonIcons.Dragon },
  { type: "Dark", icon: pokemonIcons.Dark },
  { type: "Steel", icon: pokemonIcons.Steel },
  { type: "Fairy", icon: pokemonIcons.Fairy },
];

// pokemon stats types
export const pokemonStatTypes = [
  { type: "Number", icon: pokemonStatIcons.number },
  { type: "HP", icon: pokemonStatIcons.Hp },
  { type: "Attack", icon: pokemonStatIcons.Attack },
  { type: "Defense", icon: pokemonStatIcons.Defense },
  { type: "Special Attack", icon: pokemonStatIcons.Special_Attack },
  { type: "Special Defense", icon: pokemonStatIcons.Special_Defense },
  { type: "Speed", icon: pokemonStatIcons.Speed },
];
