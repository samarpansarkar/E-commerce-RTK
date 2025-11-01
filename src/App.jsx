import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./redux/reducers/Product.reducer";
import { TEXT } from "./constants/Constants";
import Loader from "./components/Loader";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "./components/UI/Card";
import Heading from "./components/UI/Heading";
import useDebounce from "./utils/useDebouncer";

const App = () => {
  const { theme } = useOutletContext();
  const dispatch = useDispatch();
  const { products, isLoading, isError, errorMsg } = useSelector(state => state.products);

  console.log({ products, isLoading, isError, errorMsg });

  useEffect(() => {
    dispatch(getAllProducts()).unwrap().then(() => {
      toast.success("Products fetched successfully!")
    }).catch((err) => {
      toast.error("Failed to fetch products: " + err.message)
    });
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 2000);

  const filteredProducts = useMemo(() => {
    if (!debouncedSearch) return products;

    const lowerSearch = debouncedSearch.toLowerCase();

    return products.filter((p) =>
      Object.values(p).some((val) =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
  }, [debouncedSearch, products]);


  return (
    <section
      className={`
        min-h-screen transition-colors duration-300 mx-5 rounded-2xl
        ${theme === "dark" ? "bg-gray-900" : "bg-slate-0"}`}

    >
      <Heading first_txt="Products" second_txt="List" description="Browse our collection of amazing products. " />
      <input type="text" placeholder="Search contact" onChange={(e) => setSearch(e.target.value)} className={`w-full max-w-md mx-auto block mb-6 px-4 py-2 rounded-xl border focus:outline-none
    transition-all duration-300
    ${theme === "dark"
          ? "bg-gray-800 border-gray-600 text-white placeholder-amber-400 focus:border-amber-600 "
          : "bg-white border-gray-300 text-gray-800 placeholder-amber-500 focus:border-blue-500"
        }`} />
      {isLoading ? <Loader /> : <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto      
  "
      >
        {filteredProducts.length == 0 && <h1 className="col-span-full text-center text-gray-500 text-lg">
          No Data Found
        </h1>}
        {filteredProducts.map(product => <Card product={product} key={product.id} theme={theme} />)}
      </div>}
    </section >
  )
}

export default App