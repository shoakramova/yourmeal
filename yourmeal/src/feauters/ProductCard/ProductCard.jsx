import './productcard.css'
import close from './../../assets/icons/close.png'
import Button from '../../components/Button/Button'
import Counter from '../../components/Counter/Counter'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upCounter, downCounter, selectOrder, add } from '../../slices/orderReducer'

const ProductCard = ({ onClose, item }) => {
    const dispatch = useDispatch()
    const orders = useSelector(selectOrder)
    const order = orders.find(i => i.id === item.id) || { count: 0 }

    const handleAdd = () => {
        const findItem = orders.find(i => i.id === item.id)
        if(findItem) {
            onClose()
        } else {
        const newOrder = {
            ...item,
            count: 1
        }
            dispatch(add(newOrder))
            onClose()
        }
    }
    const handleUpCounter = () => {
        const findItem = orders.find(i => i.id === item.id)
        if(findItem) {
            dispatch(upCounter(findItem.id))
        } else {
            const newOrder = {
                ...item,
                count: 1
            }
            dispatch(add(newOrder))
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = ''
    }, [])

    return (
        <div className="product">
            <div className="product__block">
                <div className='product__name'>
                    <span className="product__name-name">{item.name}</span>
                    <img src={close} alt="close" onClick={onClose} />
                </div>
                <div className="product__img-and-desc">
                    <div className="product__img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="product__desc">
                        <span className="product__main-desc">{item.description}</span>
                        <span className="product__compound">
                            Состав:<br />
                            <ul>
                                {item.compound.map((ing, idx) => (
                                    <li key={idx}>{ing}, </li>
                                ))}
                            </ul>
                        </span>
                        <div className="product__weight">
                            <span>{item.weight}г</span>
                        </div>
                    </div>
                </div>
                <div className="product__price-and-count">
                    <div className="product__buttons">
                        <Button style='buttonCart' children={'Добавить'} onClick={handleAdd} />
                        <Counter value={order.count}
                            up={handleUpCounter}
                            down={() => dispatch(downCounter(order.id))} />
                    </div>
                    <div className="product__price">
                        {order.price * order.count || item.price} сум
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
