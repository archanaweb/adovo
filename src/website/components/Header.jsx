import { Link } from "react-router-dom";
import logo from '../assest/images/freecash-logo.png';
import { useState } from "react";

const Header  = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className="header bg-gray-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
    <div className="wrapper flex gap-8 justify-between items-center">
        <div className="logo">
            <img src={logo} alt="Website Logo" width={200} />
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links flex gap-2">
            <li className="text-gray-400 capitalize"><Link to="/">earn</Link></li>
            <li className="text-gray-400 capitalize"><Link to="/">cashout</Link></li>
        </ul>
        </nav>
    </div>
        <div className="account flex gap-3">
                <button className="btn text-white bg-gray-700 p-2 rounded-full px-4 text-sm"><Link to='/'>Log in</Link></button>
                <button className="btn text-white border rounded-full px-3 text-sm"><Link to='/'>Sign up</Link></button>
        </div>
    {/* <div className="hamburger" onClick={toggleMenu}>
      <span>&#9776;</span>
    </div> */}
    </div>
  </header>
  );
}

export default Header;