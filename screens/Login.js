import React, { useState, useReducer, useCallback, useEffect } from 'react'

import { View, StyleSheet, ScrollView, Button, ActivityIndicator, Alert, Image } from 'react-native'


import Input from '../Components/Input'
import Card from '../Components/Card'
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth'


import auth from '@react-native-firebase/auth';



const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};



const Login = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    useEffect(() => {
        if (error) {
            Alert.alert('Error', error.message, [{ text: 'Okay' }])
        }

    }, [error]);




    const authHandler = async () => {
        let action;
        if (isSignup) {
            action = authActions.signup(formState.inputValues.email, formState.inputValues.password);

        }
        else {
            action = authActions.login(formState.inputValues.email, formState.inputValues.password);
        }

        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.navigate('UserHome')
        } catch (err) {
            setError(err)

            setIsLoading(false);
        }

    }

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    return (
        <View
            style={styles.screen}>
                <Card style={styles.authContainer}>
                <Image source={require('../assets/images/snorlax.jpg')} style={{ width: 200, height: 120, alignSelf: 'center', resizeMode: 'contain', marginTop: 7 }} />

                    <ScrollView>
                        <Input
                            id='email'
                            label='E-Mail'
                            keyboardType='email-address'
                            required
                            email
                            autoCapitalize='none'
                            errorText='Please enter a valid email address.'
                            onInputChange={inputChangeHandler}
                            initialValue="" />

                        <Input
                            id='password'
                            label='Password'
                            keyboardType="default"
                            secureTextEntry
                            minLength={5}
                            required

                            autoCapitalize='none'
                            errorText='Please enter a valid password.'
                            onInputChange={inputChangeHandler}
                            initialValue="" />
                        <View style={styles.buttonContainer}>
                            {isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff"/>
                            ) : (
                                    <Button
                                        title={isSignup ? 'Sign Up' : 'Login'}
                                        color="#0000ff"
                                        onPress={authHandler}
                                        style={{fontFamily:'ComicNeue-Bold'}}
                                    />
                                )}
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title={`Go to ${isSignup ? 'Login' : 'Register'} `}
                                 onPress={() => {
                                    setIsSignup(prevState => !prevState)
                                }} />
                        </View>
                    </ScrollView>
                </Card>
            
        </View>

    )
};

Login.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#2971b5',
        fontFamily:'ComicNeue-Bold'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        padding: 20,
        maxHeight: 400,
        backgroundColor:'#baebca',
    },
    buttonContainer: {
        marginTop: 10

    }

});

export default Login;

