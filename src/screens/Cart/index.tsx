import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { IProductInCart } from '../../store/cart/interfaces';
import { useCartStore } from '../../store/cart/useCartStore';
import { styles } from './styles';

const Cart = () => {
  const { items } = useCartStore();
  const { goBack } = useNavigation();
  const { addToCart, removeFromCart } = useCartStore.getState();

  useEffect(() => {
    if (!items.length) return goBack();
  }, [items]);

  const amountItem = (item: IProductInCart) => {
    return Math.round(item.price * item.quantity);
  };

  return (
    <View style={styles.container}>
      {items.map((product) => (
        <View key={String(product.id)} style={styles.item}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: product.image }}
              resizeMode='contain'
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.subtitle}>R$ {product.price}</Text>
            </View>
          </View>

          <View style={styles.centerContent}>
            <Ionicons name='remove-circle' size={26} onPress={() => {}} />
            <Text style={[styles.title, { marginHorizontal: 10 }]}>
              {product.quantity}
            </Text>
            <Ionicons
              name='add-circle'
              size={26}
              onPress={() => addToCart(product)}
            />
          </View>

          <View style={styles.rightContent}>
            <Text style={styles.title}>R$ {amountItem(product)}</Text>

            <AntDesign
              name='delete'
              size={24}
              onPress={() => removeFromCart(product.id)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Cart;
