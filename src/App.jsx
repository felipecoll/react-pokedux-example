import { useEffect, useState } from 'react'
import { Col } from 'antd'
import Search from './components/Search'
import './App.css'
import Pokecard from './components/Pokecard'
import logo from './statics/logo.svg'
import PokemonList from './components/PokemonList'
import getPokemon from './api'


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);
  
  return (
    <>
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux'/>
      </Col>
      
      <Col span={8} offset={8}>
        <Search />
      </Col>
        {/* <Pokecard/>  */}
      <PokemonList pokemons={pokemons}/>
    </div>
      
    </>
  )
}

export default App
