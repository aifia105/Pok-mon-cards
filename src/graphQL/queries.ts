import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query getPokemons($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      order
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query getPokemonDetails($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        gender_rate
        capture_rate
        pokemon_v2_pokemonhabitat {
          name
        }
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
            id
            evolves_from_species_id
          }
        }
      }
    }
  }
`;
