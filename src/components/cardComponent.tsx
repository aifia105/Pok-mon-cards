"use client";
import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Skeleton,
} from "@nextui-org/react";
import ModalComponent from "./modalComponent";
import { Pokemon } from "@/types/types";
import { pokemonIconsGetter } from "@/types/operations";

const CardComponent = ({
  pokemon,
  index,
}: {
  pokemon: Pokemon;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handlePokemonData = (pokemon: Pokemon) => {
    setPokemonData(pokemon);
  };

  return (
    <>
      <div
        key={index}
        className="flex justify-center items-center hover:scale-105 duration-500"
        onClick={() => {
          handleModal();
          handlePokemonData(pokemon);
        }}
      >
        <Card className="items-center col-span-2 sm:col-span-4 w-[300px] h-[400px] p-4">
          <CardHeader className="items-center absolute z-10 top-1 flex-col">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-xl text-gray-600 dark:text-white/60 uppercase font-bold">
                {`${pokemon.id}.`}
              </p>
              <h4 className="text-amber-500 dark:text-white font-bold text-xl capitalize">
                {pokemon.name}
              </h4>
            </div>
          </CardHeader>
          <div className="relative w-full h-full flex justify-center items-center group mt-4">
            <div
              className={`animate-pulse absolute w-[250px] h-[250px] rounded-full bg-transparent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
            ></div>
            <Skeleton isLoaded={isLoading} className="rounded-full">
              <Image
                alt="Card background"
                className="z-0 w-[200px] h-[200px] object-contain relative"
                src={
                  pokemon.pokemon_v2_pokemonsprites[0].sprites.other[
                    "official-artwork"
                  ].front_default
                }
                onLoad={handleImageLoad}
              />
            </Skeleton>
          </div>
          <CardFooter className="flex justify-center flex-col md:flex-row gap-2">
            {pokemon.pokemon_v2_pokemontypes.map((type, index) => {
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
                    className="text-lg p-2 cursor-default capitalize "
                    size="lg"
                  >
                    {type.pokemon_v2_type.name}
                  </Chip>
                </div>
              );
            })}
          </CardFooter>
        </Card>
      </div>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pokemonData={pokemonData}
      ></ModalComponent>
    </>
  );
};

export default CardComponent;
