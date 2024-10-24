import { PokemonAbility, PokemonDetails } from "@/types/types";
import React from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const PokemonDetailsComponent = ({ pokemon }: { pokemon: PokemonDetails }) => {
  return (
    <div className="w-full h-[225px] bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B] p-6">
      <div className="grid grid-cols-2 grid-rows-3 gap-4 text-lg mt-6">
        {/* Row 1 */}
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Height:</div>
          <div>{`${pokemon?.height} Cm`}</div>
        </div>
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Weight:</div>
          <div>{`${pokemon?.weight / 10} Kg`}</div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Capture Rate:</div>
          <div>{`${pokemon?.pokemon_v2_pokemonspecy.capture_rate}%`}</div>
        </div>
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Habitat:</div>
          <div className="capitalize">
            {pokemon?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonhabitat.name}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Gender:</div>
          <div className="flex items-center gap-1">
            {pokemon?.pokemon_v2_pokemonspecy.gender_rate === -1 ? (
              "Genderless"
            ) : (
              <>
                <div className="flex items-center">
                  {100 -
                    (pokemon?.pokemon_v2_pokemonspecy.gender_rate / 8) * 100}
                  %
                  <IoMdMale className="text-blue-500 text-xl" />
                </div>
                <div className="flex items-center">
                  {(pokemon?.pokemon_v2_pokemonspecy.gender_rate / 8) * 100}
                  %
                  <IoMdFemale className="text-pink-500 text-xl" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 space-x-2">
          <div className="text-amber-500 font-medium">Abilities:</div>
          <div className="flex gap-2">
            {pokemon?.pokemon_v2_pokemonabilities.map(
              (ability: PokemonAbility, index: number) => (
                <div key={index} className="capitalize">
                  {ability.pokemon_v2_ability.name}
                  {index < pokemon.pokemon_v2_pokemonabilities.length - 1 &&
                    ","}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsComponent;
