import React, {useEffect,useState,useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GET } from '../../actions'
import { Gap, HeaderDetail, TextCus } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DETIL_POKEMON } from '../../constants'
import { DefaultStyles, Colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const PokemonDetail = ({navigation,route}) => {

    console.log('pokemon_detail', route)
    const ref = useRef(false)
    const selector = useSelector(state => state.GetDetailPokemon)
    const dispatch = useDispatch()
    const [detailPokemon, setDetailPokemon] = useState({
        url : '',
        name : '',
        detail : {
            height : '',
            weight : '',
            abilities : '',
            type : '',
        },
        baseState : {
            hp : '',
            attack : '',
            defense : '',
            spAttack : '',
            spDefense : '',
            speed : '',
        },
        
    })

    useEffect(() => {
        console.log('pokemon_detail_1', selector)
        GET(route.params.item,dispatch,GET_DETIL_POKEMON)
        console.log('pokemon_detail_4', ref)
    }, [])

    useEffect(() => {
        console.log('pokemon_detail_2', selector)
        console.log('pokemon_detail_3', detailPokemon)
        if(ref.current){
            if(selector.length != 0){
                let abilities = '';
                let types = '';
                if(selector.abilities.length >= 1){
                    selector.abilities.map(item => {
                        abilities += item.ability.name+', '
                    })
                }   

                if(selector.types.length >= 1){
                    selector.types.map(item => {
                        types += item.type.name+', '
                    })
                }

                console.log("pokemon_detail_5", abilities);

                setDetailPokemon(prev=>({
                    ...prev,
                    url : selector.sprites.front_default,
                    name : selector.name,
                    detail : {
                        height : selector.height,
                        weight : selector.weight,
                        abilities : abilities,
                        type : types,
                    },
                    baseState : {
                        hp : selector.stats[0].base_stat,
                        attack : selector.stats[1].base_stat,
                        defense : selector.stats[2].base_stat,
                        spAttack : selector.stats[3].base_stat,
                        spDefense : selector.stats[4].base_stat,
                        speed : selector.stats[5].base_stat,
                    }
                }))
            }

           
        }else{
            ref.current = true
        }
       
    }, [selector,ref])

    return (
        <View style={DefaultStyles.PageContainer}>
            <HeaderDetail navigation={navigation}  name={detailPokemon.name} url={detailPokemon.url} />
            <View style={styles.BodyContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TextCus value='About' size={16} weight='bold' />
                    <Gap height={15}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Height'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.detail.height} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Weight'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.detail.weight} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Abilities'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.detail.abilities} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Type'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.detail.type} />
                        </View>
                    </View>
                    <Gap height={15}/>
                    <TextCus value='Base Stats' size={16} weight='bold'/>
                    <Gap height={15}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'HP'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.hp} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Attack'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.attack} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Defense'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.defense} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Sp. Attack'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.spAttack} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Sp. Defense'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.spDefense} />
                        </View>
                    </View>
                    <Gap height={10}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextCus value={'Speed'} color={Colors.text.grey}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value={detailPokemon.baseState.speed} />
                        </View>
                    </View>                
                </ScrollView>
            </View>
        </View>
    )
}

export default PokemonDetail

const styles = StyleSheet.create({
    BodyContainer:{
        paddingVertical : 17,
        paddingHorizontal : 15,
        flex:1,
    }
})
