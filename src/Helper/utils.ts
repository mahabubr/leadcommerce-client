import { UploadProps } from "antd";

export const orderStatusColor = {
  Pending: "#3498db",
  cancelled: "#e74c3c",
  completed: "#2c3e50",
};

export type OrderStatusType = "Pending" | "cancelled" | "completed";

export const hslToHex = (hsl: any) => {
  const { h, s, v } = hsl;
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = v / 100;

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs(((hue * 6) % 2) - 1));
  const m = lightness - c / 2;

  let r, g, b;

  if (hue < 1 / 6) {
    [r, g, b] = [c, x, 0];
  } else if (hue < 2 / 6) {
    [r, g, b] = [x, c, 0];
  } else if (hue < 3 / 6) {
    [r, g, b] = [0, c, x];
  } else if (hue < 4 / 6) {
    [r, g, b] = [0, x, c];
  } else if (hue < 5 / 6) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  const rgb = [(r + m) * 255, (g + m) * 255, (b + m) * 255];

  return `#${Math.round(rgb[0]).toString(16)}${Math.round(rgb[1]).toString(
    16
  )}${Math.round(rgb[2]).toString(16)}`;
};

export const uploadProps: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
};

export const classByOrderStatus = {
  pending: "warning",
  delivered: "success",
  cancel: "error",
  paused: "cyan",
  accept: "blue",
};

export type IOrderStatus =
  | "pending"
  | "delivered"
  | "cancel"
  | "paused"
  | "accept";

export const classByPaymentStatus = {
  pending: "warning",
  canceled: "error",
  completed: "success",
};

export type IPaymentStatus = "pending" | "completed" | "canceled";
export const getDiscountedPricePercentage = (
  originalPrice: number,
  discountedPrice: number
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

export const getRandomItemsFromArray = (arr: any[], numberOfItems: any) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfItems);
};

/* TO REMOVE UNNECESSARY VALUE AFTER AT 2 POINT  */
export const fixedFloatValue = (value: string) => {
  return parseFloat(value).toFixed(2);
};

export const getDiscountDependOnPercentage = (
  originalPrice: number,
  percentage: number
) => {
  const discountPrice = (originalPrice * percentage) / 100;
  return discountPrice.toFixed(2);
};
