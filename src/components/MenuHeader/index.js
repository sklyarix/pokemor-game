import {useState} from 'react'
import Navbar from './Navbar'
import Menu from './Menu'

const MenuHeader = ({bgActive}) => {
    const [isActive,setActive] = useState(null)
    
    const onMenuClick = (page) => {
        setActive(prevState => !prevState);
    }
    return(
        <>
        <Menu isActive={isActive} />
        <Navbar isBurgerActive={isActive} bgActive={bgActive} onMenuClick={onMenuClick}/>
        </>
    );
};

export default MenuHeader;