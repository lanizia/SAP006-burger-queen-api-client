import { Button } from '../button/button';
import './menu-btn.css'

const MenuBtn = () => {
    return (
        <>
        <Button
        value='client-name'
        className='btn-menu-breakfast'>
            Menu Café da Manhã
        </Button>
        <Button
        value='client-name'
        className='btn-other-menu'>
            Menu do Dia
        </Button>
        </>
    )
}

export default MenuBtn;