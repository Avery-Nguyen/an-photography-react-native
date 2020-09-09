import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import AboutScreen from './AboutScreen'
import StillsScreen from './StillsScreen'

const Drawer = createDrawerNavigator();



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="X"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Stills" component={StillsScreen} />
    </Drawer.Navigator>
  );
}