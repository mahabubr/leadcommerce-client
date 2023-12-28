export interface DataType {
  _id: string;
  image: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
}

export type IProps = {
  data: DataType[];
  isLoading: boolean;
};

export interface IParamState {
  [key: string]: string | number;
}

export const queryData_init = {
  limit: 10,
};
