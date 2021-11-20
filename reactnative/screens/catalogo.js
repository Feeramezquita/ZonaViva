import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Catalogo({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla del Catalogo de Productos</Text>

            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("Detalles")}>
                <Text style={globalStyles.subtitleText}>Detalles</Text>
            </TouchableOpacity>
        </View>
    )
}