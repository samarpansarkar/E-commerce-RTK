import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { productInfo, updateProductAPI } from '../../redux/reducers/Product.reducer'
import { toast } from 'react-toastify'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Loader from '../../components/Loader'
import Error from '../../components/ErrorPage'
import SelectOption from '../../components/UI/SelectOption'

const UpdateProduct = () => {
    const { id } = useParams();
    const { theme } = useOutletContext()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    })
    const { product = {}, isLoading, isError, errorMsg } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(productInfo(id)).then(() => {
            toast.success("Product details fetched successfully")
        }).catch((err) => {
            toast.error("Error in fetching product details", err.message)
        })
    }, [dispatch, id])

    useEffect(() => {
        if (product) {
            setFormData(product)
        }
    }, [product])

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <Error message={errorMsg} />
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const formHandler = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateProductAPI({ id, formData })).unwrap();
            toast.success("Product updated successfully");
            navigate(`/product/${id}`);
        } catch (error) {
            toast.error(`Error updating product: ${error.message}`);
        }
    }
    return (
        <section className={`py-2  transition-colors ${theme === " dark" ? "bg - gray - 800 text - gray - 100" : "bg - white text - gray - 900"}`}>
            <div className="max-w-6xl mx-auto px-4  flex flex-col justify-center items-center fle sm:px-6 lg:px-8">
                <h1 className='text-center text-xl font-semibold mb-3'>Update Product</h1>
                <form onSubmit={formHandler} className={`px-6 py-8 rounded shadow-2xl flex flex-col justify-between items-center md:w-xl gap-2`}>
                    <div className='md:flex gap-2'>
                        <Input placeholder="Product Name" name="title" value={formData.title} onChange={inputHandler} />
                        <Input placeholder="Price" name="price" value={formData.price} onChange={inputHandler} />
                    </div>
                    <div className='md:flex gap-2'>
                        <SelectOption state={formData.category} setState={(value) => setFormData({ ...formData, category: value })} />
                        <Input placeholder="Description" name="description" value={formData.description} onChange={inputHandler} />
                    </div>
                    <Input placeholder="ImageURL" name="image" value={formData.image} onChange={inputHandler} />
                    <Button title="Update Product" color="green" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default UpdateProduct