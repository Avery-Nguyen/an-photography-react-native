import {styles} from "../style/style"
import React from 'react';
import { Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';

export default function StillsScreen({ navigation }) {
  return (
    <View>
      <View style={styles.toggleTitle}>
        <TouchableOpacity title="Content" onPress={() => navigation.toggleDrawer()} >
            <Text style={styles.contentText}> - Content</Text>
        </TouchableOpacity>
        <TouchableOpacity title="Home" onPress={() => navigation.navigate('Home')} >
            <Text style={styles.contentText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../img/lonis-islam-M71UuBegfW0-unsplash.jpg')} />
      </View>
    
    </View>
  );
}