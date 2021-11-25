import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import axios from 'axios';

export default function Catalogo({navigation}){

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get('/api/admin/productos').then(response => { 
            setProductos(response.data); 
            //console.log("Hola", response); 
        }).catch(error=>{console.log("ERROR", error.message)})
    }, []);
    console.log(productos.length);
    
    if (productos.length == 0){
        return null;
    }

    const productosLista = productos.map(producto => {
        return (
            <View style={globalStyles.productos}>
                <Text style={globalStyles.parrafosbutum}>{producto.nombre_item}</Text>
                <Image style={globalStyles.imagenproducto} source={require("../assets/img/productos.jpeg")}></Image>
                <TouchableOpacity style={globalStyles.detalles} onPress={() => navigation.push("Detalles")}>
                    <Text style={globalStyles.parrafosbutum}>${producto.descripcion_item}</Text>
                </TouchableOpacity>
            </View>
        )
    });

    return (
        <View style={globalStyles.containergreen}>
            <StatusBar style="auto" />
            <ScrollView>
                <Text style={globalStyles.titlecatalogo}>Conoce nuestros productos</Text>
                {productosLista}
                {/*<Text>{productos}</Text>
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
                </View>*/}
            </ScrollView>
        </View>
    );
}