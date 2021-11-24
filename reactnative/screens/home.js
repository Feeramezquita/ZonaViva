import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';




export default function Home(){
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <StatusBar style="auto" />
                <View>
                    <ImageBackground style={globalStyles.imagenesHome1} source={require("../assets/img/portada.jpg")} resizeMode="cover" ></ImageBackground>
                </View>
                <View style={globalStyles.cuadroTexto}>
                    <Text></Text>
                    <Text style={globalStyles.titulosHome}>Bienvenidos a Zona Viva</Text>
                    <Text style={globalStyles.parrafosHome}>Un espacio comunitario e inclusivo, que busca regenerar el tejido social e impulsar una cultura pacífica y consciente a través de proyectos de permacultura, la construcción de un huerto urbano comunitario y un espacio en donde impartir conocimientos que permitan el buen vivir en el futuro para la humanidad.</Text>
                    <Text style={globalStyles.parrafosHome}>Somos un proyecto que demuestra como es posible lograr una transformación positiva en la sociedad a través de la unión de voluntades y del trabajo en comunidad, tomando nuestro entorno como prioridad. Una solución alternativa a la problemática ambiental en nuestro días.</Text>            
                </View>
                <View>
                    <ImageBackground style={globalStyles.imagenesHome2} source={require("../assets/img/productos.jpeg")} resizeMode="cover" ></ImageBackground>
                </View>
                <View style={globalStyles.integrantes}>
                    <Text></Text>
                    <Text style={globalStyles.titulosHome}>Conoce a nuestro equipo de trabajo</Text>
                    <View >
                        <Image style={globalStyles.imagenesequipo1} source={require("../assets/img/marce.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Marce tuvo la visión y dedicación de gestionar un espacio público sin uso, para convertirlo en un centro de convivencia social. Actualmente es la directora del proyecto.</Text>
                        <Image style={globalStyles.imagenesequipo2} source={require("../assets/img/tere.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Tere es una permacultora ejemplar y de corazón. Comenzó a trabajar en Zona Viva como voluntaria desde el inicio del proyecto. Hoy, Tere se encarga de gestionar los cursos, talleres y actividades que se llevan a cabo en Zona Viva.</Text>
                        <Image style={globalStyles.imagenesequipo3} source={require("../assets/img/eduardo.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Eduardo nos ayuda a comunicar todo lo que hacemos en Zona Viva, genera contenido de manera creativa e innovadora para que más personas conozcan y se sumen al proyecto.</Text>
                        <Image style={globalStyles.imagenesequipo4} source={require("../assets/img/javier.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Javier ha sido parte de Zona Viva desde su fundación. Opera y administra la logística del proyecto, coordina talleristas y asistentes y siempre esta buscando nuevos cursos que ofrecer.</Text>
                        <Image style={globalStyles.imagenesequipo5} source={require("../assets/img/joselo.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Joselo es es un experto en ecología, agricultura, y construcción sustentable. Se encarga de la siembra y recolección en Zona Viva, la construcción de bancales e invernaderos, y también imparte cursos y talleres.</Text>
                        <Image style={globalStyles.imagenesequipo6} source={require("../assets/img/sergio.webp")}></Image>
                        <Text style={globalStyles.parrafosHome}>Sergio es el arquitecto del proyecto. Desde el primer día que visitó el espacio, entendió el gran potencial que tiene y desde entonces, ha trabajado día y noche para lograr el huerto urbano de nuestros sueños.</Text>
                    </View>
                </View>
                <View>
                <ImageBackground style={globalStyles.imagenesHome3} source={require("../assets/img/foto1.webp")} resizeMode="cover" ></ImageBackground>
                </View>            
            </ScrollView>
        </View>
    )
}

