import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';


export default function ProdutoItem() {
  return (
  <ScrollView style={styles.container}>
  <SafeAreaView>
  <View style={styles.box}>
  <View style={styles.container}>
    <Image style={styles.tenis1} source={require( '../../../assets/Tenis1.png')}/>
    <Text>Tenis Adidas Verde: R$ 49,99</Text>
  </View>

  <View style={styles.container}>
    <Image style={styles.tenis1} source={require('../../../assets/tenis2.png')} />
    <Text>Tenis Adidas Branco e Preto:
      R$ 69,99 </Text>
      </View>

      <View style={styles.container}>
      <Image style={styles.tenis1} source={require('../../../assets/tenis3.jpg')} />
      <Text>Tenis Adidas preto e Branco:
        R$ 69,99 </Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.tenis1} source={require('../../../assets/tenis4.jpg')} />
        <Text>Tenis Adidas Rosa Fem:
        R$ 59,99 </Text>
        </View>

        <View style={styles.container}>
        <Image style={styles.tenis1} source={require('../../../assets/tenis5.png')} />
          <Text>Tenis Adidas Black:
            R$ 59,99 </Text>
        </View>

        <View style={styles.container}>
          <Image style={styles.tenis1} source={require('../../../assets/tenis11.png')} />
          <Text>Tenis Adidas Preto e Amarelo:
            R$ 59,99 </Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.tenis1} source={require('../../../assets/tenis22.png')} />
          <Text>Tenis Adidas Kids:
            R$ 59,99 </Text>
        </View>
        </View>
        {}
     </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,},
    scrollView: {
      backgroundColor: 'green',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },

    tenis1: {
      height: 100,
      maxWidth: 200,
      maxHeight: 80,
      width: 200,
    },
     box:{
      alignItems: 'center',
      justifyContent: 'center'
     }
   
  });
 