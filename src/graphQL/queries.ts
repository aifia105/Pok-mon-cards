import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($limit: Int!) {
    pokemon(limit: $limit) {
      id
      name
      types {
        type {
          name
        }
      }
      sprites {
        front_default
      }
      color {
        name
      }
      height
      weight
      abilities {
        ability {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon_details(id: $id) {
      id
      name
      types {
        type {
          name
        }
      }
      sprites {
        front_default
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      color {
        name
      }
      height
      weight
      abilities {
        ability {
          name
        }
      }
      gender_rate
      capture_rate
      habitat {
        name
      }
      evolution_chain {
        evolves_to {
          species {
            name
            sprites {
              front_default
            }
          }
        }
      }
    }
  }
`;
