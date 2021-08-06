import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header, IconCus, TextCus } from '../../components'
import { DefaultStyles } from '../../utils'

const Home = ({navigation}) => {
    return (
        <View style={DefaultStyles.PageContainer}>
            <Header name='Pokemon App' navigation={navigation}/>
            <View style={DefaultStyles.BodyContainer}>
                <TouchableOpacity style={DefaultStyles.ListItem} onPress={() => navigation.navigate('Pokemons')}>
                    <TextCus value='List Pokemon' />
                    <IconCus name='chevron-forward' type='ionicon'/>
                </TouchableOpacity>
                <TouchableOpacity style={DefaultStyles.ListItem} onPress={() => navigation.navigate('Items')}>
                    <TextCus value='List Item' />
                    <IconCus name='chevron-forward' type='ionicon'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})
