import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import useGoogleAddress from '../hooks/useGoogleAdress';

// import Icon from '../assets/marker.png';
// import { Icon } from 'leaflet'
// import '../styles/Map.css';

const Map = ({ data }) => {
  // const position = [51.505, -0.09];
  const defaultCenter = [data.lat, data.lng];
  return (
    <MapContainer center={defaultCenter} zoom={9}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
