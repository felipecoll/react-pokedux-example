import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import App from './App.jsx'


//Agregado de lineas, extensiones para ver redux en google chrome y detectar efectos y accionesd de redux

const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
