import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { PropsProductsScreens } from '../../../routes/interfaces';
import { useCartStore } from '../../../store/cart/useCartStore';
import { IProduct } from '../interface';
import { styles } from './styles';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { navigate } = useNavigation<PropsProductsScreens>();

  const addToCart = useCartStore((state) => state.addToCart);

  const addProductInCart = () => {
    addToCart(product);
  };

  const viewProduct = () => {
    navigate('ProductDetail', { product });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={viewProduct}>
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

        <TouchableOpacity onPress={addProductInCart} style={styles.icon}>
          <Ionicons name='cart-outline' size={18} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
