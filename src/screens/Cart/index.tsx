import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { IProductInCart } from '../../store/cart/interfaces';
import { useCartStore } from '../../store/cart/useCartStore';
import { styles } from './styles';

const Cart = () => {
  const { items } = useCartStore();
  const { goBack } = useNavigation();
  const { addToCart, removeFromCart, removeItem } = useCartStore();

  useEffect(() => {
    if (!items.length) return goBack();
  }, [items]);

  const amountItem = useCallback((item: IProductInCart) => {
    return (item.price * item.quantity).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }, []);

  const totalAmount = useMemo(() => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [items]);

  return (
    <>
      <ScrollView style={styles.container}>
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
              <Ionicons
                name='remove-circle'
                size={26}
                onPress={() => removeItem(product.id)}
              />
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
              <Text style={styles.title}>{amountItem(product)}</Text>

              <AntDesign
                name='delete'
                size={24}
                onPress={() => removeFromCart(product.id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {totalAmount > 0 && (
        <View style={styles.amountContainer}>
          <Text style={styles.amountTitle}>
            Valor total a pagar{' '}
            {totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
        </View>
      )}
    </>
  );
};

export default Cart;
