import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./redux/reducers/Product.reducer";
import { TEXT } from "./constants/Constants";
import Loader from "./components/Loader";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "./components/UI/Card";
import Heading from "./components/UI/Heading";

const App = () => {
  const { theme } = useOutletContext();
  const dispatch = useDispatch()
  const { products, isLoading, isError, errorMsg } = useSelector(state => state.products);

  console.log({ products, isLoading, isError, errorMsg });

  useEffect(() => {
    dispatch(getAllProducts()).then(() => {
      toast.success("Products fetched successfully!")
    }).catch((err) => {
      toast.error("Failed to fetch products: " + err.message)
    });
  }, [dispatch])

  return (
    <section
      className={`
        min-h-screen transition-colors duration-300 mx-5 rounded-2xl
        ${theme === "dark" ? "bg-gray-900" : "bg-slate-0"}`}

    >
      {/* <h1 className='text-center text-3xl font-bold underline'>{TEXT.APP_HEADING}</h1> */}
      <Heading first_txt="Products" second_txt="List" description="Browse our collection of amazing products. " />
      {isLoading ? <Loader /> : <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto      
  "
      >
        {products.length == 0 && <h1 className="col-span-full text-center text-gray-500 text-lg">
          No Data Found
        </h1>}
        {products.map(product => <Card product={product} key={product.id} theme={theme} />)}
      </div>}
    </section >
  )
}

export default App