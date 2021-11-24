import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Historial({navigation}){
    return(
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <Text style={globalStyles.titleTextHeader}>Historial de compras</Text>

            <ScrollView>
                {/*Si hubo pagos, se mostrarán aquí*/}
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>

                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.icon_imput}>
                    <Ionicons name="calendar" size={35} color="green" />
                    <Text style={globalStyles.normalText}>31-12-2021</Text>
                    <TouchableOpacity style={globalStyles.icon_text2} onPress={() => navigation.push("DCompra")}>
                        <Text style={globalStyles.subtitleText}>Detalles</Text>
                        <Ionicons name="eye" size={35} color="black"/>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>
    )
}