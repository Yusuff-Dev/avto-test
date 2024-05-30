import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import VariantDetail from "../components/VariantDetail";
import RandomTest from "../components/RandomTest";
import SignIn from "../pages/SignIn";
import PrivateRoute from "../utils/PrivateRoute";
import App from "../App";
import Layout from "../pages/Layout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><App /></PrivateRoute>,
        errorElement: <NotFound />,
    },

    {
        path: "/test",
        element: <Layout><RandomTest /></Layout>,
    },

    {
        path: "/variants/:id",
        element: <Layout><VariantDetail /></Layout>,
    },

    {
        path: '/login',
        element: <SignIn />
    }
])