import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Carrito({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla del Carrito de Compra</Text>

            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("Pago")}>
                <Text style={globalStyles.subtitleText}>Pagar</Text>
            </TouchableOpacity>
        </View>
    )
}