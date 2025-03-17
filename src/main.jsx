import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares/index.js'
import App from './App.jsx'


//Agregado de lineas, extensiones para ver redux en google chrome y detectar efectos y accionesd de redux

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

const store = createStore(pokemonsReducer, composedEnhancers)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
