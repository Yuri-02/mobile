import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Yuri Albuquerque Silva</Text>
            <Image style={styles.photo} source={require('../../img/IMG_20240420_111806.jpg')} />
            <TouchableOpacity style={styles.friends}>
                <Button style={styles.button}  title="Lista de amigos" onPress={() => navigation.navigate('Lista amigos')}></Button>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      photo: {
        margin: 16,
        width: '100%',
        height: 480,
        resizeMode: 'cover',
        borderRadius: 16 ,
      },
    
    friends:{
        display: 'flex',
        width: 160,
        justifyContent: 'center',        
        borderRadius: 8,
    },

    button: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
    }
})