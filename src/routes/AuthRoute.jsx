// AuthRouter.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthRoute = ({ children }) => {
  const navigate = useNavigate();


  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // Si no hay token en el localStorage, redirige a la página de inicio de sesión
      navigate('/login');
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  // Si hay un token en el localStorage, renderiza las rutas privadas
  return <>{children}</>;
};
