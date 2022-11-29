import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='main'>
        <div className='navbar'>
          <h1 className='navbar-brand'>Crypto Tracker</h1>
          <p className='navbar-version'>version 1.0.0</p>
        </div>
      </div>
    </Link>
  )
}

export default Navbar