import { Link } from "react-router-dom";
import logo from '../assest/images/freecash-logo.png';
import { useState } from "react";

const Header  = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className="header bg-gray-900 md:py-4 p-2">
     <div className="header-wrapper"> 
    <div className="container mx-auto flex justify-between items-center">
    <div className="wrapper flex md:gap-8 gap-4 justify-between items-center">
        <div className="logo">
           <Link to='/'> <img src={logo} alt="Website Logo" width={200} /></Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links flex gap-2">
            <li className="text-gray-400 capitalize"><Link to="/">earn</Link></li>
            <li className="text-gray-400 capitalize"><Link to="/">cashout</Link></li>
        </ul>
        </nav>
    </div>
        <div className="account flex md:gap-3 gap-2">
        <Link to='/'> <button className="btn text-white bg-gray-700 p-2 rounded-full md:px-4 px-3 text-sm">Log in</button></Link>
                <Link to='/signup'> <button className="btn text-white border rounded-full md:px-3 text-sm p-2">Sign up</button></Link>
        </div>
    {/* <div className="hamburger" onClick={toggleMenu}>
      <span>&#9776;</span>
    </div> */}
    </div>
    </div>
  </header>
  );
}

export default Header;