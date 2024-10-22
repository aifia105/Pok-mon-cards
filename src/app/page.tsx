import CardComponent from "@/components/cardComponent";
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
