import React from 'react';
import {StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Cuenta({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleText}>Pantalla de la Cuenta</Text>
            
            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("Editar")}>
                <Text style={globalStyles.subtitleText}>Editar Cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.popToTop()}>
                <Text style={globalStyles.subtitleText}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}