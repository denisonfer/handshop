import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useCartStore } from '../../store/cart/useCartStore';

const Cart = () => {
  const { items } = useCartStore();
  if (!items.length) return;

  const { navigate } = useNavigation();

  const quantityTotalInCart = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate('Cart')}>
      <Text
        style={styles.label}
      >{`Clique aqui para ver seu carrinho com ${quantityTotalInCart} ${
        items.length > 1 ? 'produtos' : 'produto'
      }`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 60,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});

export default Cart;
