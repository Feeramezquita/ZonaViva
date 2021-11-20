import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LogIn({navigation}){
  return(
    <View style={globalStyles.container}>
      <StatusBar style="dark" />
      <Image style={globalStyles.logo} source={ require('../assets/img/logo.png')}/>
      {//<Text style={globalStyles.titleText}>Pantalla de LogIn</Text>
       //<Text style={globalStyles.subtitleText}>LogIn</Text>
      }
      <TextInput>Correo Electrónico</TextInput>
      <TextInput>Contraseña</TextInput>

      <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("HomeStack")}>
        <Text style={globalStyles.subtitleText}>Iniciar sesión</Text>
        <Ionicons name="caret-forward-outline" size={20} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={globalStyles.Registrar} onPress={() => navigation.push("Registrar")}>
        <Text style={globalStyles.subtitleText}>Crear cuenta nueva</Text>
        <Ionicons name="person-add-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};