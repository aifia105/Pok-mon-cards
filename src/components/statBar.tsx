import { PokemonStat } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";

const StatBar = ({ stat, index }: { stat: PokemonStat; index: number }) => {
  const getStatColor = (value: number): string => {
    if (value >= 150) return "bg-gradient-to-r from-green-500 to-green-400";
    if (value >= 90) return "bg-gradient-to-r from-emerald-500 to-emerald-400";
    if (value >= 60) return "bg-gradient-to-r from-amber-500 to-amber-400";
    if (value >= 30) return "bg-gradient-to-r from-orange-500 to-orange-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
  };

  const percentage = Math.min((stat.base_stat / 200) * 100, 100);

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-24 text-amber-500 font-medium text-lg capitalize">
        {stat.pokemon_v2_stat.name.replace("special-", "s.")}:
      </div>

      <div className="w-12 text-right text-lg font-medium">
        {stat.base_stat}
      </div>

      <div className="flex-1 bg-gray-100 dark:bg-gray-800 h-5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${getStatColor(stat.base_stat)}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default StatBar;
