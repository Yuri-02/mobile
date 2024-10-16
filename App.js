import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import FriendDetail from './src/screens/UserDetail';
import Home from './src/screens/HomeScreen';
import List from './src/screens/UserList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export function StackScreen() {
  return (
    
    
      
      // <Image style={styles.logo} source={require('./img/LogoSample_ByTailorBrands (1).png')} /> 
      <Stack.Navigator >
        
        <Stack.Screen name="Tela inicial" component={Home}/>
        <Stack.Screen name="Lista amigos" component={List}/>
        <Stack.Screen name='Detalhes do amigo' component={FriendDetail}/>
      </Stack.Navigator>
      // <StatusBar style="auto" />
    
    
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela inicial">
        <Drawer.Screen name="Tela inicial" component={Home}/>
        <Drawer.Screen name="Lista amigos" component={List}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({


  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 40,
    alignSelf: 'center'
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
  }
})

