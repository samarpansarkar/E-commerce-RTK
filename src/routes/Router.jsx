import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import App from "../App";
import CartPage from "../pages/Cart/CartPage";
import UpdateProduct from "../pages/Products/UpdateProduct";
import AddProduct from "../pages/Products/AddProduct";
import ViewProduct from "../pages/Products/ViewProduct";


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
                path: '/update/:id', element: <UpdateProduct />
            },


            {
                path: '/cart', element: <CartPage />
            }
        ]
    }
])

export default router