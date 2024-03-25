
import { Link } from 'react-router-dom';

export const Login = () => {
  

  return (
    <div>
      <h1>Bienvenido al Módulo Login</h1>
      
      <Link to='/Dashboard' className='btn'>
        IniciarSesión
      </Link>
      
    </div>
  )
}


