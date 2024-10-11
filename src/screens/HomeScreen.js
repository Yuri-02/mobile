import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Button title="Lista amigos" onPress={() => navigation.navigate('Lista amigos')}></Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})