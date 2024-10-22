import CardComponent from "@/components/cardComponent";
import DropDown from "@/components/DropDown";
import PaginationComponent from "@/components/pagination";

const Home = () => {
  const pokemonList = [
    {
      number: 1,
      name: "Pikachu",
      type: "Electric",
      hp: 35,
      attack: 55,
      img: "/test.png",
    },
    {
      number: 2,
      name: "Charizard",
      type: "Fire/Flying",
      hp: 78,
      attack: 84,
      img: "/test.png",
    },
    {
      number: 3,
      name: "Pikachu",
      type: "Electric",
      hp: 35,
      attack: 55,
      img: "/test.png",
    },
    {
      number: 4,
      name: "Charizard",
      type: "Fire/Flying",
      hp: 78,
      attack: 84,
      img: "/test.png",
    },
  ];
  return (
    <section className="xl:h-full pt-10 pb-12 xl:pb-24 xl:pt-16">
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Pokemon Stats Explorer
          </h1>
          <p className="text-center text-gray-600 dark:text-white/60 mt-2">
            Your go-to hub for detailed Pokémon stats, offering a comprehensive
            look at every Pokémon’s strengths and abilities.
          </p>
        </div>
        <div className="flex mb-4 gap-x-2">
          <DropDown name="Filter"></DropDown>
          <DropDown name="Sort"></DropDown>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-">
          {pokemonList.map((pokemon, index) => (
            <CardComponent key={index} pokemon={pokemon} index={index} />
          ))}
        </div>
        <PaginationComponent></PaginationComponent>
      </div>
    </section>
  );
};

export default Home;
