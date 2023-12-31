import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  quantity: number;
  price: number;
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
      // console.log(state, action);
      const item = state.cartItems.find((p) => p._id === action.payload._id);
      if (item) {
        item.quantity++;
        item.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ _id: string; key: string; val: any }>
    ) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p._id === action.payload._id) {
          if (action.payload.key === "quantity") {
            p.price = p.oneQuantityPrice * action.payload.val;
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
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
