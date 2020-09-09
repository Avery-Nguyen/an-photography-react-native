import React from 'react';
import { Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { styles}  from './style/style'


function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./img/mohammadreza-alidoost-sUoXs_lUhug-unsplash.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.toggleTitle}>
        <Text>Home Screen</Text>
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      >
        <Text>Go to Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBorder}
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      >
        <Text>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        title="Go to Stills"
        onPress={() => navigation.navigate('Stills')}
      >
        <Text>Go to Stills</Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.toggleTitle}>
      <Text>Details Screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.toggleTitle}>
      <Text>About</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function StillsScreen({ navigation }) {
  return (
    <View style={styles.toggleTitle}>
      <Text>Stills</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

const Drawer = createDrawerNavigator();



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Stills" component={StillsScreen} />
    </Drawer.Navigator>
  );
}

  export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     alignItems: 'stretch',
//     justifyContent: 'center',
    
//   },
//   title: {
//     margin: 'auto',
//     color: 'white',
//   },
//   toggleTitle: {
    
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-around',
//     backgroundColor: 'white'
//   },
//   button: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonBorder: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderTopColor: 'white',
//     borderTopWidth: '2px',
//     borderBottomColor: 'white',
//     borderBottomWidth: '2px',
//     borderStyle: 'solid',
//   }
// });
