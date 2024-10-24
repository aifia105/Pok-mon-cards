import { pokemonIcons, pokemonStatIcons } from "./icons";

export interface PokemonSpritesOther {
  dream_world: {
    front_female: string | null;
    front_default: string;
  };
  home: {
    front_shiny: string;
    front_female: string | null;
    front_default: string;
    front_shiny_female: string | null;
  };
  "official-artwork": {
    front_shiny: string;
    front_default: string;
  };
  showdown: {
    back_shiny: string;
    back_female: string | null;
    front_shiny: string;
    back_default: string;
    front_female: string | null;
    front_default: string;
  };
}

export interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: PokemonSpritesOther;
  versions: Record<string, unknown>; // You can expand this if needed
}

export interface PokemonAbility {
  pokemon_v2_ability: {
    name: string;
  };
}

export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface PokemonSpritesWrapper {
  sprites: PokemonSprites;
}

export interface Pokemon {
  height: number;
  id: number;
  name: string;
  order: number;
  pokemon_v2_pokemonabilities: PokemonAbility[];
  pokemon_v2_pokemonsprites: PokemonSpritesWrapper[];
  pokemon_v2_pokemontypes: PokemonType[];
  weight: number;
}

export interface PokemonData {
  pokemon_v2_pokemon: Pokemon[];
}

export interface GetPokemonVars {
  limit: number;
}

// update
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
