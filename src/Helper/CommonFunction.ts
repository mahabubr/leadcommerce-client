import { IParamState } from "@/app/(dashboard)/admin/employees/list.type";
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

type ImonthShort =
  | "JAN"
  | "FEB"
  | "MAR"
  | "APR"
  | "MAY"
  | "JUNE"
  | "JULAY"
  | "AUG"
  | "SEPT"
  | "OCT"
  | "NOV"
  | "DEC";
export const MonthNameToNumber = (str: ImonthShort) => {
  const monthOBJ = {
    JAN: 1,
    FEB: 2,
    MAR: 3,
    APR: 4,
    MAY: 5,
    JUNE: 6,
    JULAY: 7,
    AUG: 8,
    SEPT: 9,
    OCT: 10,
    NOV: 11,
    DEC: 12,
  };

  return monthOBJ[str] ? monthOBJ[str] : 0;
};
