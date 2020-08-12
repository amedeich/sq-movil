import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { Fragment, useState } from 'react';
import Nav from './navigation/Nav';
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font';


const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)
  let [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'chilanka': require('./assets/fonts/Chilanka-Regular.ttf'),
    'comforta-bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    'comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (

    <Fragment>
      <StatusBar barStyle="light-content" />
      <Nav />
    </Fragment>
  );
};

export default App;
