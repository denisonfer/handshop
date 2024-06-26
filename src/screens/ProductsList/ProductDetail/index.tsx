import { useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { RouteProductsPropsScreens } from '../../../routes/interfaces';
import { useCartStore } from '../../../store/cart/useCartStore';
import { styles } from './styles';

const ProductDetail = () => {
  const {
    params: { product },
  } = useRoute<RouteProductsPropsScreens>();

  const { addToCart } = useCartStore();

  const handleAddProduct = useCallback(() => {
    addToCart(product);
    showMessage({
      type: 'success',
      message: 'Produto adicionado com sucesso!',
      floating: true,
    });
  }, [product]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        resizeMode='contain'
        style={styles.imageBanner}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.subtitle}>{product.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>R$ {product.price}</Text>

          <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
            <Text style={styles.textButton}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
