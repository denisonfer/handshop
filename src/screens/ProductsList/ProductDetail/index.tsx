import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProductsPropsScreens } from '../../../routes/interfaces';
import { useCartStore } from '../../../store/cart/useCartStore';

const ProductDetail = () => {
  const {
    params: { product },
  } = useRoute<RouteProductsPropsScreens>();

  const { addToCart } = useCartStore.getState();

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

          <TouchableOpacity
            style={styles.button}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.textButton}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageBanner: {
    width: '100%',
    height: 350,
  },
  content: {
    flex: 1,
    backgroundColor: '#e6ebf2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 36,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
  },
  footer: {
    marginTop: 180,
  },
  price: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 36,
  },
  button: {
    backgroundColor: '#091D3B',
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textButton: {
    color: 'white',
    fontWeight: '300',
  },
});

export default ProductDetail;
