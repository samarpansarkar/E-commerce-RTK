import { Link } from "react-router-dom";
import ProductDefImg from "../../assets/ProductDefaultImg.png";
import Button from "./Button";

const Card = ({ product, theme }) => {
    return (
        <Link
            to={`product/${product.id}`}
            className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl
        ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
        >
            {/* Image Section */}
            <div className="relative overflow-hidden">
                <img
                    src={product.image ? product.image : ProductDefImg}
                    alt={product.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 md:h-64 lg:h-72"
                />

                {/* Quick Action Buttons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                    <Button title="Buy Now" />
                    <Button title="Add Cart" />

                </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-2 p-4 sm:p-3 md:p-4">
                <h2 className="truncate text-lg font-bold sm:text-base md:text-lg">
                    {product.title}
                </h2>

                <div className="flex flex-wrap justify-between items-center text-sm font-semibold sm:text-xs md:text-sm">
                    <p className="text-green-500">Price: ${product.price}</p>
                    <p
                        className={`rounded-full px-3 py-1 text-xs ${theme === "dark"
                            ? "bg-gray-800 text-gray-200"
                            : "bg-gray-100 text-gray-800"
                            }`}
                    >
                        {product.category}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
