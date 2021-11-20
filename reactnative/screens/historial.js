import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Historial({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla del Historial de Compras</Text>

            
            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("DCompra")}>
                <Text style={globalStyles.subtitleText}>Detalles de Compra</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        padding:24,
    }
});