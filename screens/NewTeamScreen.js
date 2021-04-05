import React, { useState } from 'react'

import { View, Text, StyleSheet,SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native'

import Colors from '../constants/Colors';
import { Button, Icon } from 'react-native-elements';

import { useSelector } from 'react-redux';
import NewPokemon from '../Components/NewPokemon';


const NewTeamScreen = props => {
    
    const [value, onChangeValue] = useState(props.route.params.team);
    const isAuth = useSelector(state => state.auth.token);
    const user = useSelector(state=>state.auth.userId)
    let pokemon1 = undefined
    let pokemon2 = undefined
    let pokemon3 = undefined
    let pokemon4 = undefined
    let pokemon5 = undefined
    let pokemon6 = undefined
    let regions=props.route.params.url;
    if(props.route.params.flag===true){
        
    }if(props.route.params.flag===false || props.route.params.flag===undefined){
        pokemon1 = props.route.params.pokemon1;
        pokemon2 = props.route.params.pokemon2;
        pokemon3 = props.route.params.pokemon3;
        pokemon4 = props.route.params.pokemon4;
        pokemon5 = props.route.params.pokemon5;
        pokemon6 = props.route.params.pokemon6;
    }
    const updateTeam = async (id) => {
        try {
            const pokemons = await fetch(`https://pokeapi-43382.firebaseio.com/${user}/teams/${id}.json?auth=${isAuth}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                pokemon1,
                pokemon2,
                pokemon3,
                pokemon4,
                pokemon5,
                pokemon6,
                team:value,
                region: regions
              })
            });
            const resData = await pokemons.json();
            props.navigation.replace('UserHome')
        } catch (e) {
            console.log(e)
        }
    }

    const sendData = async () => {
        try {
            const pokemons = await fetch(`https://pokeapi-43382.firebaseio.com/${user}/teams.json?auth=${isAuth}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                pokemon1,
                pokemon2,
                pokemon3,
                pokemon4,
                pokemon5,
                pokemon6,
                team:value,
                region: regions
              })
            });
            const resData = await pokemons.json();
            props.navigation.replace('UserHome')
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeValue(text)}
                        value={value}
                        placeholder='Team name'
                    />
                    <Text style={{ textTransform: 'uppercase', alignSelf: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>{value}</Text>
                    <View>
                        {
                            pokemon1 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon1.image} name={pokemon1.name} id={pokemon1.id} type={pokemon1.type} height={pokemon1.height}  weight={pokemon1.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 1, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }
                        {
                            pokemon2 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon2.image} name={pokemon2.name} id={pokemon2.id} type={pokemon2.type} height={pokemon2.height}  weight={pokemon2.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 2, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }
                        {
                            pokemon3 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon3.image} name={pokemon3.name} id={pokemon3.id} type={pokemon3.type} height={pokemon3.height}  weight={pokemon3.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 3, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }
                        {
                            pokemon4 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon4.image} name={pokemon4.name} id={pokemon4.id} type={pokemon4.type} height={pokemon4.height}  weight={pokemon4.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 4, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }
                        {
                            pokemon5 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon5.image} name={pokemon5.name} id={pokemon5.id} type={pokemon5.type} height={pokemon5.height}  weight={pokemon5.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 5, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }
                        {
                            pokemon6 &&
                            <View style={{ flex: 1, borderRadius: 10, backgroundColor: '#728fbc', marginBottom: 10 }}>
                                <NewPokemon imagen={pokemon6.image} name={pokemon6.name} id={pokemon6.id} type={pokemon6.type} height={pokemon6.height}  weight={pokemon6.weight}/>
                                <Button icon={<Icon name='edit' color='black' />}
                                    buttonStyle={styles.buttons_edit} title='  Edit' onPress={() => {
                                        props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador: 6, pokemon1: pokemon1, pokemon2: pokemon2, pokemon3: pokemon3, pokemon4: pokemon4, pokemon5: pokemon5, pokemon6: pokemon6, });
                                    }} />
                            </View>
                        }

                        {
                            props.route.params.pokemon6===undefined &&
                            <View>
                                <Button icon={<Icon name='add' color='#ffffff' />}
                                    buttonStyle={styles.buttons} title='  Add new pokemon' onPress={() => {  
                                        if(pokemon1===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:1, pokemon1:pokemon1, })
                                        }
                                        else if(pokemon2===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:2, pokemon1:pokemon1, pokemon2:pokemon2, })
                                        }
                                        else if(pokemon3===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:3, pokemon1:pokemon1, pokemon2:pokemon2, pokemon3:pokemon3})
                                        }else if(pokemon4===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:4, pokemon1:pokemon1, pokemon2:pokemon2, pokemon3:pokemon3, pokemon4:pokemon4, })
                                        }else if(pokemon5===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:5, pokemon1:pokemon1, pokemon2:pokemon2, pokemon3:pokemon3, pokemon4:pokemon4, pokemon5:pokemon5 })
                                        }else if(pokemon6===undefined){
                                            props.navigation.navigate('Search', {key:props.route.params.key,update:props.route.params.update,team: value, url: props.route.params.url, contador:6, pokemon1:pokemon1, pokemon2:pokemon2, pokemon3:pokemon3, pokemon4:pokemon4, pokemon5:pokemon5, pokemon6:pokemon6})
                                        }
                                        }} />
                            </View>
                        }
                        {
                            props.route.params.update===false && pokemon3 &&
                            <Button icon={<Icon name='save' color='#ffffff' />}
                                buttonStyle={styles.buttons} title='  Save Team' onPress={sendData} />
                        }
                        {
                            props.route.params.update===true &&
                            <Button icon={<Icon name='update' color='#ffffff' />}
                                buttonStyle={styles.buttons} title='  Update Team' onPress={()=>{
                                    updateTeam(props.route.params.key)
                                }} />
                        }
                    </View>
                </View>
            </ScrollView>
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
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 3,
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
        borderRadius: 10,
        marginBottom: 10
    },
    buttons_edit:{
        backgroundColor: Colors.primaryColor,
        color: Colors.accentColor,
        marginTop: 10,
        borderRadius: 10,
    }
})
export default NewTeamScreen