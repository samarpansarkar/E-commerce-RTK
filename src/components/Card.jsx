import ProductDefImg from '../assets/ProductDefaultImg.png'
import { Link } from 'react-router-dom'

const Card = ({ product, theme }) => {
    return (
        <Link className={`rounded-lg shadow-md p-4 transition-colors ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}>
            <img src={product.image ? product.image : ProductDefImg} alt={product.title} className='h-[250px] w-full' />
            <h1 className='text-xl font-bold'>{product.title}</h1>
            {/* <div className='w-32 border rounded-md flex items-center justify-center font-semibold bg-white'>
                    <button onClick={() => setCount(count + 1)} className='w-4/12 bg-green-600 p-2 flex justify-center items-center'>+</button>
                    <p className='w-4/12 text-center '>{count}</p>
                    <button onClick={() => setCount(count > 0 ? count - 1 : count)} className='w-4/12 bg-red-500 p-2 flex justify-center items-center'>-</button>
                    </div> */}
            <div className='flex gap-3 justify-between items-center font-semibold'>
                <button className='bg-blue-500 rounded p-2 w-6/12'>Buy</button>
                <button className='bg-amber-500 rounded p-2 w-6/12'>cart</button>
            </div>
            <div className='flex gap-2 justify-around font-semibold p-2'>
                <p className='text-green-500'>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
            </div>

        </Link>
    )
}

export default Card