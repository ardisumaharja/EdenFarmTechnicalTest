import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Colors, DefaultStyles} from '../../../utils'
import { TextCus, IconCus } from '../..'
import { Gap } from '../../single_components'

const ListPokemons = ({data, onPress}) => {
    
    console.log('list_pokemons', data)

    const Item = ({data, onPress}) => {
        console.log('list_pokemons_item', data)
        return(
            <TouchableOpacity style={DefaultStyles.ListItem} onPress={()=>onPress(data.item.url)}>
                <TextCus value={data.item.name} />
                <IconCus name='chevron-forward' type='ionicon'/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data = {data}
                renderItem = {item => <Item data={item} onPress={onPress}/>}
                keyExtractor = {item => item.index}
                key = {item => item.index}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    )
}

export default ListPokemons

const styles = StyleSheet.create({
    ItemContainer:{
        backgroundColor:'white',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
        paddingRight:20,
    },
})
