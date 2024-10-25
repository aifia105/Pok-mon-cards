import { PokemonDetails, PokemonStat } from "@/types/types";
import React from "react";
import StatBar from "./statBar";

const StatComponent = ({ pokemon }: { pokemon: PokemonDetails }) => {
  return (
    <div className="w-full bg-transparent  p-6">
      <div className="grid gap-14">
        {pokemon?.pokemon_v2_pokemonstats.map(
          (stat: PokemonStat, index: number) => (
            <StatBar key={index} stat={stat} index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default StatComponent;
