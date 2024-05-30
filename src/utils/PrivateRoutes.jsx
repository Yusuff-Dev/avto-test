import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({element}) => {
  const { isLoggedin } = useAuth();
  const location = useLocation();

  return isLoggedin ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
