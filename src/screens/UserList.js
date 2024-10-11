import CardList from "../components/CardList";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from "react-native";

const users = [
    {id: '1', photo1:'https://img.freepik.com/fotos-premium/uma-mulher-com-cabelos-castanhos-longos-e-uma-camisa-castanha-esta-posando-para-uma-foto_1204450-10499.jpg' , name: 'Maria Silva', city: 'Duque de Caxias', state: 'RJ', maritalStatus: 'solteira', aboutMe: 'Olá, sou Maria, uma mulher apaixonada por contar histórias e ajudar os outros. Nasci em Duque de Caxias, onde cresci cercada pela natureza e pelas histórias inspiradoras da minha avó. Desde cedo, desenvolvi um amor pela leitura e pela escrita, o que me levou a seguir carreira no jornalismo.', photo2: 'https://img.freepik.com/fotos-premium/duas-mulheres-posam-para-uma-foto-com-uma-vestindo-uma-camisa-que-diz-sorriso_130412-107312.jpg', photo3: 'https://img.freepik.com/fotos-premium/mulheres-felizes-e-diversas-em-fila-na-praia_448154-2500.jpg'},

    {id: '2', photo1:'https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg', name: 'Ana Maria', city: 'Rio de Janeiro', state: 'RJ', maritalStatus: 'casada', aboutMe: 'Olá, sou Ana Maria. Nasci em Rio de Janeiro, onde sou casada com meu marido. Desde cedo, desenvolvi um amor pela leitura e pela escrita, o que me levou a seguir carreira no jornalismo. Meu marido é um escritor, e eu fico muito feliz em contar as histórias dele.', photo2: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg'},

    {id: '3', photo1:'https://metodosupera.com.br/wp-content/uploads/2023/09/20-anos-do-estatuto-da-pessoa-idosa-e-dia-internacional-do-idoso-supera-ginastica-para-o-cerebro-1.jpg', name: 'José Miguel', city: 'Boqueirão', state: 'PB', maritalStatus: 'casado', aboutMe: 'Passei a maior parte da minha vida servindo à comunidade, enfrentando incêndios e salvando vidas. Nasci em Boqueirão na Paraíba, mas bem jovem me mudei para o Rio de Janeiro, uma cidade encantadora onde conheci minha esposa, com quem estou casado há mais de 50 anos, há 2 anos voltei para minha cidade natal', photo2: 'https://storage.googleapis.com/novo-blog-wordpress/2023/09/aa84f330-capa-blog_estatuto-do-idoso-1.jpg'}
]
export default function List(){
    
    return (
        <View>
            {/* <TouchableOpacity
                onPress={()=> navigation.navigate('Detalhes do amigo', {users})}
                style={styles.amigo}
            >
                <Text>{users.name}</Text> 
                <Image source={{uri: users.photo1}} style={styles.profilePhoto} />   
            </TouchableOpacity> */}
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                   <CardList friend={item} />
                   
                //    <View style={styles.item}>
                //         <Image source={{uri: item.photo1}} style={styles.profilePhoto} />
                //         <Text style={styles.name}>{item.name}</Text>                     
                //     </View>
                )}
            />
        </View>
    )
}

// const styles = StyleSheet.create({
//     item: {
//         display: 'flex',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         borderRadius: 8,
//         margin: 8,
//         padding: 8,
//         backgroundColor: '#60a5fa',
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         padding: 16
//     },
//     profilePhoto: {
//         justifyContent: 'flex-start',
//         alignContent: 'center',
//         borderRadius: 16,
//         width: 64,
//         height: 72,  
//     }
 
// })