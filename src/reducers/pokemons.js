import { GET_DETAIL_ITEM, GET_DETIL_POKEMON, GET_ITEMS, GET_POKEMONS } from '../constants' 

export const GetPokemons = (state = [], action) => {
    if(action.type === GET_POKEMONS) { 
        return action.value
    }
    return state
}

export const GetDetailPokemon = (state = [], action) => {
    if(action.type === GET_DETIL_POKEMON) { 
        return action.value
    }
    return state
}

export const GetItems = (state = [], action) => {
    if(action.type === GET_ITEMS) { 
        return action.value
    }
    return state
}

export const GetDetailItem = (state = [], action) => {
    if(action.type === GET_DETAIL_ITEM) { 
        return action.value
    }
    return state
}
