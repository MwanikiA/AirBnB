import { Link } from 'react-router-dom';
import Logo from '../../assets/bnblogo.jpg'
import './nav.css'



const NavBar = ()=>{
    return(
        <nav>
            <div className='navlines'>
                <div></div>
                <div></div>
            </div>

 
            <div className='logo'>
                  <Link to={'/'}>
                  <img src= {Logo} alt='logo'/>
                  </Link>
            </div>


               
            <div className='about'>
            <Link to={'/favorites'}>
                  FAVORITES
            </Link>
                <a> ABOUT </a>
            </div>
        </nav>
    )
}

export default NavBar; 

