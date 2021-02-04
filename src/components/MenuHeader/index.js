import {useState} from 'react'
import Navbar from './Navbar'
import Menu from './Menu'

const MenuHeader = ({onMenuHeaderClick}) => {
    const [isActive,setActive] = useState(false)
    const onMenuClick = (page) => {
        onMenuHeaderClick && onMenuHeaderClick(page)
    }
    return(
        <>
        <Menu isMenuActive={isActive} setMenuActive={setActive} onMenuClick={onMenuClick}/>
        <Navbar isBurgerActive={isActive} setBurgerActive={setActive}/>
        </>
    );
};

export default MenuHeader;