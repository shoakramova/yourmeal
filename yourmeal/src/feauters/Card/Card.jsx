import './card.css'
import Button from '../../components/Button/Button';
import ProductCard from './../../feauters/ProductCard/ProductCard'
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrder, add, upCounter } from '../../slices/orderReducer';
import { useState } from 'react';

const Card = ({
    item
}) => {

    const dispatch = useDispatch()
    const order = useSelector(selectOrder)
    const [openProductCard, setOpenProductCart] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const handleAdd = (e) => {
        e.stopPropagation()
        const findItem = order.find( i => i.id == item.id)
        if(findItem) {
            dispatch(upCounter(findItem.id))
        } else {
            const order = {
                "id": item.id,
                "img": item.img,
                "name": item.name,
                "price": item.price,
                "weight": item.weight,
                "count": 1
            }
            dispatch(add(order))
        }

    }
    const handleOpen = (e) => {
        e.stopPropagation()
        setSelectedItem(item)
        setOpenProductCart(true)
    }
    const onClose = () => {
        setOpenProductCart(false)
    }
    return ( 
        <>
        <div className="card" onClick={ handleOpen }>
            <img src={item.img} alt="" className='card__img'/>
            <strong className='card__price'>{item.price} сум</strong>
            <span className="card__name">{item.name} </span>
            <span className="card__weight">{item.weight} г</span>
           <div className="card__button">
                <Button style='button' children={'Добавить'} onClick= { handleAdd }/>
            </div>
        </div>
        {
           openProductCard && <ProductCard onClose={ onClose } item={selectedItem}/>
        }
        </>
     );
}
 
export default Card;