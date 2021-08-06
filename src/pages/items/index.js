import React, {useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { JsonPokemons } from '../../assets'
import { Header, ListPokemons } from '../../components'
import { DefaultStyles } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ITEMS } from '../../constants'
import { GET } from '../../actions'

const Items = ({navigation}) => {

    const selector = useSelector(state => state.GetItems)
    const dispatch = useDispatch()
    const [items, setItems] = useState([])

    useEffect(async() => {
        GET('https://pokeapi.co/api/v2/item/',
            dispatch, 
            GET_ITEMS
        )
    }, [])

    useEffect(() => {
        if(selector.length != 0 && selector.results != undefined){
            setItems(selector.results)
        }
        console.log('items', selector)
      }, [selector])

    const onSelect = (item) => {
        console.log("items_2",item)
        navigation.navigate('ItemDetail',{item:item})
    }

    return (
        <View style={DefaultStyles.PageContainer}>
            <Header name='List Item' navigation={navigation}/>
            <View style={DefaultStyles.BodyContainer}>
                <ListPokemons data={items} onPress={onSelect}/>
            </View>
        </View>
    )
}

export default Items

const styles = StyleSheet.create({})
