import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../Dashboard/Dashboard.scss'
import axios from 'axios'



const Dashboard = () => {
    const email = localStorage.getItem('email')
    const [products,setProducts] = useState([])


    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(e => setProducts(e.data.products))
        .catch(e => console.log(e))
    },[])

    return (

        <>
            {email ? <div className="dashboard container w-100">

            
                <h1> Products </h1>
                <div className='d-flex cards'>
                {products.map(x => {
                    return (
                        
                        <div className='card'>
                            <div className='img-container'>
                            <img className='card-img-top' src={x.thumbnail} />
                            </div>
                            <div className='card-body'>
                                <h1 className='card-title'> {x.title} </h1>
                                <p> {x.price}$ </p>
                                <button className='btn btn-dark'> Add to cart </button>
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