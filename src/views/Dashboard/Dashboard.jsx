import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../Dashboard/Dashboard.scss'
import axios from 'axios'
import { addProductToCart, removeProductOfCart } from '../../reducers/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'



const Dashboard = () => {
    const email = localStorage.getItem('email')
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const { productsList } = useSelector(state => state.cart)
 
    const add = (productId) => {
        const product = products.find(product => product.id === productId)
        console.log(productsList)

        if(productsList.find(p => p.id === productId)){
            dispatch(removeProductOfCart(productId))
        } else {
            dispatch(addProductToCart(product))
        }
    }
     
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(e => setProducts(e.data.products))
            .catch(e => console.log(e))
    }, [email])

    return (

        <>
            {email ? <div className="dashboard container w-100">


                <h1 className='dashboard_title'> Products </h1>
                <div className='d-flex cards'>
                    {products.map(product => {
                        return (

                            <div key={product.id} className='card'>
                                <div className='img-container'>
                                    <img className='card-img-top' src={product.thumbnail} />
                                </div>
                                <div className='card-body'>
                                    <h1 className='card-title'> {product.title} </h1>
                                    <p> {product.price}$ </p>
                                    <button onClick={() => add(product.id)} className='btn btn-dark'> {productsList.find(x => x.id === product.id) ? "REMOVE FROM CART" : "ADD TO CART"} </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> : <Navigate replace to={'/login'} />}
        </>
    )
}

export default Dashboard