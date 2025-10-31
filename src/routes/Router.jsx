import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../App";
import CartPage from "../pages/Cart/CartPage";
import UpdateProduct from "../pages/Products/UpdateProduct";
import AddProduct from "../pages/Products/AddProduct";
import ViewProduct from "../pages/Products/ViewProduct";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
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
            },

            {
                path: '/contact', element: <ContactPage />
            }
        ]
    }
])

export default router