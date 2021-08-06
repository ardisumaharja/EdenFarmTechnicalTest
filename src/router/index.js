import React from 'react'
import { Splashscreen, Home, Pokemons, PokemonDetail, Items, ItemDetail} from '../pages'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Router = () => {
    return (
       <Stack.Navigator initialRouteName='Splashscreen' screenOptions={{headerShown:false}} >
           <Stack.Screen name='Splashscreen' component={Splashscreen}/>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='Pokemons' component={Pokemons}/>
           <Stack.Screen name='PokemonDetail' component={PokemonDetail}/>
           <Stack.Screen name='Items' component={Items}/>
           <Stack.Screen name='ItemDetail' component={ItemDetail}/>
       </Stack.Navigator>
    )
}

export default Router

