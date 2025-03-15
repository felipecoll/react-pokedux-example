import React from 'react'
import Pokecard from './Pokecard'

const PokemonList = ({ pokemons }) => {
    return (
      <div className='PokemonList'>
        {pokemons.map((pokemon) => {
          return <Pokecard />;
        })}
      </div>
    );
  };
  
  PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
  };
  
  export default PokemonList