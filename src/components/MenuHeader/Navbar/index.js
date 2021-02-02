import s from './style.module.css'
import cn from 'classnames';

const Navbar = ({isBurgerActive, setBurgerActive}) => {
    const handleClick = () => {
        setBurgerActive(!isBurgerActive)
    }
    return(
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <button onClick={handleClick} className={cn(s.container, {[s.active]: isBurgerActive})}>
                   
                </button>
            </div>
        </nav>
    );
};

export default Navbar;