import { useNavigation } from '@react-navigation/native';
import React, { memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropsProductsScreens } from '../../routes/interfaces';
import { useCartStore } from '../../store/cart/useCartStore';
import { styles } from './styles';

const Cart = () => {
  const { navigate } = useNavigation<PropsProductsScreens>();
  const items = useCartStore((state) => state.items);

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

export default memo(Cart);
