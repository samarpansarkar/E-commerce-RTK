import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import App from "../App";
import CartPage from "../pages/CartPage";
import ViewProduct from "../pages/ViewProduct";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <Error />,
        children: [
            {
                index: true, element: <App />
            },
            {
                path: '/product/:id', element: <ViewProduct />
            },
            {
                path: '/add', element: <AddProduct />
            },


            {
                path: '/cart', element: <CartPage />
            }
        ]
    }
])

export default router