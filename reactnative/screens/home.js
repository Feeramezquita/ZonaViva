import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Home(){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla Principal/Home</Text>
        </View>
    )
}