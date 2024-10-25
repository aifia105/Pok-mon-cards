"use client";
import CardComponent from "@/components/cardComponent";
import DropDown from "@/components/dropDown";
import PaginationComponent from "@/components/pagination";
import { GET_POKEMON } from "@/graphQL/queries";
import { Pokemon, pokemonStatTypes, pokemonTypes } from "@/types/types";
import { useQuery } from "@apollo/client";
import ErrorComponent from "@/components/errorComponent";
import LoadingComponent from "@/components/loadingComponent";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const { loading, error, data, refetch } = useQuery(GET_POKEMON, {
    variables: {
      limit: itemsPerPage,
      offset: (currentPage - 1) * itemsPerPage,
    },
    notifyOnNetworkStatusChange: true,
    //configure cache behavior
    fetchPolicy: "cache-and-network",
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(error);

  if (loading) return <LoadingComponent />;
  if (error) {
    return <ErrorComponent refetch={refetch} />;
  }

  const totalPokemon = 1008;
  const totalPages = Math.ceil(totalPokemon / itemsPerPage);

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
          {!loading &&
            data.pokemon_v2_pokemon.map((pokemon: Pokemon) => (
              <CardComponent
                key={pokemon.id}
                pokemon={pokemon}
                index={pokemon.id}
              />
            ))}
        </div>
        {!loading && (
          <PaginationComponent
            currentPage={currentPage}
            onPageChange={handlePageChange}
            total={totalPages}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
