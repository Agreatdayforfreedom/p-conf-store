import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);

  const navigate = useNavigate();

  const handelSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      phone: formData.get('phone'),
      state: formData.get('state'),
      cp: formData.get('cp'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" id="name" />
            <input type="text" placeholder="Correo electronico" id="email" />
            <input type="text" placeholder="Direccion" id="address" />
            <input type="text" placeholder="apto" id="apto" />
            <input type="text" placeholder="Ciudad" id="city" />
            <input type="text" placeholder="Pais" id="country" />
            <input type="text" placeholder="Estado" id="state" />
            <input type="text" placeholder="Codigo postal" id="cp" />
            <input type="text" placeholder="Telefono" id="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button onClick={handelSubmit}> Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((c) => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{c.title}</h4>
              <span>${c.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
