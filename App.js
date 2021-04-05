/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ReduxThunk from 'redux-thunk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { enableScreens} from 'react-native-screens'
import authReducer from './store/reducers/auth'
import PokemonNavigation from './navigation/PokemonNavigation';


const rootReducer = combineReducers({
  auth: authReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

enableScreens();


export default function App(){

  return(
    <Provider store={store}>
      <PokemonNavigation/>
    </Provider>
  )
     

}