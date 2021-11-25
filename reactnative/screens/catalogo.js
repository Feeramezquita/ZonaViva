import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';

export default function Catalogo({navigation}){
    return(
        <View style={globalStyles.containergreen}>
             <ScrollView>
            <StatusBar style="auto" />
            <Text style={globalStyles.titlecatalogo}>Conoce nuestros productos</Text>
            <View style={globalStyles.productos}>
                <Text style={globalStyles.parrafosbutum}>Producto1</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <TouchableOpacity style={globalStyles.detalles} onPress={() => navigation.push("Detalles")}>
                    <Text style={globalStyles.parrafosbutum}>Detalles</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.productos}>
                <Text style={globalStyles.parrafosbutum}>Producto1</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <TouchableOpacity style={globalStyles.detalles} onPress={() => navigation.push("Detalles")}>
                    <Text style={globalStyles.parrafosbutum}>Detalles</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.productos}>
                <Text style={globalStyles.parrafosbutum}>Producto1</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <TouchableOpacity style={globalStyles.detalles} onPress={() => navigation.push("Detalles")}>
                    <Text style={globalStyles.parrafosbutum}>Detalles</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.productos}>
                <Text style={globalStyles.parrafosbutum}>Producto1</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <TouchableOpacity style={globalStyles.detalles} onPress={() => navigation.push("Detalles")}>
                    <Text style={globalStyles.parrafosbutum}>Detalles</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}