import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
  const getTokenFromLS = JSON.parse(localStorage.getItem("customer"));
  return getTokenFromLS?.token === undefined ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
