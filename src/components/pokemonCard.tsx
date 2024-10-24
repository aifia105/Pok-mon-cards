"use client";
import { pokemonIconsGetter } from "@/types/operations";
import { PokemonDetails, PokemonType } from "@/types/types";
import { Skeleton, Image, Chip } from "@nextui-org/react";
import React, { useState } from "react";

const PokemonCardComponent = ({ pokemon }: { pokemon: PokemonDetails }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <div className="w-full h-[450px] bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B] flex flex-col">
      {/* Title section */}
      <div className="flex items-center justify-center space-x-2 mt-4 text-2xl">
        <p className="text-gray-600 dark:text-white/60 uppercase font-bold">
          {`${pokemon.id}.`}
        </p>
        <h4 className="text-amber-500 dark:text-white font-bold capitalize">
          {pokemon.name}
        </h4>
      </div>

      {/* Image section  */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex justify-center items-center group">
          <div
            className={`animate-pulse absolute w-[300px] h-[300px] rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
          ></div>
          <Skeleton isLoaded={isLoading} className="rounded-full">
            <Image
              alt="Card background"
              className="z-0 w-[250px] h-[250px] object-contain relative"
              src={
                pokemon.pokemon_v2_pokemonsprites[0].sprites.other[
                  "official-artwork"
                ].front_default
              }
              onLoad={handleImageLoad}
            />
          </Skeleton>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-7 mb-4">
        {pokemon.pokemon_v2_pokemontypes.map(
          (type: PokemonType, index: number) => {
            const icon = pokemonIconsGetter(
              type.pokemon_v2_type.name,
              "amber-500",
              "20"
            );
            return (
              <div key={index}>
                <Chip
                  startContent={icon}
                  variant="flat"
                  color="warning"
                  className="text-xl p-4 cursor-default capitalize "
                  size="lg"
                >
                  {type.pokemon_v2_type.name}
                </Chip>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default PokemonCardComponent;
