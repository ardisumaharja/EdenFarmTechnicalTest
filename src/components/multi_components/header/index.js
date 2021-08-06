import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../utils'
import { TextCus, IconCus } from '../../../components'

const Header = ({name, navigation}) => {
    return (
        <View style={styles.Container}>
            <TextCus value={name} size={24} />
            {
                name != 'Pokemon App' ? 
                <IconCus name = 'close' type = 'antdesign' toucable onPress={() => navigation.goBack()}/>
                :
                null
            }
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Container : {
        // backgroundColor : 'red',
        height : 80,
        marginHorizontal : -20,
        marginTop : -20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : 20, 
        borderBottomWidth : 1, 
        borderBottomColor : Colors.border.grey,
    }
})
