import React, { useState, useEffect } from 'react';
import * as Icons from 'react-icons/fa';
import loginLogo from '../../assets/images/logocinza.gif';
import './navbar.css';
import { NavComponents} from '../navComponents/navComponents';


function Navbar() {
  
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <img src={loginLogo} alt="logo" />
        <h2 className="navbar-logo">Niq's Burger</h2>
        {!mobile &&  (
          <ul className="nav-items">
         <NavComponents />
         </ul> 
        )}
        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <ul className="sidebar-items">
          <NavComponents/>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
