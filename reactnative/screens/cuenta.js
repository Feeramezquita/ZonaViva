import React from 'react';
import {StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cuenta({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            {/*<Text style={globalStyles.titleText}>Pantalla de la Cuenta</Text>*/}
            <Text style={globalStyles.miniTitle}>Bienvenida ElbaBullet78</Text>

            <View style={globalStyles.containercard}>

                <TouchableOpacity style={globalStyles.Editar} onPress={() => navigation.push("Editar")}>
                    <Ionicons name="create" size={35} color="#009CDE" />
                </TouchableOpacity>

                <View style={globalStyles.icon_text}>
                    <Ionicons name="at" size={20} color="green" />
                    <Text style={globalStyles.paragraph}> ElbaBullet78</Text>    
                </View>
                <View style={globalStyles.icon_text}>
                    <Ionicons name="person" size={20} color="green" />
                    <Text style={globalStyles.paragraph}> Elba Lazo Sagrado</Text>    
                </View>
                <View style={globalStyles.icon_text}>
                    <Ionicons name="mail" size={20} color="green" />
                    <Text style={globalStyles.paragraph}>elba_sagrado@gmail.com</Text>    
                </View>
                <View style={globalStyles.icon_text}>
                    <Ionicons name="key" size={20} color="green" />
                    <Text style={globalStyles.paragraph} secureTextEntry> SecretMySecret</Text>    
                </View>
                <View style={globalStyles.icon_text}>
                    <Ionicons name="add" size={20} color="green" />
                    <Text style={globalStyles.paragraph}> 29 años</Text>    
                </View>
            </View>

            <TouchableOpacity style={globalStyles.LogOut} onPress={() => navigation.popToTop()}>
                <Text style={globalStyles.subtitleText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}