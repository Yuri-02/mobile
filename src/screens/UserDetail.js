import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function FriendDetail() {
const route = useRoute();
const {friend} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {friend.name}</Text>
      {/* <Image source={{uri: friend.photo1}} style={styles.profilePhoto} /> */}
      <Text style={styles.city}>Cidade: {friend.city}</Text>
      <Text style={styles.state}>UF: {friend.state}</Text>
      <Text style={styles.maritalStatus}>Estado Civil {friend.maritalStatus}</Text>
      <Text style={styles.aboutMe}>Sobre mim: {friend.aboutMe}</Text>
      <Text style={styles.morePhotos}>Mais Fotos</Text>
      {/* <Image source={{uri: friend.photo2}} style={styles.profilePhoto} />
      <Image source={{uri: friend.photo3}} style={styles.profilePhoto} /> */}
      
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