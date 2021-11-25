import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function D_Producto({navigation}){
    return(
        <View style={globalStyles.containerdetalles}>
            <StatusBar style="auto" />
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Nombre del producto</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <Text style={globalStyles.paragraph}>Descripcion: Bultos de fertilizante</Text>
                <Text style={globalStyles.paragraph}>Contenido: 5 bultos</Text>
                <Text style={globalStyles.paragraph}>Precio: $250</Text>
                <TouchableOpacity style={globalStyles.Editar} >
                    <Ionicons name="cart" size={35} color="#009CDE" />
                </TouchableOpacity>
            </View>
        </View>
    )
}