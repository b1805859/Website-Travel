
import {Link} from 'react-router-dom'
import Button from '../Buttons/Button'
import {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [close, setClose] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
      if(window.innerWidth <= 960)
      {
        setButton(false);
      }
      else
      {
        setButton(true);
      }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link   to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRVL<i class="fa-brands fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                          <i className ={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                              Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                              Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                              Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                              Sign-up
                        </Link>
                      </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
