import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> About </Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ImageBackground source={require('./img/mohammadreza-alidoost-sUoXs_lUhug-unsplash.jpg')} style={{width: '100%', height: '100%'}}>
          <Button title= "Contact" onPress={() => alert('Contact')}/>
          <Button title= "About" onPress={() => navigation.navigate('About')}/>
          <Button title= "Stills" onPress={() => alert('Stills')}/>
          <Stack.Navigator>
             <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
          <Text style={styles.title}>AN Photography</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 'auto',
    color: 'white',
  }
});
