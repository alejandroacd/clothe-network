
import './App.css'
// components
import Header from  './views/Header/Header'
import Login from './views/Login/Login'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import  Dashboard  from './views/Dashboard/Dashboard'

function App() {

  return (

    <>

    <Header />
    <Routes>
      <Route exact path='/' element={<Dashboard />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
