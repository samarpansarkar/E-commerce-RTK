import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/reducers/Product.reducer";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
import Loader from "./components/Loader";
import Card from "./components/UI/Card";
import Heading from "./components/UI/Heading";
import useDebounce from "./utils/useDebouncer";

const App = () => {
  const { theme } = useOutletContext();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    dispatch(getAllProducts())
      .unwrap()
      .then(() => toast.success("Products fetched successfully!"))
      .catch((err) => toast.error("Failed to fetch products: " + err.message));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!debouncedSearch) return products;
    const lowerSearch = debouncedSearch.toLowerCase();
    return products.filter((p) =>
      Object.values(p).some((val) =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
  }, [debouncedSearch, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className={`min-h-screen transition-colors duration-300 mx-5 rounded-2xl ${theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
    >
      <Heading
        first_txt="Products"
        second_txt="List"
        description="Browse our collection of amazing products."
      />

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full max-w-md mx-auto block mb-6 px-4 py-2 rounded-xl border focus:outline-none transition-all duration-300
        ${theme === "dark"
            ? "bg-gray-800 border-gray-600 text-white placeholder-amber-400 focus:border-amber-600"
            : "bg-white border-gray-300 text-gray-800 placeholder-amber-500 focus:border-blue-500"
          }`}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
            {currentProducts.length === 0 ? (
              <h1 className="col-span-full text-center text-gray-500 text-lg">
                No Data Found
              </h1>
            ) : (
              currentProducts.map((product) => (
                <Card key={product.id} product={product} theme={theme} />
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                    ${currentPage === i + 1
                      ? theme === "dark"
                        ? "bg-amber-500 text-black"
                        : "bg-amber-600 text-white"
                      : theme === "dark"
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default App;
