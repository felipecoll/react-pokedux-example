import Pokecard from "./Pokecard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
    return (
      <div className="PokemonList">
        {pokemons && pokemons.length > 0 ? (
          pokemons.map((pokemon, index) =>
            pokemon ? (
              <Pokecard key={pokemon.id || index} pokemon={pokemon} />
            ) : null
          )
        ) : (
          <p>No hay Pokémon disponibles</p>
        )}
      </div>
    );
  };

  PokemonList.defaultProps = {
    pokemons: Array(10).fill({ id: Math.random(), name: "Unknown" }),
  };

export default PokemonList