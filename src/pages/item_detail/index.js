import React, {useEffect,useState,useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GET } from '../../actions'
import { Gap, HeaderDetail, TextCus } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DETAIL_ITEM } from '../../constants'
import { DefaultStyles, Colors } from '../../utils'


const ItemDetail = ({navigation,route}) => {

    const ref = useRef(false)
    const selector = useSelector(state => state.GetDetailItem)
    const dispatch = useDispatch()
    const [detailItem, setDetailItem] = useState({
        name : '',
        url : '',
        attributes : '',
        category : '',
        effect : '',
    })

    useEffect(() => {
        console.log('pokemon_detail_1', selector)
        GET(route.params.item,dispatch,GET_DETAIL_ITEM)
        console.log('pokemon_detail_4', ref)
    }, [])

    useEffect(() => {
        console.log('pokemon_detail_2', selector)
        console.log('pokemon_detail_3', detailItem)
        if(ref.current){
            if(selector.length != 0){
                let attributes = '';

                if(selector.attributes.length != 0){
                    selector.attributes.map(item => {
                        attributes += item.name+', '
                    })
                }

                setDetailItem(prev=>({
                    ...prev,
                    name : selector.name,
                    url : selector.sprites.default,
                    attributes : attributes,
                    category : selector.category.name,
                    effect : selector.effect_entries[0].effect,

                }))
            }
        }else{
            ref.current = true
        }
    },[selector, ref]);


    return (
        <View style={DefaultStyles.PageContainer}>
            <HeaderDetail navigation={navigation}  name={detailItem.name} url={detailItem.url} />
            <View style={styles.BodyContainer}>
                <TextCus value='About' size={16} weight='bold' />
                <Gap height={15}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextCus value='Attributes' color={Colors.text.grey}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextCus value={detailItem.attributes}/>
                    </View>
                </View>
                <Gap height={10}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextCus value='Catgory' color={Colors.text.grey}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextCus value={detailItem.category}/>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    BodyContainer:{
        paddingVertical : 17,
        paddingHorizontal : 15,
        flex:1,
    }
})
