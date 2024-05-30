import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import VariantDetail from "../components/VariantDetail";    
import RandomTest from "../components/RandomTest";
import SignIn from "../pages/SignIn";
import PrivateRoute from "../utils/PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <RandomTest />,
            },
            {
                path: "/variant/:id",
                element: <VariantDetail />,
            },
        ]
    },
    {
        path: '/login',
        element: <SignIn/>
    }
]);