import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import App from "../App";
import CartPage from "../pages/CartPage";

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
                path: '/cart', element: <CartPage />
            }
        ]
    }
])

export default router