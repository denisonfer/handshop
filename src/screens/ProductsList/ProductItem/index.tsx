import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { PropsProductsScreens } from '../../../routes/interfaces';
import { useCartStore } from '../../../store/cart/useCartStore';
import { IProduct } from '../interface';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { navigate } = useNavigation<PropsProductsScreens>();

  const { addToCart } = useCartStore.getState();

  const addProductInCart = useCallback((productItem: IProduct) => {
    addToCart(productItem);
  }, []);

  const viewProduct = useCallback((product: IProduct) => {
    navigate('ProductDetail', { product });
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => viewProduct(product)}
    >
      <Image
        source={{ uri: product.image }}
        width={150}
        height={150}
        resizeMode='contain'
      />
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
            {product.title}
          </Text>
          <Text style={styles.subtitle}>R$ {product.price}</Text>
        </View>

        <TouchableOpacity
          onPress={() => addProductInCart(product)}
          style={styles.icon}
        >
          <Ionicons name='cart-outline' size={18} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 36,
    borderRadius: 8,
    backgroundColor: '#e6ebf2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6ebf2',
    borderRadius: 100,
  },
});

export default ProductItem;
