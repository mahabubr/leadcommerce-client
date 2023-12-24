import { jwtDecode } from "jwt-decode";

const decodedToken = (token: string) => {
  if (token) return jwtDecode(token);
};

export default decodedToken;
