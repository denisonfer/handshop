import { StateCreator, create } from 'zustand';
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from '../storage';
import { ICartStore } from './interfaces';

type MyPersist = (
  config: StateCreator<ICartStore>,
  options: PersistOptions<ICartStore>
) => StateCreator<ICartStore>;

export const useCartStore = create<ICartStore>(
  (persist as MyPersist)(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id
          );

          if (existingItemIndex !== -1) {
            // Se o produto já estiver no carrinho, aumenta a quantidade
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += 1;
            return { items: updatedItems };
          }

          // Se o produto não estiver no carrinho, adiciona com quantidade 1
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items
            .map((p) =>
              p.id === itemId ? { ...p, quantity: p.quantity - 1 } : p
            )
            .filter((p) => p.quantity > 0),
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: '@cartStore',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
