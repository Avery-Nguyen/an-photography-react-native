import {styles} from "../style/style"
import React from 'react';
import { Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function StillsScreen({ navigation }) {
  return (
    <View style={styles.toggleTitle}>
      <TouchableOpacity title="Content" onPress={() => navigation.toggleDrawer()} >
          <Text style={styles.contentText}> - Content</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Home" onPress={() => navigation.navigate('Home')} >
          <Text style={styles.contentText}>Home</Text>
        </TouchableOpacity>
    </View>
  );
}