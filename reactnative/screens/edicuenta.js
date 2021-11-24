import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Edi_Cuentas({navigation}){
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }} >
            <View style={globalStyles.container}>
                <StatusBar style="auto" />
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="at" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'ElbaBullet78' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="person" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'Elba Lazo Sagrado' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="mail" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'elba_sagrado@gmail.com' />    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="key" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= 'SecretMySecret' secureTextEntry/>    
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="add" size={20} color="black" />
                    <TextInput style={globalStyles.InputData2} placeholder= '29 años' keyboardType={'numeric'}/>    
                </View>
                <TouchableOpacity style={globalStyles.Registrar3} onPress={() => navigation.goBack()}>
                    <Text style={globalStyles.subtitleText}>Actualizar datos</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}