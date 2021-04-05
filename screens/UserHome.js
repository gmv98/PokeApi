import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RegionsScreen from './RegionsScreen';
import MyTeamsScreen from './MyTeamsScreen';
import LogoutScreen from './LogoutScreen';


const UserHome = (props) => {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <View flex={1}>
            
            <View flex={1}>
                <Tab.Navigator
                    activeColor={Colors.accentColor}
                    inactiveColor={Colors.accentColor}
                    barStyle={{ backgroundColor: Colors.primaryColor }}
                >
                    <Tab.Screen
                        lazy={true}
                        name="Teams"
                        component={MyTeamsScreen}
                        options={{
                            tabBarIcon:({focused,color})=>(focused?<Icon name={"home"} color={color} size={25}/>:<Icon name={"home-outline"} color={color} size={25}/> )
                        }}
                    />
                    <Tab.Screen
                        lazy={true}
                        name="New-Team"
                        component={RegionsScreen}
                        options={{
                            tabBarIcon:({focused,color})=>(focused?<Icon name={"plus-circle"} color={color} size={25}/>:<Icon name={"plus-circle-outline"} color={color} size={25}/> )
                        }}
                    />
                    <Tab.Screen
                        lazy={true}
                        name="Log out"
                        component={LogoutScreen}
                        options={{
                            tabBarIcon:({focused,color})=>(focused?<Icon name={"account-circle"} color={color} size={25}/>:<Icon name={"account-circle-outline"} color={color} size={25}/>  )
                        }}
                    />
                    
                </Tab.Navigator>
            </View>
        </View>
    );
};

export default UserHome;