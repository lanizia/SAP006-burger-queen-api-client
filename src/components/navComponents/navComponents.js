import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../../services/auth';
import { Button } from '../button/button';
import { navItems } from '../navItems/navItems';

export const NavComponents = () => {
  const [user, setUser] = useState();
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  useEffect(() => {
    setUser(getUser());
  }, []);

  if (user?.role === 'waiter') {
    return (
      <>
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
          <Button className='btnLogout' onClick={Logout}>
            LogOut
          </Button>
        </li>
      </>
    );
  }
  return (
    <>
      <ul className='nav-items'>
        <li className='btn-logout'>
          <Button className='btnLogout' onClick={Logout}>
            LogOut
          </Button>
        </li>
      </ul>
    </>
  );
};
