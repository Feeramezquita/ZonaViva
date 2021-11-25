import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import Routes from './routes/routes';
import { AuthProvider } from './routes/authprovider';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.155:8000';   //Cambiar a la IP del equipo || Debe ser la URL pública del dominio, poner la IP de digital ocean
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

export default function App() {
  //Usando los fonts de la organizacion
  let [fontsLoaded] = useFonts({
    'PS-Bold': require('./assets/fonts/PublicSans-Bold.ttf'),
    'PS-Light': require('./assets/fonts/PublicSans-Light.ttf'),
    'PS-Regular': require('./assets/fonts/PublicSans-Regular.ttf'),
    'PS-SemiBold': require('./assets/fonts/PublicSans-SemiBold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      //<AuthProvider>
        <Routes/>
      //</AuthProvider>
    )
  }
};