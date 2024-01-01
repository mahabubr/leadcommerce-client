import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  quantity: number;
  orderQuantity: number;
  price: number;
  perProductPrice: number;
  oneQuantityPrice: number;
  image?: { avatar?: string; avatar_public_url?: string };
  productName: string;
  categories: string;
  slug: string;
  description: string;
  fullDescription: string;
  color: string[];
  size: string[];
  fullDetail: string;
  productTags: string[];
  status: "pending" | "active" | "restrict";
  store_id: string;
}

interface CartState {
  cartItems: CartItem[];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [] as CartItem[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find((p) => p._id === action.payload._id);
      if (item) {
        item.orderQuantity++;
        item.perProductPrice = item.oneQuantityPrice * item.orderQuantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          orderQuantity: 1,
          perProductPrice: action.payload.oneQuantityPrice,
        });
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ _id: string; key: string; val: any }>
    ) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p._id === action.payload._id) {
          if (action.payload.key === "orderQuantity") {
            p.perProductPrice = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (p) => p._id !== action.payload._id
      );
    },
    clearFromCart: () => {
      cartItems: [];
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
