import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

const IconCus = ({toucable, name, type, size, color, onPress}) => {

    if(toucable){
        return(
            <TouchableOpacity onPress={onPress}>
                <Icon name={name} type={type} size={size} color={color}/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
             <Icon name={name} type={type} size={size} color={color}/>
        </View>
    )
}

export default IconCus

const styles = StyleSheet.create({})
