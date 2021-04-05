import React, {useState, useEffect} from 'react'

import LinearGradient from 'react-native-linear-gradient'

import Card from '../Components/Card'
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const SearchPokemon = props => {

    const [poke, setPoke] = useState();
    useEffect(() => {
        getPokemons();
    }, []);

    
    const getPokemons= async ()=>{
        try{
            const pokemons=await fetch(props.route.params.url,{
            headers:{
                'Content-Type': 'application/json'
            },
            });
            const resData = await pokemons.json();
            setPoke(resData.pokemon_entries)

        }catch(e){
            console.log(e)
        }
    } 
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Search Pokemon</Text>
            <FlatList
                numColumns={2}
                style={{flex:1, marginVertical:20}}
                columnWrapperStyle={styles.column}
                data={poke}
                keyExtractor={item => item.entry_number}
                renderItem={(item,i)=>(
                    <View style={styles.container}>
                        
                        <Card  style={styles.card}>
                                
                            
                                <TouchableOpacity onPress={()=>{
                                    props.navigation.navigate('Pokemon', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url,team: props.route.params.team,name:item.item.pokemon_species.name, contador:props.route.params.contador, pokemon1: props.route.params.pokemon1, pokemon2:props.route.params.pokemon2,pokemon3:props.route.params.pokemon3, pokemon4:props.route.params.pokemon4, pokemon5:props.route.params.pokemon5, pokemon6:props.route.params.pokemon6})
                                }}>
                                    
                                    <Text style={styles.region_name}>{item.item.pokemon_species.name}</Text>
                                    
                                </TouchableOpacity>
                            
                        </Card>
                    </View>
                )}
            /> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { 
        marginTop:10, 
        marginLeft:10, 
        flex:1, 
        marginRight:10, 
        height:100, 
        marginBottom:8, 
        borderRadius:10,
    } ,
    card:{
        flex:1,   
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor: '#f6f6f6'  
    },
    region_name:{
        color:'#2f5c88',
        textAlign:'center', 
        fontSize:15,  
        textTransform: 'capitalize',
        fontFamily:'ComicNeue-Bold'
    },
    gradient:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    pokeball:{
        width:'20%',
        height:'10%',
        resizeMode: 'stretch',
        alignSelf:'center',
        marginBottom:10,
    },
    title:{
        fontSize:20,
        alignSelf:'center', 
        fontFamily:'ComicNeue-Bold'
    }
});


export default SearchPokemon;