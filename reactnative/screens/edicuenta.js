import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Edi_Cuentas({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla para Editar Cuentas</Text>
        </View>
    )
}