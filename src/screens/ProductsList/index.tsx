import { gql, useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { FlatList, Text, View } from 'react-native';
import Cart from '../../Components/Cart';
import { useCartStore } from '../../store/cart/useCartStore';
import ProductItem from './ProductItem';
import { styles } from './styles';

const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      image
      description
      price
    }
  }
`;

const ProductsList: React.FC = () => {
  const hasItem = useCartStore((state) => state.items.length);
  const { data } = useQuery(GET_PRODUCTS);

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          A Melhor loja da Internet, confira os produtos abaixo:
        </Text>
        {data && (
          <FlatList
            data={data.products}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            renderItem={({ item: product }) => (
              <ProductItem product={product} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      {hasItem > 0 && <Cart />}
    </Fragment>
  );
};

export default ProductsList;
