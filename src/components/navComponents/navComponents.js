import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../../services/auth';
import { Button } from '../button/button';
import { navItems } from '../navItems/navItems';

export const NavComponents = () => {
  const [user] = useState(getUser());
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <>
      {user.role === 'waiter' ?
        navItems.map((item) => {
          return (
            <li key={item.id} className={item.nName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }) : null}

      <li className="btn-logout">
        <Button className="btnLogout" onClick={Logout}>
          LogOut
        </Button>
      </li>
    </>
  );
};
