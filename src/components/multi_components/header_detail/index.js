import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Colors } from '../../../utils'
import { TextCus, IconCus, Gap } from '../../../components'
import { IlPokemonBall } from '../../../assets'

const HeaderDetail = ({navigation, name, url}) => {
    console.log('pokemon_header', url)
    return (
        <View style={styles.Container}>
            <View style={{position:'absolute',right:20}}>
                <IconCus name = 'close' type = 'antdesign' toucable onPress={() => navigation.goBack()}/>
            </View>
            <Image style={styles.Image} source={url!=''?{uri:url}:IlPokemonBall}/>
            <Gap height={10}/>
            <TextCus value={name!=''?name:'Pokemon'} size={24}/>
        </View>
    )
}

export default HeaderDetail

const styles = StyleSheet.create({
    Container : {
        alignItems : 'center',
        borderBottomWidth : 1,
        borderBottomColor : Colors.border.grey,
        marginHorizontal : -20,
        paddingBottom : 30,
    }, 
    Image:{
        height : 125, 
        width : 125,
        borderRadius : 125 / 2,
        backgroundColor : Colors.mainColor.grey3,
    }
})
