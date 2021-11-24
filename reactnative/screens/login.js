import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

//const [email, setEmail] = React.useState('');
//const [password, setPassword] = React.useState('');

//const { signIn } = React.useContext(AuthContext);

export default function LogIn({navigation}){
  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }} >
      <View style={globalStyles.container}>
        <StatusBar style="dark" />
        <Image style={globalStyles.logo} source={ require('../assets/img/logo.png')}/>
        {//<Text style={globalStyles.titleText}>Pantalla de LogIn</Text>
         //<Text style={globalStyles.subtitleText}>LogIn</Text>
        }
        <TextInput style={globalStyles.InputData} placeholder= 'Correo electrónico' /*value = "email" onChangeText={setEmail}*/ />
        <TextInput style={globalStyles.InputData} placeholder= 'Contraseña' /*value = "password" onChangeText={setPassword}*/ secureTextEntry/>

        {/*<TouchableOpacity style={globalStyles.Ingresar} onPress={() => signIn({email, password})}>*/}
        <TouchableOpacity style={globalStyles.Ingresar} onPress={() => navigation.push("HomeStack")}>
          <Text style={globalStyles.subtitleText}>Iniciar sesión</Text>
          <Ionicons name="caret-forward-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.Registrar} onPress={() => navigation.push("Registrar")}>
          <Text style={globalStyles.subtitleText}>Crear cuenta nueva</Text>
          <Ionicons name="person-add-outline" size={20} color="black"/>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};