import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItemAPI, getAllCart, updateCartQuantityAPI } from "../../redux/reducers/Cart.reducer";
import Heading from "../../components/UI/Heading";
import { useOutletContext } from "react-router-dom";
import Button from "../../components/UI/Button";
import { toast } from "react-toastify";
import { decrementQuantity, deleteProductLocal, incrementQuantity, } from "../../redux/sclices/Cart.slice";

const CartPage = () => {
    const { theme } = useOutletContext();
    const dispatch = useDispatch();
    const { cart = [] } = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getAllCart()).then(() => {
            toast.success("Cart items fetched successfully!");
        }).catch((error) => {
            toast.error("Failed to fetch cart items:", error);
        });
    }, [dispatch]);

    const deleteHandle = (id) => {
        dispatch(deleteProductLocal(id));
        dispatch(deleteCartItemAPI(id)).then(() => {
            toast.success("Item removed from cart successfully!");
        }).catch((error) => {
            toast.error("Failed to remove item from cart:", error);
        });
    }

    return (
        <section className={`min-h-screen rounded-2xl ${theme === "dark" ? "bg-gray-900" : "bg-slate-0"} py-10 px-4 transition-colors duration-300`}>
            <Heading first_txt="Your Shopping " second_txt="Cart" description="Review the items in your cart before proceeding to checkout." />

            {cart.length === 0 ? (
                <p className="text-center ">
                    Your cart is empty.
                </p>
            ) : (
                <div className="max-w-5xl mx-auto  rounded-lg shadow-md divide-y ">
                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 gap-4 sm:gap-6"
                        >
                            {/* Image */}
                            <img
                                src={item?.product?.image}
                                alt={item?.product?.title}
                                className="w-28 h-28 object-contain rounded-lg  dark:bg-gray-700"
                            />

                            {/* Product Details */}
                            <div className="flex-1 text-center sm:text-left">
                                <h2 className="text-lg font-medium">
                                    {item?.product?.title}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                    {item?.product?.description}
                                </p>
                                <span className="block mt-2 text-xl font-semibold ">
                                    ₹{item?.product?.price}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <button onClick={() => {
                                        dispatch(
                                            updateCartQuantityAPI({
                                                cartId: item.id,
                                                quantity: item.quantity - 1,
                                            })
                                        ), dispatch(decrementQuantity(item?.product?.id))
                                    }} className="px-3 py-1 cursor-pointer">
                                        −
                                    </button>
                                    <span className="px-4  ">
                                        {item?.quantity || 1}
                                    </span>
                                    <button onClick={() => {
                                        dispatch(incrementQuantity(item?.product?.id)), dispatch(
                                            updateCartQuantityAPI({
                                                cartId: item.id,
                                                quantity: item.quantity + 1,
                                            })
                                        )
                                    }} className="px-3 py-1 cursor-pointer">
                                        +
                                    </button>
                                </div>
                                <Button title="Remove" onClick={() => deleteHandle(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CartPage;
