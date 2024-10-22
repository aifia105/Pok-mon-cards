"use client";
import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Skeleton,
} from "@nextui-org/react";
import ModalComponent from "./modalComponent";

const CardComponent = ({ pokemon, index }: { pokemon: any; index: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        key={index}
        className="flex justify-center items-center hover:scale-105 duration-500"
        onClick={handleModal}
      >
        <Card className="items-center col-span-2 sm:col-span-4 w-[300px] h-[400px] p-4">
          <CardHeader className="items-center absolute z-10 top-1 flex-col">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-xl text-gray-600 dark:text-white/60 uppercase font-bold">
                {`${pokemon.number} -`}
              </p>
              <h4 className="text-gray-800 dark:text-white font-bold text-xl">
                {pokemon.name}
              </h4>
            </div>
          </CardHeader>
          <div className="relative w-full h-full flex justify-center items-center group mt-4">
            <div
              className={`absolute w-[250px] h-[250px] rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
            ></div>
            <Skeleton isLoaded={isLoading} className="rounded-full">
              <Image
                alt="Card background"
                className="z-0 w-[250px] h-[250px] object-contain relative"
                src={pokemon.img}
                onLoad={handleImageLoad}
              />
            </Skeleton>
          </div>
          <CardFooter className="flex justify-center">
            <h4 className="text-gray-800 dark:text-white text-center uppercase font-bold text-lg border p-2 rounded-full">
              {pokemon.type}
            </h4>
          </CardFooter>
        </Card>
      </div>
      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}></ModalComponent>
    </>
  );
};

export default CardComponent;
