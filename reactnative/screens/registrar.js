import React from 'react';
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Registrar({navigation}){
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }} >
            <View style={globalStyles.container}>
                <StatusBar style="auto" />
                <Text style={globalStyles.titleText}>Bienvenido a ZonaViva</Text>

                <View style={globalStyles.icon_imput}>
                    <Ionicons name="at" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Nombre de Usuario' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="person" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Nombre y Apellidos' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="mail" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Correo Electrónico' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="key" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Contraseña' secureTextEntry/>    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="add" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Edad' keyboardType={'numeric'}/>    
                </View>
                <TouchableOpacity style={globalStyles.Registrar2} onPress={() => navigation.push("HomeStack")}>
                    <Text style={globalStyles.subtitleText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}