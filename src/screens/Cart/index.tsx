import React from 'react';
import { Text } from 'react-native';
import { useCartStore } from '../../store/cart/useCartStore';

const Cart = () => {
  const { items } = useCartStore();

  return items.map((product) => (
    <Text key={String(product.id)}>{product.title}</Text>
  ));
};

export default Cart;
