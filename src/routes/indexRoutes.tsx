import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutoItem from '../screens/productItem/indexProdutos';
import TelaSobre from '../screens/about/indexSobre';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tela de Produtos" component={ProdutoItem} />
        <Tab.Screen name="Sobre" component={TelaSobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}