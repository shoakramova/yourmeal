import { useState, useEffect } from "react";
import "./delivery.css";
import Button from "../../components/Button/Button";
import close from "./../../assets/icons/close.png";
import donut from "./../../assets/donut.png";

const Delivery = ({ onClose, onSubmit }) => {
    const [deliveryMethod, setDeliveryMethod] = useState("delivery")

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => (document.body.style.overflow = "")
    }, [])

    const handleDeliveryChange = (event) => {
        setDeliveryMethod(event.target.value)
    }

    return (
        <section className="delivery">
            <div className="delivery__block">
                <div className="delivery__img-block">
                    <img src={donut} alt="" className="delivery__img" />
                </div>
                <div className="delivery__forms">
                    <div className="delivery__title-and-close">
                        <h3 className="delivery__title">Доставка</h3>
                        <img src={close} alt="" className="delivery__close" onClick={onClose} />
                    </div>
                    <form >
                        <input type="text" className="delivery__input" placeholder="Ваше имя" required />
                        <input type="text" className="delivery__input" placeholder="Телефон" required />

                        <div className="delivery__radio-block">
                            <label className="delivery__radio-container">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="pickup"
                                    checked={deliveryMethod === "pickup"}
                                    onChange={handleDeliveryChange}
                                    className="delivery__radio"
                                />
                                <span className="radio-custom"></span>
                                Самовывоз
                            </label>

                            <label className="delivery__radio-container">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="delivery"
                                    checked={deliveryMethod === "delivery"}
                                    onChange={handleDeliveryChange}
                                    className="delivery__radio"
                                />
                                <span className="radio-custom"></span>
                                Доставка
                            </label>
                        </div>

                        {deliveryMethod === "delivery" && (
                            <div className="apperance">
                                <input type="text" className="delivery__input" placeholder="Квартира" required />
                                <div className="delivery__input-adress-block">
                                    <input type="text" className="delivery__input-small" placeholder="Этаж" required />
                                    <input type="text" className="delivery__input-small" placeholder="Домофон" required />
                                </div>
                            </div>
                        )}

                        <Button style="order-button" children={"Оформить"} onClick={onSubmit}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
