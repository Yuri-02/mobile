import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FriendDetail() {
const route = useRoute();
const {friend} = route.params;
const B = (props) => <Text style={{fontWeight: 'bold', fontSize:18}}>{props.children}</Text>;

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Perfil de {friend.name}</Text>
      <Image source={{uri: friend.photo1}} style={styles.profilePhoto} />
      <View style={styles.informationsContainer}>
        <Text style={styles.informations}><B>Cidade:</B> {friend.city}</Text>
        <Text style={styles.informations}><B>UF:</B> {friend.state}</Text>
        <Text style={styles.informations}><B>Estado Civil:</B> {friend.maritalStatus}</Text>
        <Text style={styles.informations}><B>Sobre mim:</B> {friend.aboutMe}</Text>
      </View>
      <Text style={styles.morePhotosText}>Mais Fotos</Text>
      <Image source={{uri: friend.photo2}} style={styles.morePhotos} />
      <Image source={{uri: friend.photo3}} style={styles.morePhotos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfdbfe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16
  },

  informationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'baseline',
 
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    gap: 8,
  
    backgroundColor: '#60a5fa',
    
    },

    informations: {
      fontSize: 16,
      
    },

    morePhotosText: {
      fontSize: 16,
    },

    profilePhoto: {
      justifyContent: 'flex-start',
      alignContent: 'center',
      borderRadius: 16,
      width: 160,
      height: 200,
    },

    morePhotos: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 16,
      width: '100%',
      height: '100%',
      margin: 16, 
      resizeMode: 'contain'
    }
});