import s from './style.module.css'
import cn from 'classnames';



const Menu = ({isMenuActive,setMenuActive,onMenuClick}) => {
    const onClick = (page) => {
        setMenuActive(!isMenuActive)
        onMenuClick && onMenuClick(page)
    }

    return(
        <div classname={cn(s.menuContainer, {[s.active]: isMenuActive}, {[s.deactive]: !isMenuActive})}>
            <div classname={s.overlay} />
            <div classname={s.menuItems}>
                <ul>
                        <a href={'/welcome'} onClick={() => onClick('app')}> 
                            HOME
                        </a>
                    <li>
                        <a href={'/game'}  onClick={() => onClick('game')}>
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href={'/about'} onClick={() => onClick('about')}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href={'/contact'} onClick={() => onClick('contact')}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
      </div>
    );
};

export default Menu;