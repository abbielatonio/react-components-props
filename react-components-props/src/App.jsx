import "./App.css";
import Pokemon from "./Pokemon";

function App(){
  return (

      <table className="table">
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
        </tr>
       {pokemons.map((pokemon,index) => (
        <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} image={pokemon.image} />
      ))}
      </table>
  );
};

const pokemons = [
  {
    id: "#001",
    name: "Bulbasaur",
    type: "Grass",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  },
  {
    id: "#004",
    name: "Charmander",
    type: "Fire",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  },
  {
    id: "#007",
    name: "Squirtle",
    type: "Water",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  },
];

export default App;
