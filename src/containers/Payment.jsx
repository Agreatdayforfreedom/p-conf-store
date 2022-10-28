import React from 'react';
import { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import handleSumTotal from '../utils/handleSumTotal';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const paypalOptions = {
    clientId:
      'access_token$sandbox$8c2h95ffnbwjdyps$b2fae4b8fc44aa6c4caafa06f8d850dc',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: handleSumTotal(cart),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {};

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((i) => (
          <div className="Payment-item" key={i.id}>
            <div className="Payment-element">
              <h4>{i.title}</h4>
              <span>$ {i.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            createOrder={(data, actions) => createOrder(data, actions)}
            onSuccess={(data) => {
              handlePaymentSuccess(data);
            }}
            onError={(err) => console.log(err)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
