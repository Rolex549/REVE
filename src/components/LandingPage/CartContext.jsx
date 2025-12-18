import { createContext, useContext, useMemo, useState } from "react";

/* ================= CONTEXT ================= */
const CartContext = createContext(null);

/* ================= PROVIDER ================= */
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /* ================= CONFIG ================= */
  const GST_PERCENT = 18;     // 18% GST
  const SHIPPING_CHARGE = 50; // Flat shipping

  /* ================= CART ACTIONS ================= */

  // ➕ Add to cart
  const addToCart = (product) => {
    if (!product?.id) return;

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

  // ❌ Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ➕ Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease quantity (minimum 1)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // 🧹 Clear cart (after order success)
  const clearCart = () => {
    setCart([]);
  };

  /* ================= CALCULATIONS (AMAZON STYLE) ================= */

  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );

    const subtotal = cart.reduce(
      (sum, item) =>
        sum + (item.salePrice || 0) * (item.quantity || 1),
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

  /* ================= CONTEXT VALUE ================= */
  const value = {
    // DATA
    cart,

    // ACTIONS
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,

    // SUMMARY
    cartSummary,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/* ================= HOOK ================= */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
