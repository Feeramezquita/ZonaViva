import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './authprovider';
import * as SecureStore from 'expo-secure-store';

import Carrito from '../screens/carrito';
import Catalogo from '../screens/catalogo';
import Cuenta from '../screens/cuenta';
import DCompra from '../screens/dcompra';
import DProducto from '../screens/dproducto';
import EdiCuenta from '../screens/edicuenta';
import Historial from '../screens/historial';
import Home from '../screens/home';
import LogIn from '../screens/login';
import Pago from '../screens/pago';
import Registrar from '../screens/registrar';
import Splash from '../screens/splash'


import { globalStyles } from '../styles/global';

const AuthStack =  createNativeStackNavigator();
const Tabs =  createBottomTabNavigator();
const ProductStack = createNativeStackNavigator();
const CarritoStack = createNativeStackNavigator();
const HistStack = createNativeStackNavigator();
const CuentaStack = createNativeStackNavigator();

const ProductStackScreen = () => (
    <ProductStack.Navigator>
        <ProductStack.Screen name="Catalog" component={Catalogo} options={{headerShown: false}}/>
        <ProductStack.Screen name="Detalles" component={DProducto} options={{title: 'Detalles del Producto'}}/>
    </ProductStack.Navigator>
);

const CarritoStackScreen = () => (
    <CarritoStack.Navigator>
        <CarritoStack.Screen name="Carrito" component={Carrito} options={{headerShown: false}}/>
        <CarritoStack.Screen name="Pago" component={Pago} options={{title: 'Pagar'}}/>
    </CarritoStack.Navigator>    
);

const HistStackScreen = () => (
    <HistStack.Navigator>
        <HistStack.Screen name="History" component={Historial} options={{headerShown: false}}/>
        <HistStack.Screen name="DCompra" component={DCompra} options={{title: 'Detalles de Compra'}}/>
    </HistStack.Navigator>
);

const CuentaStackScreen = () => (
    <CuentaStack.Navigator>
        <CuentaStack.Screen name="Account" component={Cuenta} options={{headerShown: false}}/>
        <CuentaStack.Screen name="Editar" component={EdiCuenta} options={{title: 'Editar Cuenta'}}/>
        {/*<CuentaStack.Screen name="LogOut" component={AuthStackScreen} />*/}
    </CuentaStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Inicio" component={Home} options={{ tabBarIcon:()=> (<Ionicons name="home" size={20} color="black" />)}}/>
        <Tabs.Screen name="Catálogo" component={ProductStackScreen} options={{ tabBarIcon: () => (<Ionicons name="apps" size={20} color="black" />)}} />
        <Tabs.Screen name="Carrito" component={CarritoStackScreen} options={{ tabBarIcon: () => (<Ionicons name="cart" size={20} color="black" />)}}/>
        <Tabs.Screen name="Historial" component={HistStackScreen} options={{ tabBarIcon: () => (<Ionicons name="time" size={20} color="black" />)}}/>
        <Tabs.Screen name="Cuenta" component={CuentaStackScreen} options={{ tabBarIcon: () => (<Ionicons name="person" size={20} color="black" />)}}/>    
    </Tabs.Navigator>
);

const AuthStackScreen = () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
            <AuthStack.Screen name="HomeStack" component={TabsScreen} options={{headerShown: false}}/>
            <AuthStack.Screen name="Registrar" component={Registrar} options={{title: 'Creando cuenta nueva'}}/>
        </AuthStack.Navigator>
    </NavigationContainer>
);

//export default function LogInStack(){
//
//    const { user, login, logout } = useContext(AuthContext)
//    const [loading, setloading] = useState(true);
//
//    useEffect(() => {
//        SecureStore.getItemAsync('user')
//        .then(userString => {
//            if (userString) {
//                login();
//            }
//            setloading(false);
//        })
//        .catch(err => {
//            console.log(err);
//        })
//    }, []);
//
//    if(loading) {
//        return (
//            <Splash />
//        )
//    }
//
//    return(
//            user ? TabsScreen() : AuthStackScreen()
//    );
//}

export default function LogInStack(){

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
            setUser({});
        }, 500);
    }, []);

    if (isLoading) {
        return ( 
            <Splash />
        )
    }

    return(
        AuthStackScreen()
        //<NavigationContainer>
        //    <AuthStack.Navigator>
        //        <AuthStack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
        //        <AuthStack.Screen name="HomeStack" component={TabsScreen} options={{headerShown: false}}/>
        //        <AuthStack.Screen name="Registrar" component={Registrar} options={{title: 'Creando cuenta nueva'}}/>
        //    </AuthStack.Navigator>
        //</NavigationContainer>
    );   
}