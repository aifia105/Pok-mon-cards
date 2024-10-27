"use client";
import CardComponent from "@/components/cardComponent";
import DropDown from "@/components/dropDownComponent";
import PaginationComponent from "@/components/pagination";
import { GET_POKEMON } from "@/graphQL/queries";
import {
  Pokemon,
  PokemonStat,
  pokemonStatTypes,
  PokemonType,
  pokemonTypes,
} from "@/types/types";
import { useQuery } from "@apollo/client";
import ErrorComponent from "@/components/errorComponent";
import LoadingComponent from "@/components/loadingComponent";
import { useMemo, useState } from "react";
import { itemsPerPage, totalPokemon } from "@/types/constants";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedStat, setSelectedStat] = useState("");
  const [search, setSearch] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_POKEMON, {
    variables: {
      limit: totalPokemon,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
    //configure cache behavior
    fetchPolicy: "cache-and-network",
  });

  const filterPokemonData = useMemo(() => {
    if (!data?.pokemon_v2_pokemon) return [];

    let filteredData = [...data.pokemon_v2_pokemon];

    // Apply search
    if (search && search !== "") {
      if (!isNaN(Number(search)))
        filteredData = filteredData.filter(
          (pokemon) => pokemon.id === Number(search)
        );
      else
        filteredData = filteredData.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Apply type filter
    if (selectedType && selectedType !== "All") {
      filteredData = filteredData.filter((pokemon) =>
        pokemon.pokemon_v2_pokemontypes.some(
          (type: PokemonType) =>
            type.pokemon_v2_type.name.toLowerCase() ===
            selectedType.toLowerCase()
        )
      );
      setCurrentPage(1);
    }

    // Apply sorting
    if (selectedStat && selectedStat !== "Number") {
      filteredData.sort((a, b) => {
        const statA = a.pokemon_v2_pokemonstats?.find((stat: PokemonStat) => {
          const statName = stat.pokemon_v2_stat.name
            .replace("-", " ")
            .toLowerCase();
          return statName === selectedStat.toLowerCase();
        });
        const statB = b.pokemon_v2_pokemonstats?.find((stat: PokemonStat) => {
          const statName = stat.pokemon_v2_stat.name
            .replace("-", " ")
            .toLowerCase();
          return statName === selectedStat.toLowerCase();
        });
        if (statA && statB) {
          return statB.base_stat - statA.base_stat;
        }
        return 0;
      });
    }

    return filteredData;
  }, [data, selectedType, selectedStat, search]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterPokemonData.slice(startIndex, endIndex);
  }, [filterPokemonData, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  if (loading) return <LoadingComponent />;
  if (error) {
    return <ErrorComponent refetch={refetch} />;
  }

  const totalPages = Math.ceil(filterPokemonData.length / itemsPerPage);

  return (
    <section className="xl:h-full pt-10 pb-12 xl:pb-20 xl:pt-15">
      <div className="container mx-auto">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Pokémon Stats Explorer
          </h1>
          <p className="text-center text-gray-600 dark:text-white/60 mt-2">
            Your go-to hub for detailed Pokémon stats, offering a comprehensive
            look at every Pokémon’s strengths and abilities.
          </p>
        </div>

        <div className="flex mb-4 gap-x-2 ml-1 2xl:ml-9">
          <DropDown
            name="Filter"
            dropDownList={pokemonTypes}
            onSelect={setSelectedType}
          ></DropDown>
          <DropDown
            name="Sort"
            dropDownList={pokemonStatTypes}
            onSelect={setSelectedStat}
          ></DropDown>
        </div>
        <div className="flex-grow flex justify-center mb-10">
          <div className="flex items-center justify-center w-full max-w-full">
            <Input
              onChange={(e) => handleSearch(e.target.value)}
              classNames={{
                base: "w-full h-12",
                mainWrapper: "h-full",
                input: "text-medium",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Search Pokémon..."
              size="lg"
              startContent={<Search size={20} />}
              type="search"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {!loading &&
            paginatedData.map((pokemon: Pokemon) => (
              <CardComponent
                key={pokemon.id}
                pokemon={pokemon}
                index={pokemon.id}
              />
            ))}
        </div>
        {!loading && (
          <div className="mt-2">
            <PaginationComponent
              currentPage={currentPage}
              onPageChange={handlePageChange}
              total={totalPages}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
