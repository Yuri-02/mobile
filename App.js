import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import User from './src/screens/UserDetail';
import Home from './src/screens/HomeScreen';
import List from './src/screens/UserList';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      
      <Image style={styles.logo} source={require('./img/LogoSample_ByTailorBrands (1).png')} /> 
      <Stack.Navigator initialRouteName="Tela inicial">
        
        <Stack.Screen name="Tela inicial" component={Home}/>
        <Stack.Screen name="Lista amigos" component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center'
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
  }
})

