import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/indexRoutes';

import routes from '@react-navigation/bottom-tabs';
import TelaSobre from './src/screens/about/indexSobre';
import ProductItem from './src/screens/productItem/indexProdutos';

export default function App() {
  return <Routes />
    // <View style={styles.container}>
    //   <Text>Tela Principal Adidas </Text>
    //   <StatusBar style="auto" />
    // </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
