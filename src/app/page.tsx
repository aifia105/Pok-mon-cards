"use client";
import CardComponent from "@/components/cardComponent";
import DropDown from "@/components/dropDown";
import PaginationComponent from "@/components/pagination";
import { GET_POKEMON } from "@/graphQL/queries";
import { Pokemon, pokemonStatTypes, pokemonTypes } from "@/types/types";
import { useQuery } from "@apollo/client";
import ErrorComponent from "@/components/errorComponent";
import LoadingComponent from "@/components/loadingComponent";

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_POKEMON, {
    variables: { limit: 16 },
    notifyOnNetworkStatusChange: true,
    //configure cache behavior
    fetchPolicy: "cache-and-network",
  });

  if (loading && !data) return <LoadingComponent />;
  if (error) {
    return <ErrorComponent refetch={refetch} />;
  }

  return (
    <section className="xl:h-full pt-10 pb-12 xl:pb-20 xl:pt-15">
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Pokémon Stats Explorer
          </h1>
          <p className="text-center text-gray-600 dark:text-white/60 mt-2">
            Your go-to hub for detailed Pokémon stats, offering a comprehensive
            look at every Pokémon’s strengths and abilities.
          </p>
        </div>
        <div className="flex mb-4 gap-x-2 ml-1 2xl:ml-9">
          <DropDown name="Filter" dropDownList={pokemonTypes}></DropDown>
          <DropDown name="Sort" dropDownList={pokemonStatTypes}></DropDown>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {data.pokemon_v2_pokemon.map((pokemon: Pokemon, index: number) => (
            <CardComponent key={index} pokemon={pokemon} index={index} />
          ))}
        </div>
        <PaginationComponent></PaginationComponent>
      </div>
    </section>
  );
};

export default Home;
