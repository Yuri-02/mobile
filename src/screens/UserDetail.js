import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Yuri Albuquerque Silva</Text>
      <Image style={styles.photo} source={require('../../img/IMG_20240420_111806.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16
  },

  photo: {
    
    width: 300,
    height: 400,
  },
});