import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price } = bottle;
    // console.log(bottle);
    return (
        <div className="bottle">

            <h3>Bottle Name: {name} </h3>
            <img src={img} alt="" />
            <p>price: {price}</p>
            {/* Problem  */}
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>

        </div>
    );
};

export default Bottle;