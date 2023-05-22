import { useEffect, useState,Suspense } from 'react'
import './App.css'
import axios from 'axios'
// components
import Header from  './views/Header/Header'
import Login from './views/Login/Login'


function App() {

  const [data,setData] = useState({})

  const dataToUser = (d) => {
    setData(d)
  }
  
  useEffect(() => {

    axios.get('https://dummyjson.com/users/20')
    .then(res => {
      dataToUser(res.data)
      console.log(data)
      
    })
    .catch((e) => {
      console.log(e)
    })
  },[])


  return (

    <>

    <Header />
    <Login />
    </>
  )
}

export default App
