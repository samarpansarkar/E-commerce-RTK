import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { deleteProductAPI, productInfo } from "../redux/reducers/Product.reducer";
import Button from "../components/UI/Button";
import { deleteProductLocal } from "../redux/sclices/Product.slice";
import { toast } from "react-toastify";

const ViewProduct = () => {
    const { theme } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product = {}, isLoading, isError, errorMsg } = useSelector(state => state.products);

    console.log({ product, isLoading, isError, errorMsg });
    useEffect(() => {
        dispatch(productInfo(id))
    }, [id, dispatch])

    const deleteHandler = () => {
        dispatch(deleteProductLocal(id));
        try {
            dispatch(deleteProductAPI(id));
            toast.success("Product deleted successfully!!!")
            navigate("/")
        } catch (error) {
            toast.error("Something went wrong in deleting product!!", error.message);
        }
    }


    return (
        <div className={`py-8  transition-colors ${theme === " dark" ? "bg-slate-600 text - gray - 100" : "bg - white text - gray - 900"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                            <img className="w-full h-full object-cover" src={product.image} alt="Product Image" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center -mx-2  mb-4 gap-3">
                            <Button title="DELETE" onClick={deleteHandler} />
                            <Button title="UPDATE" onClick={() => navigate(`/update/${id}`)} />
                            <Button title="ADD CART" />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                        <p className=" text-sm mb-4">
                            {product.category}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold ">Price:</span>
                                <span >$ {product.price}</span>
                            </div>
                            <div>
                                <span className="font-bold">Availability:</span>
                                <span >In Stock</span>
                            </div>
                        </div>
                        {product.category == "Fashion" && <><div className="mb-4">
                            <span className="font-bold">Select Color:</span>
                            <div className="flex items-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                            </div>
                        </div>
                            <div className="mb-4">
                                <span className="font-bold">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                </div>
                            </div></>}
                        <div>
                            <span className="font-bold ">Product Description:</span>
                            <p className=" text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewProduct;
