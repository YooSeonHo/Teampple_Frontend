import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { baseURL } from 'api/client';

const Ing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      'jwt_accessToken',
      location.search.split('=')[1].split('&')[0],
    );
    localStorage.setItem('jwt_refreshToken', location.search.split('=')[2]);

    if (localStorage.getItem('code')) {
      joinTeam();
      localStorage.removeItem('code');
    }
    
    if (localStorage.getItem('jwt_accessToken')) {
      navigate('/home');
      window.location.reload();
    } else window.location.reload();
  }, []);

  const joinTeam = async () => {
    await axios({
      url: `/api/invitations`,
      baseURL: baseURL,
      method: 'post',
      params: {
        code: localStorage.getItem('code'),
      },
      headers: {
        Authorization: location.search.split('=')[1].split('&')[0],
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BeatLoader color="#487aff" size={50} />
    </div>
  );
};

export default Ing;
