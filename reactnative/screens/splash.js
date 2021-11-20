import React from 'react';
import {View, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Splash(){
    return(
        <View style={globalStyles.container}>
            <Image style={globalStyles.logo} source={ require('../assets/img/logo.png')}/>
        </View>
    )
}