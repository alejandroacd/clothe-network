import '../Login/Login.scss'
import { useRef } from 'react'
import { useEffect, useState } from 'react';
import getUsers from '../../utils/getUsers'

const Login = () => {

    const modalRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,setError] = useState()
    const [users, setUsers] = useState([])

    const showModal = (e) => {
        e.preventDefault()
       modalRef.current.style.opacity = "1";
       modalRef.current.style.pointerEvents = 'auto'
    }

    const closeModal = (e) => {
        e.preventDefault()
        modalRef.current.style.opacity = "0"
        modalRef.current.style.pointerEvents = 'none'
    }
    const validate = (e,email,password) => {
       
        e.preventDefault()
        const isValidEmail = users.find(user => email === user.email)
        const isValidPassword = users.find(user => password === user.password)

        if(!isValidEmail && !isValidPassword) {
            setError('Some of the data provided is incorrectly')
        }
        else if(isValidEmail && isValidPassword){
            setError('')
            console.log('Log in successful :)')
        }
    }


    useEffect(() => {
        getUsers()
        .then(res => setUsers(res.data.users))
        .catch(e => console.log(e))
    },[])

    useEffect(() => {
        console.log(users)
    },[users])

  
    return (
        <div className="login_card container d-flex justify-content-center mt-5">

            <div ref={modalRef} className='modal_bg'>
            
              <div className='modal-box container'>
              <span onClick={closeModal}> x </span>
                <h1> ¿How to login? </h1>
                <p> The database of users is an JSON object provided by https://dummyjson.com/users?limit=10</p>
                <br />
                <p> <b> For example, you can try with: </b> </p> <br/>

                <p> <b> Email: </b>  hbingley1@plala.or.jp </p>
                <p> <b> Password:  </b> CQutx25i8r </p>
                <br/>
                <button onClick={closeModal} className='btn btn-outline-dark w-50'> Volver</button>
              </div>
            </div>


            <form>
                <h1>
                   Login
                </h1>

                {error ? <div className='text-danger text-center mb-3'> {error}  </div> : null}

                <label htmlFor="email">Email: </label>
                <input ref={emailRef} name="email" type='email' />
                <br />
                <label htmlFor="username">Password: </label>
                <input ref={passwordRef}  name="password" type='password' />

                <br/>
                <br />
                <button onClick={(e) => validate(e,emailRef.current.value,passwordRef.current.value)} className='btn btn-success mb-2' type='button'> LOG IN </button>
                <button onClick={showModal} className='btn btn-outline-danger'> ¿How to login? </button>
            </form>
        </div>
    )
}

export default Login