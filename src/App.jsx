import { useEffect} from 'react'
import { Col, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Search from './components/Search'
import './App.css'
import Pokecard from './components/Pokecard'
import logo from './statics/logo.svg'
import PokemonList from './components/PokemonList'
import {getPokemon, getPokemonDetails} from './api'
import {setLoading, setPokemons} from './actions'



function App() {
 
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(pokemonsRes.map(pokemon =>getPokemonDetails(pokemon)))
      // dispatch(setPokemons(pokemonsRes));
      dispatch(setPokemons(pokemonDetailed))
      dispatch(setLoading(false))
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
      
    </>
  )
}



export default App
