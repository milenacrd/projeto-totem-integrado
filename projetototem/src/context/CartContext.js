import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addUnit = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.type === 'unit' && item.productId === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.type === 'unit' && item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: `unit-${product.id}`,
          productId: product.id,
          name: product.name,
          type: 'unit',
          quantity: 1,
          unitPrice: product.price,
          image: product.image,
        },
      ];
    });
  }, []);

  const removeUnit = useCallback((product) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.type === 'unit' && item.productId === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) =>
          item.type === 'unit' ? item.quantity > 0 : true
        )
    );
  }, []);

  const getItemQuantity = useCallback(
    (productId) => {
      const item = cart.find(
        (i) => i.type === 'unit' && i.productId === productId
      );
      return item?.quantity || 0;
    },
    [cart]
  );

  const addWeightProduct = useCallback((product, weightKg) => {
    const weight = Number(weightKg);
    if (!weight || weight <= 0) return;

    setCart((prev) => [
      ...prev,
      {
        id: `weight-${Date.now()}`,
        productId: product.id,
        name: product.name,
        type: 'weight',
        weight,
        pricePerKg: product.price,
        image: product.image,
      },
    ]);
  }, []);

  const removeWeightItem = useCallback((itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);


  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => {
      if (item.type === 'unit') return sum + item.quantity;
      if (item.type === 'weight') return sum + 1;
      return sum;
    }, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => {
      if (item.type === 'unit') {
        return sum + item.quantity * item.unitPrice;
      }

      if (item.type === 'weight') {
        return sum + item.weight * item.pricePerKg;
      }

      return sum;
    }, 0);
  }, [cart]);


  const value = {
    cart,
    addUnit,
    removeUnit,
    getItemQuantity, 
    addWeightProduct,
    removeWeightItem,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
