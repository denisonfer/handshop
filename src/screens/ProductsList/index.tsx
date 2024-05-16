import React, { Fragment } from 'react';
import { FlatList, Text, View } from 'react-native';
import Cart from '../../Components/Cart';
import { useCartStore } from '../../store/cart/useCartStore';
import ProductItem from './ProductItem';
import { IProduct } from './interface';
import { styles } from './styles';

const ProductsList: React.FC = () => {
  const hasItem = useCartStore((state) => state.items.length);
  const productsData: IProduct[] = [
    {
      id: 1,
      title: 'Sapato Social',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 159.99,
    },
    {
      id: 2,
      title: 'Sapato preto',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 129.99,
    },
    {
      id: 3,
      title: 'Sapato brilhoso',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 119.99,
    },
    {
      id: 4,
      title: 'Sapato Social Masc.',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 99.99,
    },
    {
      id: 5,
      title: 'Sapato Social Fem.',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 1299.99,
    },
    {
      id: 6,
      title: 'Sapato',
      image: 'https://espacovivere.com.br/images/products/AM0210_2.png',
      description: 'Sapato top de couro',
      price: 109.99,
    },
  ];
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          A Melhor loja da Internet, confira os produtos abaixo:
        </Text>
        <FlatList
          data={productsData}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          renderItem={({ item: product }) => <ProductItem product={product} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {hasItem > 0 && <Cart />}
    </Fragment>
  );
};

export default ProductsList;
