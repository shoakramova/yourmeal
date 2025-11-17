import './homePage.css'
import vok from './../assets/icons/Вок.png'
import burger from './../assets/icons/Бургеры.png'
import snack from './../assets/icons/Закуски.png'
import hotDog from './../assets/icons/Хот-доги.png'
import kombo from './../assets/icons/Комбо.png'
import shaurma from './../assets/icons/Шаурма.png'
import pizza from './../assets/icons/Пицца.svg'
import desert from './../assets/icons/Десерты.png'
import souce from './../assets/icons/Соусы.png'
import Header from '../components/Header/header';
import Main from '../components/main/Main'
import Footer from '../components/Footer/Footer';
import { Link, useLocation  } from 'react-router-dom';

const data = {
   "burger": { img: burger, name: 'Бургеры' },
   "snack": { img: snack, name: 'Закуски' },
   "hotDog": { img: hotDog, name: 'Хот-доги' },
   "kombo": { img: kombo, name: 'Комбо' },
   "shaurma": { img: shaurma, name: 'Шаурма' },
   "pizza": { img: pizza, name: 'Пицца' },
   "vok": { img: vok, name: 'Вок' },
   "desert": { img: desert, name: 'Десерты' },
   "souce": { img: souce, name: 'Соусы' },
};

const HomePage = () => {
    const location = useLocation()

    return (
        <div className="home">
            <Header />
            <section className="navigation">
                {Object.entries(data).map(([key, item], index) => (
                    <Link 
                        className={`navigation__item ${ ((!location.search && index == 0) || location.search.startsWith(`?product=${key}`)) ? 'active' : ''}`} 
                        key={key}
                        to={`?product=${key}`}
                    >
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </section>
            <Main />
            <Footer />
        </div>
    );
}

export default HomePage;
