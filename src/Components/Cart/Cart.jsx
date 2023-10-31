const Cart = ({ cart }) => {
    console.log(cart);
    const { img } = cart;
    return (
        <div>
            <h4>cart: {cart.length}</h4>
            <img src={img} alt="" />
        </div>
    );
};

export default Cart;