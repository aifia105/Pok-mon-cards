import { PokemonAbility, PokemonDetails } from "@/types/types";
import React from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const PokemonDetailsComponent = ({ pokemon }: { pokemon: PokemonDetails }) => {
  const formatAbilityName = (name: string) => {
    return name.replace("-", " ");
  };

  console.log(pokemon);
  return (
    <div className="w-full h-[450px] bg-[#E5E7EB] shadow-md rounded-lg dark:bg-[#18181B] p-6">
      <div className="grid grid-cols-2 grid-rows-3 gap-8 text-lg mt-3">
        {/* Row 1 */}
        <div className="flex items-center gap-4">
          <div className="text-amber-500 font-medium">Height:</div>
          <div>{`${pokemon?.height} Cm`}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-amber-500 font-medium">Weight:</div>
          <div>{`${pokemon?.weight / 10} Kg`}</div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-4">
          <div className="text-amber-500 font-medium">Capture Rate:</div>
          <div>{`${pokemon?.pokemon_v2_pokemonspecy?.capture_rate}%`}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-amber-500 font-medium">Habitat:</div>
          <div className="capitalize">
            {pokemon?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonhabitat?.name
              ? pokemon?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonhabitat?.name
              : "Unknown"}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center gap-4">
          <div className="text-amber-500 font-medium">Gender:</div>
          <div className="flex items-center gap-1">
            {pokemon?.pokemon_v2_pokemonspecy?.gender_rate === -1 ? (
              "Genderless"
            ) : (
              <>
                <div className="flex items-center">
                  {100 -
                    (pokemon?.pokemon_v2_pokemonspecy?.gender_rate / 8) * 100}
                  %
                  <IoMdMale className="text-blue-500 text-xl" />
                </div>
                <div className="flex items-center">
                  {(pokemon?.pokemon_v2_pokemonspecy?.gender_rate / 8) * 100}
                  %
                  <IoMdFemale className="text-pink-500 text-xl" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="text-amber-500 font-medium whitespace-nowrap">
            Abilities:
          </div>
          <div className="flex flex-wrap gap-2 ">
            {pokemon?.pokemon_v2_pokemonabilities?.map(
              (ability: PokemonAbility, index: number) => (
                <React.Fragment key={index}>
                  <span className="capitalize">
                    {formatAbilityName(ability.pokemon_v2_ability.name)}
                  </span>
                  {index < pokemon.pokemon_v2_pokemonabilities.length - 1 && (
                    <span>,</span>
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsComponent;
