import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../reducers/user/userSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const email = localStorage.getItem('email')

    useEffect(() => {
    },[])

    return (

        <>
            {email ? <div className="dashboard container h-100 w-100">

            </div> : <Navigate replace to={'/login'} />}
        </>
    )
}

export default Dashboard