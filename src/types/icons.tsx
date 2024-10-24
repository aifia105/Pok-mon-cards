import {
  AlignLeft,
  Badge,
  BicepsFlexed,
  Biohazard,
  BrainCircuit,
  Bug,
  Earth,
  Eclipse,
  Flame,
  Ghost,
  Heart,
  Leaf,
  ListOrdered,
  Mountain,
  Origami,
  Rabbit,
  Rocket,
  Shield,
  ShieldCheck,
  ShieldPlus,
  Skull,
  Snowflake,
  WandSparkles,
  Waves,
  Zap,
} from "lucide-react";

export const pokemonIcons: {
  [key: string]: (color: string, size: string) => JSX.Element;
} = {
  Normal: (color, size) => <Badge className={`text-${color}`} size={size} />,
  Fire: (color, size) => <Flame className={`text-${color}`} size={size} />,
  Water: (color, size) => <Waves className={`text-${color}`} size={size} />,
  Grass: (color, size) => <Leaf className={`text-${color}`} size={size} />,
  Electric: (color, size) => <Zap className={`text-${color}`} size={size} />,
  Ice: (color, size) => <Snowflake className={`text-${color}`} size={size} />,
  Fighting: (color, size) => (
    <BicepsFlexed className={`text-${color}`} size={size} />
  ),
  Poison: (color, size) => (
    <Biohazard className={`text-${color}`} size={size} />
  ),
  Ground: (color, size) => <Earth className={`text-${color}`} size={size} />,
  Flying: (color, size) => <Rocket className={`text-${color}`} size={size} />,
  Psychic: (color, size) => (
    <BrainCircuit className={`text-${color}`} size={size} />
  ),
  Bug: (color, size) => <Bug className={`text-${color}`} size={size} />,
  Rock: (color, size) => <Mountain className={`text-${color}`} size={size} />,
  Ghost: (color, size) => <Ghost className={`text-${color}`} size={size} />,
  Dragon: (color, size) => <Origami className={`text-${color}`} size={size} />,
  Dark: (color, size) => <Eclipse className={`text-${color}`} size={size} />,
  Steel: (color, size) => (
    <ShieldPlus className={`text-${color}`} size={size} />
  ),
  Fairy: (color, size) => (
    <WandSparkles className={`text-${color}`} size={size} />
  ),
  all: (color, size) => <AlignLeft className={`text-${color}`} size={size} />,
};

export const pokemonStatIcons: {
  [key: string]: (color: string, size: string) => JSX.Element;
} = {
  Hp: (color, size) => <Heart className={`text-${color}`} size={size} />,
  Attack: (color, size) => (
    <BicepsFlexed className={`text-${color}`} size={size} />
  ),
  Defense: (color, size) => <Shield className={`text-${color}`} size={size} />,
  Special_Attack: (color, size) => (
    <Skull className={`text-${color}`} size={size} />
  ),
  Special_Defense: (color, size) => (
    <ShieldCheck className={`text-${color}`} size={size} />
  ),
  Speed: (color, size) => <Rabbit className={`text-${color}`} size={size} />,
  number: (color, size) => (
    <ListOrdered className={`text-${color}`} size={size} />
  ),
};
