import { memo } from "react";
import ProductDefImg from "../../assets/ProductDefaultImg.png";
import Button from "./Button";

const Card = ({ product, theme, onAddToCart, onViewDetails }) => {

    const handleView = () => onViewDetails(product.id);
    const handleAdd = () => onAddToCart(product);

    return (
        <section
            className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl border-2
        ${theme === "dark" ? "bg-gray-900 border-gray-300 text-gray-100" : "bg-white border-gray-500 text-gray-900"}`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={product.image ? product.image : ProductDefImg}
                    alt={product.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-40 md:h-52 lg:h-64"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-1">

                    <Button title="View" onClick={handleView} />
                    <Button title="Add Cart" onClick={handleAdd} />

                </div>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-3 md:p-4">
                <h2 className="truncate text-lg font-bold sm:text-base md:text-lg">
                    {product?.title}
                </h2>

                <div className="flex flex-wrap justify-between items-center text-sm font-semibold sm:text-xs md:text-sm">
                    <p className="text-green-500">Price: ${product?.price}</p>
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
        </section>
    );
};

export default memo(Card);
