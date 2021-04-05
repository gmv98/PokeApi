import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Image, Dimensions } from 'react-native'

import Colors from '../constants/Colors'

import { useDispatch } from 'react-redux';

import * as authActions from '../store/actions/auth'



import { Card, ListItem, Button, Icon } from 'react-native-elements'


import { useSelector } from 'react-redux';

const LogoutScreen = props => {

  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, paddingTop: 20, marginHorizontal:15,backgroundColor:'#f6f6f6'}}>
      <SafeAreaView>
        <Image source={require('../assets/images/artic.png')} style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 3, alignSelf: 'center', resizeMode: 'contain', marginTop: Dimensions.get('window').height / 4 }} />


        <Button
          title="Log out"
          buttonStyle={{ backgroundColor: Colors.primaryColor, marginTop:Dimensions.get('window').height/9, width:Dimensions.get('window').width/1.5, alignSelf:'center', borderRadius:10 }}
          onPress={() => {
            dispatch(authActions.logout());

          }}
        />
      </SafeAreaView>
    </View>
  );
}

export default LogoutScreen;
