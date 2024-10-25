"use client";
import {
  PokemonEvolutionChain,
  PokemonSpeciesInEvolutionChain,
} from "@/types/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Image, Skeleton } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const EvolutionChain = ({
  evolutionChain,
}: {
  evolutionChain: PokemonEvolutionChain;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  const handleViewDetails = (id: number) => {
    if (id) {
      route.push(`/pokemon/${id}`);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex items-center justify-center gap-28">
        {evolutionChain.pokemon_v2_pokemonspecies.map((pokemon, index) => (
          <React.Fragment key={pokemon.id}>
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="relative flex justify-center items-center group cursor-pointer"
                onClick={() => handleViewDetails(pokemon.id)}
              >
                <div
                  className={`absolute w-52 h-52 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
                ></div>
                <Skeleton isLoaded={isLoading} className="rounded-full">
                  <Image
                    alt={pokemon.name}
                    className="z-0 w-40 h-40 object-contain relative hover:scale-110 duration-500"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    onLoad={handleImageLoad}
                  />
                </Skeleton>
              </div>
              <span className="text-lg text-amber-500 dark:text-white font-medium capitalize mt-5">
                {pokemon.name}
              </span>
            </motion.div>
            {index < evolutionChain.pokemon_v2_pokemonspecies.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              >
                <ArrowRight className="w-10 h-10 text-amber-500" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
