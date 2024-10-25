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

export interface PokemonSpeciesInEvolutionChain {
  evolves_from_species_id: number | null;
  id: number;
  name: string;
  __typename: "pokemon_v2_pokemonspecies";
}

export interface PokemonEvolutionChain {
  pokemon_v2_pokemonspecies: PokemonSpeciesInEvolutionChain[];
  __typename: "pokemon_v2_evolutionchain";
}

interface PokemonHabitat {
  name: string;
  __typename: "pokemon_v2_pokemonhabitat";
}

interface PokemonSpecies {
  capture_rate: number;
  gender_rate: number;
  pokemon_v2_evolutionchain: PokemonEvolutionChain;
  pokemon_v2_pokemonhabitat: PokemonHabitat;
  __typename: "pokemon_v2_pokemonspecies";
}

export interface PokemonStat {
  base_stat: number;
  pokemon_v2_stat: {
    name: string;
    __typename: "pokemon_v2_stat";
  };
  __typename: "pokemon_v2_pokemonstat";
}

export interface PokemonDetails {
  id: number;
  name: string;
  pokemon_v2_pokemonabilities: PokemonAbility[];
  pokemon_v2_pokemonsprites: PokemonSpritesWrapper[];
  pokemon_v2_pokemontypes: PokemonType[];
  height: number;
  weight: number;
  pokemon_v2_pokemonspecy: PokemonSpecies;
  pokemon_v2_pokemonstats: PokemonStat[];
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
