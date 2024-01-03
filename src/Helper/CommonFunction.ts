import { IParamState } from "@/app/(dashboard)/employees/list/list.type";
import { OrderStatusType, orderStatusColor } from "./utils";

export const find_text_color = (status: OrderStatusType): string => {
  return orderStatusColor[status] as string;
};

export function debounce(func: any, delay: any) {
  let timeoutId: any;

  return function (...args: any) {
    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

export const removeNullishValue = (obj: IParamState) => {
  Object.keys(obj).forEach((item) => {
    if (!obj[item]) {
      delete obj[item];
    }
  });
  return obj;
};

export const calculatePercentage = (num: number, percent: number): number => {
  return parseInt(((num * percent) / 100).toString());
};

export const sliceString = (str: string, length: number) => {
  if (!str) return "";
  else if (str.length < length) return str;
  else return str.slice(0, length) + "...";
};
