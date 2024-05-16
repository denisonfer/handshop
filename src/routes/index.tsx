import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react-native';
import Cart from '../screens/Cart';
import ProductsList from '../screens/ProductsList';
import ProductDetail from '../screens/ProductsList/ProductDetail';
import { useCartStore } from '../store/cart/useCartStore';
import { ProductStackParamList } from './interfaces';

const Stack = createNativeStackNavigator<ProductStackParamList>();

const Routes = () => {
  const { signOut } = useAuthenticator();
  const { clearCart } = useCartStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Products'
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name='Products'
          component={ProductsList}
          options={{
            title: 'Lista de Produtos',
            headerRight: () => (
              <Ionicons name='log-out' size={26} onPress={signOut} />
            ),
          }}
        />
        <Stack.Screen
          name='ProductDetail'
          component={ProductDetail}
          options={({ route }) => ({ title: route.params.product.title })}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{
            title: 'Carrinho de compras',
            headerRight: () => (
              <Ionicons name='bag-remove' size={26} onPress={clearCart} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
