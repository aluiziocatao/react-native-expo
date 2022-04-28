import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';

import onepiece from './assets/animes/onepiece.jpg';
import dbz from './assets/animes/dbz.jpg';
import tn from './assets/animes/tn.jpg';

const width = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>      
      <Text style={styles.detalhes}>Detalhes dos Animes</Text>
      <View>
        <Text style={styles.tituloOp}>One Piece</Text>
        <Image style={styles.logoAnime} source={onepiece} />

        <Text style={styles.tituloDbz}>Dragon Ball Z</Text>
        <Image style={styles.logoAnime} source={dbz} />

        <Text style={styles.tituloBc}>Black Clover</Text>        
        <Image style={styles.logoAnime} source={tn} />
      </View>
      <Text style={styles.cliqueAqui}>Clique aqui para assistir</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },  
  detalhes: {
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign: "center"
  },
  tituloOp: {
    color: "#FF8C00",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 35
  },
  tituloDbz: {
    color: "#FF4500",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 35
  },
  tituloBc: {
    color: "#2F4F4F",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 35
  },
  logoAnime: {
    width: 50,
    height: 50,
    marginLeft: 2,
    marginBottom: 15
  },
  anime: {
    flexDirection: "row",
    padding: 10,
  },
  cliqueAqui: {
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10
  }
});
