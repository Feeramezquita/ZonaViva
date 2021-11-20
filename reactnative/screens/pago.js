import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Pago({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla para el Pago</Text>
        </View>
    )
}