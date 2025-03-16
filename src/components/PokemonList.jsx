import Pokecard from "./Pokecard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
    return (
      <div className="PokemonList">
          {pokemons.map((pokemon => {
            return <Pokecard name={pokemon.name} key={pokemon.name}/>
          }))}
      </div>
    );
  };

  PokemonList.defaultProps = {
    pokemons: Array(10).fill({ id: Math.random(), name: "Unknown" }),
  };

export default PokemonList