import { Navigate, Outlet } from "react-router-dom";
import { useCustomContext } from "../context/TestContext";

const PrivateRoute = () => {
  const { isLoggedin } = useCustomContext();
  
  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;