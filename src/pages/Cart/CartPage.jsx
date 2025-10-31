import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCart } from '../../redux/reducers/Cart.reducer'

const CartPage = () => {
    const dispatch = useDispatch()
    const { cart = [] } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getAllCart())
    }, [dispatch])
    console.log({ cart });
    return (
        <div>CartPage</div>
    )
}

export default CartPage