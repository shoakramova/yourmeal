import './main.css'
import Basket from '../../feauters/Basket/Basket'
import Card from '../../feauters/Card/Card'
import { useLoaderData, useSearchParams } from 'react-router-dom'

const categoryTitles = {
    burger: 'Бургеры',
    snack: 'Закуски',
    hotDog: 'Хот-доги',
    kombo: 'Комбо',
    shaurma: 'Шаурма',
    pizza: 'Пицца',
    vok: 'Вок',
    desert: 'Десерты',
    souce: 'Соусы',
};

const Main = () => {
    const items = useLoaderData();
    const [searchParams] = useSearchParams();
    const product = searchParams.get("product") || "burger";
    const title = categoryTitles[product] || 'Меню'; 

    return ( 
        <main className='main'>
            <div className="container">
                <div className="main__contend">
                    <div className="main__basket">
                        <Basket />
                    </div>
                    <div className="main__cards-and-title">
                        <h3 className="main__title">{title}</h3> 
                        <div className="main__cards">
                        {
                            items.map(item => (
                                <Card key={item.id} item={ item }/> 
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Main;
