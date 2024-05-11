import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLS = JSON.parse(localStorage.getItem("customer"));
  return getTokenFromLS?.token !== undefined ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
