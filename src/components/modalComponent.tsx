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
  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      onOpenChange={setIsOpen}
    >
      <ModalContent>
        <ModalHeader className="gap-1 text-2xl text-center font-bold flex justify-center mt-2">
          <p className="text-amber-400">{`${pokemonData?.id} - ${pokemonData?.name}`}</p>{" "}
        </ModalHeader>
        <ModalBody>
          <div className="relative w-full h-full flex justify-center items-center group mt-4">
            <div
              className={`animate-pulse absolute w-[250px] h-[250px] rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
            ></div>
            <Skeleton isLoaded={isLoading} className="rounded-full">
              <Image
                alt="Card background"
                className="z-0 w-[250px] h-[250px] object-contain relative"
                src={pokemonData?.sprites.front_default}
                onLoad={handleImageLoad}
              />
            </Skeleton>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center text-lg font-medium space-x-4 mr-5">
                <div className="text-amber-400">Abilities: </div>
                {pokemonData?.abilities.map((ability, index) => (
                  <div key={index}>{`${ability.ability.name}`}</div>
                ))}
              </div>
              <div className="flex gap-4 items-center justify-center mt-2 font-medium">
                <div className="text-amber-400">Height:</div>
                <div>{`${pokemonData?.height}`}</div>
                <div className="text-amber-400">Weight: </div>
                <div>{`${pokemonData?.weight}`}</div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full"
            color="warning"
            variant="bordered"
            onClick={() => setIsOpen(!isOpen)}
          >
            View Details
            <ArrowRight />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
