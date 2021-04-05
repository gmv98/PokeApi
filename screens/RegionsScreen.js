import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, StatusBar, SafeAreaView, Image, FlatList , TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Card from '../Components/Card'
import { useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth'
import { useDispatch } from 'react-redux';
const RegionsScreen = props => {
    
    const isAuth = useSelector(state => !!state.auth.token);
    useEffect(() => {
        if (!isAuth) {
          props.navigation.replace('Auth')
        }
      }, [isAuth]);
    const [regiones, setRegiones] = useState();
    useEffect(() => {
        getRegions();
    }, []);
    const getRegions= async ()=>{
        try{
            const regions=await fetch('https://pokeapi.co/api/v2/pokedex',{
            headers:{
                'Content-Type': 'application/json'
            },
            });
            const resData = await regions.json();
            setRegiones(resData.results)
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View style={styles.container}>
                <Image source={require('../assets/images/artic.png')} style={styles.pokeball}/>
                
                <Text style={styles.title}>Regions</Text>
                <FlatList
                    numColumns={2}
                    style={{flex:1, marginVertical:20}}
                    columnWrapperStyle={styles.column}
                    data={regiones}
                    keyExtractor={item => item.name}
                    renderItem={(item,i)=>(
                        <View style={styles.container}>
                            
                            <Card  style={styles.card}>
                                    
                                
                                    <TouchableOpacity onPress={()=>{
                                        props.navigation.navigate('NewTeam', {flag: true,url:item.item.url, update:false, contador:1, region: item.item.name})
                                    }}>
                                        
                                        <Text style={styles.region_name}>{item.item.name}</Text>
                                        
                                    </TouchableOpacity>
                                
                            </Card>
                        </View>
                    )}
                /> 
            </View> 
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
        backgroundColor:'#f6f6f6'
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
    }
});

export default RegionsScreen;
