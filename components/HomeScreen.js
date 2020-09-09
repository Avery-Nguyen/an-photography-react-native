import {styles} from "../style/style"
import React from 'react';
import { Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../img/mohammadreza-alidoost-sUoXs_lUhug-unsplash.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.toggleNav}>
        <TouchableOpacity title="Content" onPress={() => navigation.toggleDrawer()} >
          <Text style={styles.contentText}> - Content</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        title="Details"
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.title}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBorder}
        title="About"
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.title}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        title="Stills"
        onPress={() => navigation.navigate('Stills')}
      >
        <Text style={styles.title}>Stills</Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
