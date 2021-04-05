import React, { useEffect, useState } from 'react'
import { SafeAreaView} from 'react-native'


import { Card, Button, Icon } from 'react-native-elements'
import Colors from '../constants/Colors'
import pokemon from '../models/pokemon'


const Pokemon = props => {
    const [name, setName] = useState('');
    const [imagePokemon, setImagePokemon] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();

    const [id, setId] = useState();

    const [type, setType] = useState();
    const [listaIntegrantes, setListaIntegrantes] = useState();

    useEffect(() => {
        getDataPokemon();
        setListaIntegrantes(props.route.params.integrantes)
    }, []);

    useEffect(() => {
        const newPoke = new pokemon();
        newPoke.id = id;
        newPoke.name = name;
        newPoke.image = imagePokemon;
        newPoke.type = type;
        newPoke.height = height;
        newPoke.weight = weight;

        setListaIntegrantes(newPoke)
    }, [name])

    const getDataPokemon = async () => {
        try {
            const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.route.params.name}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resData = await pokemons.json();

            setImagePokemon(resData.sprites.front_default);
            setWeight(resData.weight)
            setHeight(resData.height)
            setType(resData.types[0].type.name)
            setId(resData.id)
            setName(props.route.params.name);

        } catch (e) {
            setImagePokemon('https://maestroselectronics.com/wp-content/uploads/bfi_thumb/blank-user-355ba8nijgtrgca9vdzuv4.jpg')
            
            setWeight('No data')
            setHeight('No data')
            setType('No data')
            setId('No data')
            setName(props.route.params.name)
            console.log(e)
        }
    }

    return (
        <SafeAreaView>

            <Card>
                <Card.Title style={{
                    textTransform: 'capitalize', fontSize: 20, fontFamily:'ComicNeue-Regular'
                }}>{name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: imagePokemon, }} style={{
                    resizeMode: 'contain',
                }} />
                <Button
                    icon={<Icon name='add' color='#ffffff' />}
                    buttonStyle={{
                        borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: Colors.primaryColor,
                        color: Colors.accentColor, 
                    }}
                    title='  Add Pokemon'
                    onPress={() => {
                        const aux = props.route.params.contador;
                        if (aux === 1) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url  ,team: props.route.params.team, pokemon1: listaIntegrantes,pokemon2: props.route.params.pokemon2, pokemon3: props.route.params.pokemon3, pokemon4: props.route.params.pokemon4, pokemon5: props.route.params.pokemon5, pokemon6:props.route.params.pokemon6, contador: aux + 1, })
                        }
                        if (aux === 2) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url ,team: props.route.params.team, pokemon1: props.route.params.pokemon1, pokemon2: listaIntegrantes,pokemon3: props.route.params.pokemon3, pokemon4: props.route.params.pokemon4, pokemon5: props.route.params.pokemon5, pokemon6:props.route.params.pokemon6, contador: aux + 1, })
                        }
                        if (aux === 3) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url ,team: props.route.params.team, pokemon1: props.route.params.pokemon1, pokemon2: props.route.params.pokemon2, pokemon3: listaIntegrantes,pokemon4: props.route.params.pokemon4, pokemon5: props.route.params.pokemon5, pokemon6:props.route.params.pokemon6, contador: aux + 1, })
                        }
                        if (aux === 4) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url ,team: props.route.params.team, pokemon1: props.route.params.pokemon1, pokemon2: props.route.params.pokemon2, pokemon3: props.route.params.pokemon3, pokemon4: listaIntegrantes, pokemon5: props.route.params.pokemon5, pokemon6:props.route.params.pokemon6, contador: aux + 1, })
                        }
                        if (aux === 5) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url ,team: props.route.params.team, pokemon1: props.route.params.pokemon1, pokemon2: props.route.params.pokemon2, pokemon3: props.route.params.pokemon3, pokemon4: props.route.params.pokemon4, pokemon5: listaIntegrantes,pokemon6:props.route.params.pokemon6, contador: aux + 1, })
                        }
                        if (aux === 6) {
                            props.navigation.replace('NewTeam', {key:props.route.params.key,update:props.route.params.update,url:props.route.params.url ,team: props.route.params.team, pokemon1: props.route.params.pokemon1, pokemon2: props.route.params.pokemon2, pokemon3: props.route.params.pokemon3, pokemon4: props.route.params.pokemon4, pokemon5: props.route.params.pokemon5, pokemon6: listaIntegrantes, contador: aux + 1, })
                        }
                    }} />
            </Card>

        </SafeAreaView>
    )
}

export default Pokemon;