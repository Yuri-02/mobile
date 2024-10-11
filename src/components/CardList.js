import { Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardList({friend}){
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FriendDetail', {friend})}>
            <Image source={{uri: friend.photo1}} style={styles.profilePhoto} />
            <Text style={styles.name}>{friend.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        // display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        margin: 8,
        padding: 8,
        backgroundColor: '#60a5fa',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16
    },
    profilePhoto: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        borderRadius: 16,
        width: 64,
        height: 72,  
    }
 
})
