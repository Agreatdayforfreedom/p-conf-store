import React from 'react';
import { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAdress';
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const address = useGoogleAddress(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name} Gracias por su compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={address} />
        </div>
      </div>
    </div>
  );
};

export default Success;
