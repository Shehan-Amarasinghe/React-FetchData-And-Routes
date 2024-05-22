import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-sec'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    </div>
  )
}

export default Navbar