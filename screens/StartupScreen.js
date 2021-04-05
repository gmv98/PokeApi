import React, { useEffect } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage' 
import { useDispatch } from 'react-redux';

import * as authActions from '../store/actions/auth';

import LinearGradient from 'react-native-linear-gradient'

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.replace('Auth')
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;  
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.replace('Auth')
        return;
      }

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      props.navigation.navigate('Startup', {
        screen: 'Regions'
      });
      dispatch(authActions.authenticate(userId, token, expirationTime));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <LinearGradient colors={['#F97562', '#F9EFB5']} style={{flex:1}}>

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
