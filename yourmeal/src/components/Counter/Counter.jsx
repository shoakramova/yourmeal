import './counter.css'

const Counter = ({
    value,
    up,
    down
}) => {
    return ( 
        <div className="counter">
            <button className="counter__minus" onClick={ down }>-</button>
            <input type="text" className="counter__input" value={ value }  onChange={(e) => e.preventDefault()}/>
            <button className="counter__plus" onClick={ up }>+</button>
        </div>
     );
}
 
export default Counter;