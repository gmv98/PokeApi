import React from 'react';


import  Login  from '../screens/Login'
import  LogoutScreen  from '../screens/LogoutScreen'
import  MyTeamsScreen  from '../screens/MyTeamsScreen'
import  NewTeamScreen  from '../screens/NewTeamScreen'
import  RegionsScreen  from '../screens/RegionsScreen'
import StartupScreen from '../screens/StartupScreen'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';


import { useSelector } from 'react-redux';
import UserHome from '../screens/UserHome';
import SearchPokemon from '../screens/SearchPokemon';
import Pokemon from '../screens/Pokemon';


const PokemonNavigation=(props)=>{
    const isAuth = useSelector(state => !!state.auth.token);

    const Stack = createStackNavigator();
    
    return(
        <NavigationContainer
        >
            <Stack.Navigator
                initialRouteName="Startup"
                screenOptions={{ gestureEnabled: false }}
            >
                {isAuth?(
                    <>
                        <Stack.Screen
                        name="UserHome" component={UserHome} options={{headerShown: false}}/>
                        <Stack.Screen name="Regions"component={RegionsScreen}/>
                        <Stack.Screen name="Logout" component={LogoutScreen}/>
                        <Stack.Screen name="MyTeams" component={MyTeamsScreen} />
                        <Stack.Screen name="NewTeam" component={NewTeamScreen} options={{ headerTitle: 'New Team', headerTitleStyle: {  textAlign:"center", },}}/>
                        <Stack.Screen name="Search" component={SearchPokemon} options={{ headerTitle: 'Search Pokemon', headerTitleStyle: {  textAlign:"center",  },}}/>
                        <Stack.Screen name="Pokemon" component={Pokemon} options={{ headerTitle: 'Pokemon',headerTitleStyle: { textAlign:"center", },}}/>
                        </>
                ):(
                    <>
                        <Stack.Screen
                            name="Startup"
                            component={StartupScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Auth"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
                
                
                
                
                
            </Stack.Navigator>
        </NavigationContainer>

    );

}




export default (PokemonNavigation);


