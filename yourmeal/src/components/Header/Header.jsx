import './header.css'
import logo from './../../assets/header/logo.png'
import burger from './../../assets/header/main-burger.png'
import bur320 from './../../assets/header/bur-320.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="header__contend">
                <div className="header__img">
                <picture>
                    <source srcSet={bur320} media='(max-width: 574px)'/>
                    <img src={burger} alt="" />
                </picture>
                </div>
                <div className="header__title">
                    <div>
                        <span className="header_titlet-white">Только самые</span>
                        <span className="header__title-orange">сочные бургеры!</span>
                    </div>
                    <span className="header__subtitle">Бесплатная доставка от 599₽</span>
                </div>
            </div>
        </header>
     );
}
 
export default Header;