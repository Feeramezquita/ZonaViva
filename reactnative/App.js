import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import Routes from './routes/routes';
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
      <Routes/>
    )
  }
};