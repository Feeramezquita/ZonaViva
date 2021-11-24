import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Carrito({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <ScrollView style={globalStyles.scroll}>
                {/*<Text style={globalStyles.titleText}>Pantalla del Carrito de Compra</Text>*/}
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* ERRASE BELOW WHEN FIXED*/}
                
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.Image_text}>
                    <Image style={globalStyles.Payment}  source={ require('../assets/img/products/kitplantulas.jpg')}/>
                    <View style={globalStyles.container2}>
                        <Text style={globalStyles.microTitle2}>Producto Genérico - $<Text>200</Text></Text>
                        <View style={globalStyles.icon_imput}>
                            <TouchableOpacity style={globalStyles.Add}>
                                <Ionicons name="add-circle-outline" size={35} color="black" />
                            </TouchableOpacity>
                            <Text>15</Text>
                            <TouchableOpacity style={globalStyles.Trash}>
                                <Ionicons name="trash" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                

            </ScrollView>

            <TouchableOpacity style={globalStyles.Pago} onPress={() => navigation.push("Pago")}>
                <Text style={globalStyles.subtitleText}>Pagar</Text>
            </TouchableOpacity>
        </View>
    )
}