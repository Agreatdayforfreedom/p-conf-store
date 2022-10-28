import axios from 'axios';
import { useState, useEffect } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});

  const API = '';

  useEffect(() => {
    const fetch = async () => {
      //   const { data } = axios(API);
      setMap(
        data.results[0].geometry.location || {
          address: {
            lat: 29.0332,
            lng: -19.32909,
          },
        }
      );
    };
    fetch();
  }, []);

  return map;
};

export default useGoogleAddress;
