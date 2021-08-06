import React, { useEffect }from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { IlPokemonSplashscreen } from '../../assets'
import { DefaultStyles } from '../../utils'

const Splashscreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Home')
        },3000)
    }, [])

    return (
        <View style={[DefaultStyles.PageContainer,{justifyContent:'center',alignItems:'center'}]}>
            <Image style={styles.ImageContainer} source={IlPokemonSplashscreen}/>
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({})
