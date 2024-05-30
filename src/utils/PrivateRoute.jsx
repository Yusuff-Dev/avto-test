import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
  const { isLoggedin } = useAuth();
  return isLoggedin ? children : <Navigate to="/login" replace={true}/>;
};

export default PrivateRoute;