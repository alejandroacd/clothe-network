import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {

    const token = localStorage.getItem('token')

    return (

        <>
            {token ? <div className="dashboard container h-100 w-100">

            </div> : <Navigate replace to={'/login'} />}
        </>
    )
}

export default Dashboard