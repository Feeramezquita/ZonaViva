import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import { CheckBox } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function Pago({navigation}){
    const[checked, setChecked] = useState(false);

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Recibo de compra</Text>

            <StatusBar style="auto" />
            <ScrollView>
                {/*Editar solo uno para hacer plantilla*/}
                <View style={globalStyles.container}>
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

                    <View style={globalStyles.icon_text}>
                        <Ionicons name="cash" size={20} color="green" />
                        <Text style={globalStyles.paragraph}> TOTAL = $$$.$$</Text>    
                    </View>
                </View>
                <CheckBox
                    center
                    title='Envío a domicilio?'
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                />
                {checked?
                    <TouchableWithoutFeedback onPress={() => {
                        Keyboard.dismiss();
                        console.log('dismissed keyboard')
                    }} >
                        <View style={globalStyles.container}>
                            <View style={globalStyles.icon_imput}>
                                <Ionicons name="compass" size={20} color="green" />
                                <TextInput style={globalStyles.InputData2} placeholder= 'Dirección' />    
                            </View>
                            <View style={globalStyles.icon_imput}>
                                <Ionicons name="star" size={20} color="green" />
                                <TextInput style={globalStyles.InputData2} placeholder= 'Instrucciones especiales' />    
                            </View>
                            <View style={globalStyles.icon_text}>
                                <Ionicons name="cash" size={20} color="green" />
                                <Text style={globalStyles.paragraph}> $50 de envio por compras menores </Text>    
                            </View>
                        </View> 
                    </TouchableWithoutFeedback>:
                    <Text style={globalStyles.smallParagraph}>Sus productos deberán de ser recogidos en la sucursal =D</Text>
                }
            </ScrollView>

            <TouchableOpacity style={globalStyles.ConfirmarPago} onPress={() => navigation.navigate("Carrito")}>
                <Text style={globalStyles.subtitleText}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}