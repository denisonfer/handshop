import { IProduct } from '../../screens/ProductsList/interface';

export interface IProductInCart extends IProduct {
  quantity: number;
}

export interface ICartStore {
  items: IProductInCart[];
  addToCart: (product: IProduct) => void;
  removeItem: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}
