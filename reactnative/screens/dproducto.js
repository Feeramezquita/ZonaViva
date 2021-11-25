import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function D_Producto({navigation}){
    return(
        <View style={globalStyles.containerdetalles}>
            <StatusBar style="auto" />
            <View style={globalStyles.productos}>
                <Text style={globalStyles.titleText}>Nombre del producto</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <Text style={globalStyles.paragraph}>Descripcion: Bultos de fertilizante</Text>
                <Text style={globalStyles.paragraph}>Contenido: 5 bultos</Text>
                <Text style={globalStyles.paragraph}>Precio: $250</Text>
            </View>
        </View>
    )
}