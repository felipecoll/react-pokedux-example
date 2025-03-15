import { Col } from 'antd'
import Search from './components/Search'
import './App.css'
import Pokecard from './components/Pokecard'
import PokemonList from './components/PokemonList'


function App() {
  
  return (
    <>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      {/* <Pokecard/> */}
      <PokemonList/>
    </>
  )
}

export default App
