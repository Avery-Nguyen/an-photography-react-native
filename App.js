import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyDrawer from './components/MyDrawer'


  export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }

