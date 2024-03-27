import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { authService } from '@/services/auth-services';
import { useState } from 'react';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);
      // Verificar si se ha almacenado un token en el sessionStorage
      const token = authService.getToken();
      if (token) {
        console.log("Token válido");
        // Redirigir al usuario al dashboard
        const gato = sessionStorage.getItem('token')
        console.log(gato);
        navigate('/dashboard');

      } else {
        console.log("No se encontró un token válido en el sessionStorage");
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales incorrectas'); // Opcional: establece un mensaje de error personalizado
    }
  };
  
  return (
    <>
      <h1>Inicio de Sesión</h1>
      <div>
        <label>Correo electrónico:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <Link to="/">Volver al inicio</Link>
    </>
  );
};
