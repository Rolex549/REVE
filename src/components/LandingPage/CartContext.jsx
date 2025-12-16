import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /* ================= CONFIG ================= */
  const GST_PERCENT = 18;          // 18% GST
  const SHIPPING_CHARGE = 50;      // flat shipping

  /* ================= CART ACTIONS ================= */

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  /* ================= CALCULATIONS (AMAZON STYLE) ================= */

  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const subtotal = cart.reduce(
      (sum, item) => sum + item.salePrice * item.quantity,
      0
    );

    const gstAmount = (subtotal * GST_PERCENT) / 100;

    const shipping = subtotal > 500 ? 0 : SHIPPING_CHARGE;

    const grandTotal = subtotal + gstAmount + shipping;

    return {
      totalItems,
      subtotal,
      gstPercent: GST_PERCENT,
      gstAmount,
      shipping,
      grandTotal,
    };
  }, [cart]);

  /* ================= PROVIDER ================= */

  return (
    <CartContext.Provider
      value={{
        /* DATA */
        cart,

        /* ACTIONS */
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,

        /* SUMMARY */
        cartSummary,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
