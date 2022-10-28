import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const total = cart.reduce((p, c) => p + c.price, 0);
    return total;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((i) => (
          <div className="Checkout-item" key={i.id}>
            <div className="Checkout-element">
              <h4>{i.title}</h4>
              <span>${i.price}</span>
            </div>
            <button type="button" onClick={handleRemove(i)}>
              <i className="fas fa-trash-alt" title="eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
