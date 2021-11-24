import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function D_Compra({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <ScrollView>
                <Text style={globalStyles.miniTitle}>Compras del día 31-12-2021</Text>    
                <View style={globalStyles.icon_text}>
                        <Ionicons name="list" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Nombre del producto x Cantidad = $$$.$$</Text>    
                    </View>
                    <View style={globalStyles.icon_text}>
                        <Ionicons name="list" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Nombre del producto x Cantidad = $$$.$$</Text>    
                    </View>
                    <View style={globalStyles.icon_text}>
                        <Ionicons name="list" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Nombre del producto x Cantidad = $$$.$$</Text>    
                    </View>
                    <View style={globalStyles.icon_text}>
                        <Ionicons name="list" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Nombre del producto x Cantidad = $$$.$$</Text>    
                    </View>
                    <View style={globalStyles.icon_text}>
                        <Ionicons name="list" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Nombre del producto x Cantidad = $$$.$$</Text>    
                    </View>

                    {/*Si es que hubo*/}
                    <View style={globalStyles.icon_text}>
                        <Ionicons name="cube" size={20} color="green" />
                        <Text style={globalStyles.smallParagraph}> Costo de envío = $$$.$$</Text>    
                    </View>

                    <View style={globalStyles.container}>
                        <View style={globalStyles.icon_imput}>
                            <Ionicons name="cash" size={20} color="green" />
                            <Text style={globalStyles.paragraph}> TOTAL = $$$.$$</Text>    
                        </View>
                    </View>

                    <View style={globalStyles.container}>
                        <TouchableOpacity style={globalStyles.Regresar} onPress={() => navigation.goBack()}>
                            <Text style={globalStyles.subtitleText}>Regresar</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
    )
}