import { Button } from '../button/button';
import './menuBtn.css';

const MenuBtn = ({ onChangeMenu }) => {
  return (
    <>
      <Button
        value='client-name'
        className='btn-menu-breakfast'
        onClick={() => onChangeMenu('breakfast')}
      >
        Menu Café da Manhã
      </Button>
      <Button
        value='client-name'
        className='btn-other-menu'
        onClick={() => onChangeMenu('all-day')}
      >
        Menu do Dia
      </Button>
    </>
  );
};

export default MenuBtn;
