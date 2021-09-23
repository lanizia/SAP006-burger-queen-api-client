import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import loginLogo from '../../assets/images/logocinza.gif';
import { Button } from '../button/button.js'
import { Logout } from '../../services/auth.js'
import { navItems } from '../menuItems/menuItens.js';
import './navbar.css';

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
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='btn-logout'>
              <Button className='btnLogout' onClick={() => Logout()}>LogOut
              </Button> 
            </li>
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
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.sName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Navbar;
