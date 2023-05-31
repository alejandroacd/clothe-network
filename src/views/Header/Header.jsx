import '../Header/Header.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { unsetUser } from '../../reducers/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector  } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('email')
  const { totalCount } = useSelector(state => state.cart)


  const logout = () => {
    dispatch(unsetUser())
    navigate('/login')
    localStorage.clear()

  }

  return (
    <header className='shadow'>
      <h1 > online shopping </h1>

      <div className={isLoggedIn ? 'options_menu' : 'd-none'} >
         {totalCount} <AiOutlineShoppingCart size={25} />
        <BiLogOut onClick={logout}  size={25} />
      </div>
    </header>
  )
}

export default Header