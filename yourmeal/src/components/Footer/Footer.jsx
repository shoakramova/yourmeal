import './footer.css'
import logo from './../../assets/icons/footerLogo.png'
import tel from './../../assets/icons/Call.png'
import vk from './../../assets/icons/vk.png'
import tg from './../../assets/icons/tg.png'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__f">
                    <div className="footer__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer__row">
                        <div className="footer__number">
                            <span className="footer__number-text">Номер для заказа</span>
                            <div className="footer__number-number">
                                <img src={tel} alt="" /> <span>+7(930)833-38-11</span>
                            </div>
                        </div>
                        <div className="footer__social">
                            <span className="footer__social-text">Мы в соцсетях</span>
                            <div>
                                <img src={vk} alt="" />
                                <img src={tg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>© YouMeal, 2022</span>
                </div>
                </div>
        </footer>
     );
}
 
export default Footer;