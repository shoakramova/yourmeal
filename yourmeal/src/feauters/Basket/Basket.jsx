import { useState, useEffect } from "react";
import "./basket.css";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import icon from "./../../assets/icons/Доставка.png";
import { useSelector, useDispatch } from "react-redux";
import { upCounter, downCounter, selectOrder, clear } from "../../slices/orderReducer";
import Delivery from "../delivery/Delivery"; 

const Basket = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 981);
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)

    const dispatch = useDispatch();
    const orders = useSelector(selectOrder)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 981);
            if (window.innerWidth > 981) {
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const toggleBasket = () => {
        if (isMobile) {
            setIsOpen(!isOpen)
        }
    }

    const closeBasket = (e) => {
        if (isMobile && !e.target.closest(".basket") && !e.target.closest(".basket__768")) {
            setIsOpen(false);
        }
    }

    const handleOnOrder = () => {
        setIsDeliveryOpen(true)
    };

    const handleCloseDelivery = () => {
        setIsDeliveryOpen(false)
    };

    const handleSubmitDelivery = (e) => {
        e.preventDefault()
        dispatch(clear())
        setIsDeliveryOpen(false)
        alert("заказ оформлен!")
    }

    return (
        <>
            <section className="baskets" onClick={closeBasket}>
                {isMobile && (
                    <div className="basket__768" onClick={toggleBasket}>
                        <h4 className="basket__768-title">Корзина</h4>
                        <span className="basket__768-count">
                            {orders.reduce((acc, curr) => acc + curr.count, 0)}
                        </span>
                    </div>
                )}

                {(isOpen || !isMobile) && (
                    <div className="basket">
                        <div className="basket__header">
                            <h4 className="basket__title">Корзина</h4>
                            <span className="basket__count">
                                {orders.reduce((acc, curr) => acc + curr.count, 0)}
                            </span>
                        </div>

                        <div className="basket__table--row">
                            <div className="basket__container">
                                {orders.map((order) => (
                                    <div className="basket__table" key={order.id}>
                                        <img src={order.img} alt="" className="basket__img" />
                                        <div className="table__info">
                                            <span className="table__info-name">{order.name}</span>
                                            <span className="table__info-weight">{order.weight}г</span>
                                            <span className="table__info-price">{order.price} сум</span>
                                        </div>
                                        <div className="table__counter">
                                            <Counter
                                                value={order.count}
                                                up={() => dispatch(upCounter(order.id))}
                                                down={() => dispatch(downCounter(order.id))}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="basket__total">
                                <span className="basket__total-name">Итого</span>
                                <span className="basket__total-price">
                                    {orders.reduce((acc, curr) => acc + curr.price * curr.count, 0)} сум
                                </span>
                            </div>

                            <div className="order__button">
                                <Button style="buttonCart" onClick={handleOnOrder}>
                                    Оформить заказ
                                </Button>
                            </div>

                            <div className="basket__delivery">
                                <img src={icon} alt="" className="basket__delivery-icon" />
                                <span className="basket__delivery-text">Бесплатная доставка</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {isDeliveryOpen && <Delivery onClose={handleCloseDelivery} onSubmit={handleSubmitDelivery} />}
        </>
    );
};

export default Basket;
