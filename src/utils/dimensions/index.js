import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const DefaultStyles = StyleSheet.create({
    PageContainer : {
        paddingHorizontal:20,
        paddingVertical:20,
        flex:1,
        backgroundColor:'white'
    },

    BodyContainer : {
        paddingHorizontal : 10,
        marginTop : 10,
        flex:1,
    },

    ListItem : {
        paddingHorizontal : 20,
        paddingVertical : 20,
        borderColor : Colors.border.grey,
        elevation : 3,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 15,
    }
})
