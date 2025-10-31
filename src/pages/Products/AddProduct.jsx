import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { useDispatch } from 'react-redux'
import { createProductLocal } from '../../redux/sclices/Product.slice'
import { createProductAPI } from '../../redux/reducers/Product.reducer'
import { toast } from 'react-toastify'
import Heading from '../../components/UI/Heading'

const AddProduct = () => {
    const { theme } = useOutletContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log(formData);
        dispatch(createProductLocal(formData))
        try {

            dispatch(createProductAPI(formData))
            toast.success("Product added successfully!!!")
            navigate("/")
        } catch (error) {
            toast.error("Something went wrong in adding product!!", error.message);
        }
    }
    return (
        <section className={`py-2  transition-colors rounded-2xl ${theme === "dark" ? "bg-gray-900" : "bg-slate-0"}`}>
            <div className="max-w-6xl mx-auto px-4  flex flex-col justify-center items-center fle sm:px-6 lg:px-8">
                <Heading first_txt="Add" second_txt="Product" description="Fill in the details below to add a new product." />
                <form onSubmit={formHandler} className="px-6 py-8 rounded shadow-2xl flex flex-col justify-between items-center md:w-xl gap-2">
                    <div className='md:flex gap-2'>
                        <Input placeholder="Product Name" name="title" value={formData.title} onChange={inputHandler} />
                        <Input placeholder="Price" name="price" value={formData.price} onChange={inputHandler} />
                    </div>
                    <div className='md:flex gap-2'>
                        <Input placeholder="Category" name="category" value={formData.category} onChange={inputHandler} />
                        <Input placeholder="Description" name="description" value={formData.description} onChange={inputHandler} />
                    </div>
                    <Input placeholder="ImageURL" name="image" value={formData.image} onChange={inputHandler} />
                    <Button title="Add Product" color="green" type="submit" className='mt-5' />
                </form>
            </div>
        </section>
    )
}

export default AddProduct