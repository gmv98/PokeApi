import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors'

import team from '../models/team'
import { Button, Icon } from 'react-native-elements';

import { useSelector } from 'react-redux';
import MyTeam from '../Components/MyTeam';

const MyTeamsScreen = props => {
    const [lista, setlista] = useState()
    const isAuth = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.userId)
    useEffect(() => {
        getTeams();
    }, [])

    const recargar=()=>{
 
        setTimeout(()=>{
          getTeams();
     
        }, 15000)};
     
    const deleteTeam = async (key) => {
        try {
            const regions = await fetch(`https://pokeapi-43382.firebaseio.com/${user}/teams/${key}.json?auth=${isAuth}`,
                {
                    method: 'DELETE'
                });
            getTeams()
        } catch (e) {
            console.log(e)
        }
    }
    const getTeams = async () => {
        try {
            const teams = await fetch(`https://pokeapi-43382.firebaseio.com/${user}/teams.json?auth=${isAuth}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resData = await teams.json();
            const comprobar=[]
            for (const key in resData) {
                comprobar.push(
                    new team(
                        key,
                        resData[key].pokemon1,
                        resData[key].pokemon2,
                        resData[key].pokemon3,
                        resData[key].pokemon4,
                        resData[key].pokemon5,
                        resData[key].pokemon6,
                        resData[key].team,
                        resData[key].region
                    )
                )
            }
            setlista(comprobar)
            recargar();
        } catch (e) {
            console.log(e)
        }
    }

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{alignSelf:'center', fontSize:17, marginTop:10}}>MY TEAMS</Text>
            <FlatList
                style={{ flex: 1, marginVertical: 10, backgroundColor: 'white', marginHorizontal: 10, }}
                data={lista}
                keyExtractor={item => item.id}
                renderItem={(item, i) => (
                    <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                        <Text style={{alignSelf:'center', ... styles.data}}>{item.item.team}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
                            {
                                item.item.pokemon1 &&
                                <MyTeam imagen={item.item.pokemon1.image} name={item.item.pokemon1.name} id={item.item.pokemon1.id} type={item.item.pokemon1.type} height={item.item.pokemon1.height} weight={item.item.pokemon1.weight} />
                            }
                            {
                                item.item.pokemon2 && 
                                <MyTeam imagen={item.item.pokemon2.image} name={item.item.pokemon2.name} id={item.item.pokemon2.id} type={item.item.pokemon2.type} height={item.item.pokemon2.height} weight={item.item.pokemon2.weight} />
                            }
                            {
                                item.item.pokemon3 &&
                                <MyTeam imagen={item.item.pokemon3.image} name={item.item.pokemon3.name} id={item.item.pokemon3.id} type={item.item.pokemon3.type} height={item.item.pokemon3.height} weight={item.item.pokemon3.weight} />
                            }
                            {
                                item.item.pokemon4 &&
                                <MyTeam imagen={item.item.pokemon4.image} name={item.item.pokemon4.name} id={item.item.pokemon4.id} type={item.item.pokemon4.type} height={item.item.pokemon4.height} weight={item.item.pokemon4.weight} />
                            }
                            {
                                item.item.pokemon5 &&
                                <MyTeam imagen={item.item.pokemon5.image} name={item.item.pokemon5.name} id={item.item.pokemon5.id} type={item.item.pokemon5.type} height={item.item.pokemon5.height} weight={item.item.pokemon5.weight} />
                            }
                            {
                                item.item.pokemon6 &&
                                <MyTeam imagen={item.item.pokemon6.image} name={item.item.pokemon6.name} id={item.item.pokemon6.id} type={item.item.pokemon6.type} height={item.item.pokemon6.height} weight={item.item.pokemon6.weight} />
                            }
                        </View>
                        <Button icon={<Icon name='update' color='#ffffff' />}
                                buttonStyle={styles.buttons} title='  Update Team' onPress={()=>{
                                    if(item.item.pokemon4===undefined){
                                        props.navigation.navigate('NewTeam', {flag:false,key:item.item.id,update:true,team: item.item.team,url:item.item.region, contador:4, pokemon1:item.item.pokemon1, pokemon2:item.item.pokemon2, pokemon3:item.item.pokemon3})
                                    }
                                    else if(item.item.pokemon5===undefined){
                                        props.navigation.navigate('NewTeam', {flag:false,key:item.item.id,update:true,team: item.item.team,url:item.item.region, contador:5, pokemon1:item.item.pokemon1, pokemon2:item.item.pokemon2, pokemon3:item.item.pokemon3, pokemon4:item.item.pokemon4})
                                    }
                                    else if(item.item.pokemon6===undefined){
                                        props.navigation.navigate('NewTeam', {flag:false,key:item.item.id,update:true,team: item.item.team,url:item.item.region, contador:6, pokemon1:item.item.pokemon1, pokemon2:item.item.pokemon2, pokemon3:item.item.pokemon3, pokemon4:item.item.pokemon4, pokemon5:item.item.pokemon5})
                                    }else if(item.item.pokemon6){
                                        props.navigation.navigate('NewTeam', {flag:false,key:item.item.id,update:true,team: item.item.team,url:item.item.region, contador:7, pokemon1:item.item.pokemon1, pokemon2:item.item.pokemon2, pokemon3:item.item.pokemon3, pokemon4:item.item.pokemon4, pokemon5:item.item.pokemon5, pokemon6:item.item.pokemon6})
                                    }
                                }}/>
                        <Button icon={<Icon name='delete' color='#ffffff' />}
                                buttonStyle={styles.buttons} title='  Delete Team' onPress={()=>{
                                    console.log(item.item.id)
                                    deleteTeam(item.item.id)
                                }}/>
                    </View>

                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 20,
    },
    container: {
        marginTop: 8,
        marginHorizontal: 15,
        backgroundColor: 'white'
    }
    , direction: {
        flexDirection: 'row',

    },
    pokemon_images: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 5,
        resizeMode: 'contain'
    },
    data: {
        fontSize: 16,
        textTransform: 'capitalize',
        marginTop: '3%',
        color: 'white',
        fontWeight: 'bold'
    },
    buttons: {
        backgroundColor: Colors.primaryColor,
        color: Colors.accentColor,
        marginTop: 10,
        borderRadius: 1,
    },
    buttons_edit: {
        backgroundColor: Colors.primaryColor,
        color: Colors.accentColor,
        marginTop: 10,
        borderRadius: 10,
    }
})

export default MyTeamsScreen;