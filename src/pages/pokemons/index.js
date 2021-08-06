import React, {useEffect, useState, useRef} from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ListPokemons } from '../../components'
import { DefaultStyles } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { GET } from '../../actions'
import { GET_POKEMONS } from '../../constants'
import { JsonPokemons } from '../../assets'
import { Colors } from '../../utils'

const Pokemons = ({navigation}) => {

    const selector = useSelector(state => state.GetPokemons)
    const dispatch = useDispatch()
    const [pokemons, setPokemons] = useState([])

    // const [transactions, setTransactions] = useState([])

    useEffect(async() => {
        GET('https://pokeapi.co/api/v2/pokemon/',
            dispatch, 
            GET_POKEMONS
        )
    }, [])

    useEffect(() => {
      console.log('pokemons', selector)
      if(selector.length != 0 && selector.results != undefined){
        setPokemons(selector.results)
      }
    }, [selector])

    const onSelect = (item) => {
        console.log("pokemons_2",item)
        navigation.navigate('PokemonDetail',{item:item})
    }

    return (
        <View style={DefaultStyles.PageContainer}>
            <Header name='List Pokemon' navigation={navigation}/>
            <View style={DefaultStyles.BodyContainer}>
                <ListPokemons data={pokemons} onPress={onSelect}/>
            </View>
        </View>
    )
}

export default Pokemons

const styles = StyleSheet.create({
})
