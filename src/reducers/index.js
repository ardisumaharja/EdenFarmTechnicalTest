import { combineReducers, createStore } from 'redux'
import { Loading } from './process'
import { GetPokemons, GetDetailPokemon, GetItems, GetDetailItem } from './pokemons'

const rootReducer = combineReducers({
    Loading, GetPokemons, GetDetailPokemon, GetItems, GetDetailItem
})

const store = createStore(rootReducer)

export default store 