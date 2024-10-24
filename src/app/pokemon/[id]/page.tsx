"use client";

import { HomeIcon } from "lucide-react";
import NextLink from "next/link";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAILS } from "@/graphQL/queries";
import LoadingComponent from "@/components/loadingComponent";
import ErrorComponent from "@/components/errorComponent";
import PokemonDetailsComponent from "@/components/pokemonDetails";
import PokemonCardComponent from "@/components/pokemonCard";
import { PokemonStat } from "@/types/types";

type Props = {
  params: {
    id: string;
  };
};

const Pokemon = ({ params }: Props) => {
  const { id } = params;

  const { loading, error, data, refetch } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      id: parseInt(id),
    },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent refetch={refetch} />;

  const pokemon = data.pokemon_v2_pokemon_by_pk;
  const evolutionChain =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain
      .pokemon_v2_pokemonspecies;
  console.log(evolutionChain);

  const pokemonStat = pokemon.pokemon_v2_pokemonstats.map(
    (stat: PokemonStat) => {
      return { name: stat.pokemon_v2_stat.name, base_stat: stat.base_stat };
    }
  );
  console.log(pokemonStat);

  return (
    <div className="xl:h-full pt-10 pb-12 xl:pb-20 xl:pt-13">
      <div className="container mx-auto max-w-screen">
        <NextLink href="/" passHref legacyBehavior>
          <div className="flex cursor-pointer gap-2 text-xl items-center font-medium text-amber-500">
            <HomeIcon />
            <div>Home</div>
          </div>
        </NextLink>
        {/* Main content container */}
        <div className="mt-10 flex flex-row items-start gap-7">
          {/* First div  */}
          <PokemonCardComponent pokemon={pokemon} />
          {/* Second div  */}
          <PokemonDetailsComponent pokemon={pokemon} />
          {/* end of second div */}
        </div>
        <div className="grid grid-cols-2 gap-4  mt-10">
          <div className="h-[550px] w-full bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B]">
            1
          </div>
          <div className="h-[550px] w-full bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B]">
            2{" "}
          </div>
        </div>
        <div className="h-[350px] w-full bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B] mt-10">
          1
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
