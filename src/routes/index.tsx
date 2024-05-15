import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../screens/Cart';
import ProductsList from '../screens/ProductsList';
import ProductDetail from '../screens/ProductsList/ProductDetail';
import { ProductStackParamList } from './interfaces';

const Stack = createNativeStackNavigator<ProductStackParamList>();

const Routes = () => {
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
          options={{ title: 'Lista de Produtos' }}
        />
        <Stack.Screen
          name='ProductDetail'
          component={ProductDetail}
          options={({ route }) => ({ title: route.params.product.title })}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ title: 'Carrinho de compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
