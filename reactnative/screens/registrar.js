import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Registrar({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla para Registrar Cuentas</Text>

            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("HomeStack")}>
                <Text style={globalStyles.subtitleText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )
}