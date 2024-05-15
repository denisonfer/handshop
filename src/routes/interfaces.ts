import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IProduct } from '../screens/ProductsList/interface';

export type ProductStackParamList = {
  Products: undefined;
  ProductDetail: { product: IProduct };
  Cart: undefined;
};

export type PropsProductsScreens =
  NativeStackNavigationProp<ProductStackParamList>;
export type RouteProductsPropsScreens = RouteProp<
  ProductStackParamList,
  'ProductDetail'
>;
