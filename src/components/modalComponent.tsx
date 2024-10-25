"use client";
import { Pokemon } from "@/types/types";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

const ModalComponent = ({
  isOpen,
  setIsOpen,
  pokemonData,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pokemonData: Pokemon | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  const handleViewDetails = () => {
    setIsOpen(false);
    if (pokemonData) {
      route.push(`/pokemon/${pokemonData.id}`);
    }
  };

  const formatAbilityName = (name: string) => {
    return name.replace("-", " ");
  };

  console.log(pokemonData);

  return (
    <Modal
      isOpen={isOpen}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      onOpenChange={setIsOpen}
    >
      <ModalContent>
        <ModalHeader className="gap-1 text-2xl text-center font-bold flex justify-center mt-2 space-x-1">
          <p className="text-gray-600 dark:text-white/60">{`${pokemonData?.id}.`}</p>
          <p className="text-amber-500 dark:text-white capitalize">
            {pokemonData?.name}
          </p>
        </ModalHeader>
        <ModalBody>
          <div className="relative w-full h-full flex justify-center items-center group mt-4">
            <div
              className={`absolute w-[250px] h-[250px] rounded-full bg-transparent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
            ></div>
            <Skeleton isLoaded={isLoading} className="rounded-full">
              <Image
                alt="Card background"
                className="z-0 w-[180px] h-[180px] object-contain relative"
                src={
                  pokemonData?.pokemon_v2_pokemonsprites[0].sprites.other[
                    "official-artwork"
                  ].front_default
                }
                onLoad={handleImageLoad}
              />
            </Skeleton>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 items-center justify-center text-lg mt-2 ">
              <div className="text-amber-500 font-medium">Height:</div>
              <div>{`${pokemonData?.height}`}</div>
              <div className="text-amber-500 font-medium">Weight: </div>
              <div>{`${pokemonData?.weight}`}</div>
            </div>
            <div className="flex items-center justify-center text-lg space-x-4 ">
              <div className="text-amber-500 font-medium">Abilities: </div>
              {pokemonData?.pokemon_v2_pokemonabilities.map(
                (ability, index) => (
                  <div key={index} className="capitalize">
                    {formatAbilityName(ability.pokemon_v2_ability.name)}
                  </div>
                )
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full flex items-center justify-center"
            color="warning"
            variant="bordered"
            onClick={handleViewDetails}
          >
            <p className="text-md font-medium mb-1">View Details</p>
            <ArrowRight />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
