import React from 'react'
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, FlatList, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native'

import Colors from '../constants/Colors';

const NewPokemon = ({imagen, name, id, type, height, weight}) => {
    return (
        <View style={styles.direction}>
            <View style={{ width: '50%', height: '100%' }}>
                <Image source={{ uri: imagen, }} style={styles.pokemon_images} />
            </View>

            <View style={{ paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#FF58712', width: '50%', paddingLeft: '10%', height: '100%', borderRadius: 20 }}>
                <Text style={styles.data}>{name}</Text>
                <Text style={styles.data}>Number: {id}</Text>
                <Text style={styles.data}>Type: {type}</Text>
                <Text style={styles.data}>Height: {height}</Text>
                <Text style={styles.data}>Weight: {weight}</Text>
            </View>
        </View>
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
        marginTop:10,
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
    buttons_edit: {
        backgroundColor: Colors.primaryColor,
        color: Colors.accentColor,
        marginTop: 10,
        borderRadius: 10,
    }
})

export default NewPokemon;